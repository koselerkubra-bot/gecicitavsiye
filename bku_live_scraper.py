"""
BKU Geçici Tavsiye — Syngenta Canlı Eşleştirme
================================================
Portföy Excel'inden ürün listesini okur,
BKU API'den geçici tavsiyeleri çeker, eşleştirir,
data.js + Excel üretir.

Kullanım:
    pip install requests beautifulsoup4 pandas openpyxl
    python bku_live_scraper.py
"""

import requests, pandas as pd, json, time, os, glob
from bs4 import BeautifulSoup
from datetime import datetime

FORM_MAP = {
    "EC (Emülsiye Olabilen Konsantre)": "EC",
    "SC (Akıcı Konsantre/Süspansiyon Konsantre)": "SC",
    "CS (Kapsül Süspansiyon)": "CS",
    "EW (Emülsiyon, Suda Yağ)": "EW",
    "FS (Tohum İlaçlaması İçin Akıcı Konsantre)": "FS",
    "WG (Suda Dağılabilen Granül)": "WG",
    "WP (Islanabilir Toz)": "WP",
    "ES (Emülsiyon Tohum İlacı)": "ES",
    "ZC (CS ve SC Formülasyonlarının Karışımı)": "ZC",
    "OD (Yağda Dağılabilen)": "OD",
    "SL (Suda Çözünen Konsantre)": "SL",
}

def load_portfolio():
    for pat in ["SYNGENTA_PORTFOLIO.xlsx", "portfolio.xlsx"]:
        found = glob.glob(pat)
        if found:
            f = found[0]; print(f"Portföy: {f}")
            df = pd.read_excel(f, sheet_name="Sheet1")
            lookup = {}
            for _, row in df.iterrows():
                a = str(row.get("AKTİF MADDE","")).strip()
                fm = str(row.get("FORMULASYON","")).strip()
                u = str(row.get("ÜRÜN","")).strip()
                if a and fm and u and a != "nan":
                    lookup[(a, fm)] = u
                    lookup[(a+" ", fm)] = u
            print(f"  {len(lookup)} çift yüklendi")
            return lookup
    print("HATA: Portföy dosyası bulunamadı!"); return {}

def fetch_bku(n=2000):
    url = "https://bku.tarimorman.gov.tr/BKUGeciciTavsiyeAlanlar/DataTableGetir"
    p = {"draw":1,"start":0,"length":n,"search[value]":"","param1":"[]",
         "order[0][column]":6,"order[0][dir]":"desc",
         "columns[0][data]":"bitkiAdi","columns[1][data]":"zararliAdi",
         "columns[2][data]":"durumu","columns[3][data]":"aktifMaddeAdi",
         "columns[4][data]":"formulasyonAdi","columns[5][data]":"ruhsatGrubu",
         "columns[6][data]":"verilisTarihi","columns[7][data]":"gecerlilikSuresi",
         "columns[8][data]":"id"}
    print("BKU API çağrılıyor...")
    r = requests.get(url, params=p, headers={"Accept":"application/json"}, timeout=30)
    data = r.json(); recs = data.get("data",[])
    print(f"  Toplam: {data.get('recordsTotal',0)} | Çekilen: {len(recs)}")
    return recs

def match(records, lookup):
    today = datetime.now().strftime("%Y-%m-%d")
    valid = [r for r in records if (r.get("gecerlilikSuresi","") or "") >= today]
    print(f"  Bugün geçerli: {len(valid)}")
    matched = []
    for r in valid:
        a = (r.get("aktifMaddeAdi","") or "").strip()
        fl = (r.get("formulasyonAdi","") or "").strip()
        fs = FORM_MAP.get(fl, fl[:2] if fl else "")
        u = lookup.get((a,fs)) or lookup.get((a+" ",fs))
        if u:
            r["syngenta_urun"]=u; r["form_short"]=fs; matched.append(r)
    print(f"  Syngenta eşleşme: {len(matched)}")
    return matched

def scrape_details(matched):
    s = requests.Session()
    s.headers.update({"User-Agent":"Mozilla/5.0 (compatible; SyngentaBot/1.0)"})
    for i, r in enumerate(matched):
        rid = r.get("id"); 
        if not rid: continue
        print(f"  [{i+1}/{len(matched)}] {r['bitkiAdi']} — {r['syngenta_urun']}")
        try:
            resp = s.get(f"https://bku.tarimorman.gov.tr/BKUGeciciTavsiyeAlanlar/Details/{rid}", timeout=15)
            soup = BeautifulSoup(resp.text, "html.parser")
            def gf(label):
                for dt in soup.find_all("dt"):
                    if dt.get_text(strip=True) and label.lower() in dt.get_text(strip=True).lower():
                        dd = dt.find_next_sibling("dd")
                        return dd.get_text(strip=True) if dd else "-"
                return "-"
            r["phi"]=gf("Son İlaçlama"); r["doz"]=gf("Dozu")
            r["mrl"]=gf("MRL"); r["aciklama"]=gf("Açıklama")
        except Exception as e:
            print(f"    HATA: {e}"); r["phi"]="-"
        time.sleep(0.5)
    return matched

def save(matched):
    ts = datetime.now().strftime("%Y-%m-%d %H:%M")
    rows = [{"urun":r.get("syngenta_urun",""),"form":r.get("form_short",""),
             "aktif":r.get("aktifMaddeAdi",""),"bitki":r.get("bitkiAdi",""),
             "zararli":r.get("zararliAdi",""),"phi":r.get("phi","-"),
             "doz":r.get("doz","-"),"mrl":r.get("mrl","-"),
             "grup":r.get("ruhsatGrubu",""),
             "gecerlilik":(r.get("gecerlilikSuresi","") or "")[:10],
             "aciklama":r.get("aciklama","-")} for r in matched]
    with open("data.js","w",encoding="utf-8") as f:
        f.write(f"// Son güncelleme: {ts}\n// Toplam: {len(rows)} eşleşme\n")
        f.write(f"const BKU_DATA = {json.dumps(rows, ensure_ascii=False, indent=2)};\n")
    pd.DataFrame(rows).to_excel("syngenta_bku_live.xlsx", index=False)
    print(f"  data.js + Excel: {len(rows)} kayıt")

if __name__ == "__main__":
    print("="*50); print("BKU — Syngenta Eşleştirme"); print("="*50)
    lookup = load_portfolio()
    if not lookup: exit(1)
    recs = fetch_bku()
    m = match(recs, lookup)
    print("\nDetaylar çekiliyor...")
    m = scrape_details(m)
    print("\nKaydediliyor...")
    save(m)
    print(f"\nTAMAMLANDI: {len(m)} eşleşme")
