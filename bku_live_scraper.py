"""
BKU Gecici Tavsiye - Syngenta Canli Eslestirme v4
PHI/Doz/MRL scraping iyilestirildi
"""
import requests, pandas as pd, json, time, glob, sys, re
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry
from bs4 import BeautifulSoup
from datetime import datetime

FORM_MAP = {
    "EC (Em\u00fclsiye Olabilen Konsantre)": "EC",
    "SC (Ak\u0131c\u0131 Konsantre/S\u00fcspansiyon Konsantre)": "SC",
    "CS (Kaps\u00fcl S\u00fcspansiyon)": "CS",
    "EW (Em\u00fclsiyon, Suda Ya\u011f)": "EW",
    "FS (Tohum \u0130la\u00e7lamas\u0131 \u0130\u00e7in Ak\u0131c\u0131 Konsantre)": "FS",
    "WG (Suda Da\u011f\u0131labilen Gran\u00fcl)": "WG",
    "WP (\u0130slanabilir Toz)": "WP",
    "ES (Em\u00fclsiyon Tohum \u0130lac\u0131)": "ES",
    "ZC (CS ve SC Form\u00fclasyonlar\u0131n\u0131n Kar\u0131\u015f\u0131m\u0131)": "ZC",
    "OD (Ya\u011fda Da\u011f\u0131labilen)": "OD",
    "SL (Suda \u00c7\u00f6z\u00fcnen Konsantre)": "SL",
}

def create_session():
    s = requests.Session()
    retry = Retry(total=5, backoff_factor=3, status_forcelist=[500, 502, 503, 504])
    adapter = HTTPAdapter(max_retries=retry)
    s.mount("https://", adapter)
    s.mount("http://", adapter)
    s.headers.update({
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,application/json,*/*;q=0.01",
        "Accept-Language": "tr-TR,tr;q=0.9,en;q=0.8",
        "X-Requested-With": "XMLHttpRequest",
        "Referer": "https://bku.tarimorman.gov.tr/BKUGeciciTavsiyeAlanlar/GeciciTavsiyeIndeks",
    })
    return s

def load_portfolio():
    for pat in ["SYNGENTA_PORTFOLIO*.xlsx", "portfolio*.xlsx", "*.xlsx"]:
        found = [f for f in glob.glob(pat) if not f.startswith("syngenta_bku")]
        if found:
            f = found[0]
            print(f"Portfolyo: {f}")
            df = pd.read_excel(f, sheet_name="Sheet1")
            lookup = {}
            for _, row in df.iterrows():
                a = str(row.get("AKT\u0130F MADDE", "") or row.get("AKTIF MADDE", "")).strip()
                fm = str(row.get("FORMULASYON", "") or row.get("FORM\u00dcLASYON", "")).strip()
                u = str(row.get("\u00dcR\u00dcN", "") or row.get("URUN", "")).strip()
                if a and fm and u and a != "nan":
                    lookup[(a, fm)] = u
                    lookup[(a + " ", fm)] = u
            print(f"  {len(lookup)} cift yuklendi")
            return lookup
    print("HATA: Portfolyo dosyasi bulunamadi!")
    return {}

def fetch_bku(session):
    print("BKU ana sayfa yukleniyor...")
    try:
        session.get(
            "https://bku.tarimorman.gov.tr/BKUGeciciTavsiyeAlanlar/GeciciTavsiyeIndeks",
            timeout=120
        )
        print(f"  Cookies: {list(session.cookies.keys())}")
    except Exception as e:
        print(f"  Ana sayfa hatasi (devam): {e}")

    url = "https://bku.tarimorman.gov.tr/BKUGeciciTavsiyeAlanlar/DataTableGetir"
    params = {
        "draw": "1", "start": "0", "length": "2000",
        "search[value]": "", "search[regex]": "false", "param1": "[]",
        "order[0][column]": "6", "order[0][dir]": "desc",
        "columns[0][data]": "bitkiAdi", "columns[1][data]": "zararliAdi",
        "columns[2][data]": "durumu", "columns[3][data]": "aktifMaddeAdi",
        "columns[4][data]": "formulasyonAdi", "columns[5][data]": "ruhsatGrubu",
        "columns[6][data]": "verilisTarihi", "columns[7][data]": "gecerlilikSuresi",
        "columns[8][data]": "id",
    }
    for i in range(9):
        params[f"columns[{i}][name]"] = ""
        params[f"columns[{i}][searchable]"] = "true"
        params[f"columns[{i}][orderable]"] = "true" if i < 8 else "false"
        params[f"columns[{i}][search][value]"] = ""
        params[f"columns[{i}][search][regex]"] = "false"

    print("BKU API cagriliyor...")
    resp = session.get(url, params=params, timeout=120)
    print(f"  Status: {resp.status_code} | Boyut: {len(resp.text)}")

    try:
        data = resp.json()
    except:
        print(f"JSON hatasi! Ilk 300 kar: {resp.text[:300]}")
        sys.exit(1)

    records = data.get("data", [])
    print(f"  Toplam: {data.get('recordsTotal', 0)} | Cekilen: {len(records)}")
    return records

def get_form_short(form_long):
    if not form_long:
        return ""
    fs = FORM_MAP.get(form_long)
    if fs:
        return fs
    fl = form_long.strip()
    if " (" in fl:
        return fl.split(" (")[0].strip()
    return fl[:2] if fl else ""

def match_records(records, lookup):
    today = datetime.now().strftime("%Y-%m-%d")
    valid = [r for r in records if (r.get("gecerlilikSuresi", "") or "") >= today]
    print(f"  Bugun gecerli: {len(valid)}")
    matched = []
    for r in valid:
        a = (r.get("aktifMaddeAdi", "") or "").strip()
        fl = (r.get("formulasyonAdi", "") or "").strip()
        fs = get_form_short(fl)
        u = lookup.get((a, fs)) or lookup.get((a + " ", fs))
        if u:
            r["syngenta_urun"] = u
            r["form_short"] = fs
            matched.append(r)
    print(f"  Syngenta eslesme: {len(matched)}")
    return matched

def scrape_detail_page(html, debug=False):
    """BKU detay sayfasindan PHI, Doz, MRL, Aciklama cikar.
    Birden fazla HTML yapisini dener."""
    
    result = {"phi": "-", "doz": "-", "mrl": "-", "aciklama": "-"}
    soup = BeautifulSoup(html, "html.parser")
    
    if debug:
        print(f"    HTML boyut: {len(html)} karakter")
        # Tum dt etiketlerini listele
        dts = soup.find_all("dt")
        print(f"    Bulunan <dt> sayisi: {len(dts)}")
        for dt in dts[:15]:
            dd = dt.find_next_sibling("dd")
            dd_text = dd.get_text(strip=True)[:60] if dd else "YOK"
            print(f"      dt='{dt.get_text(strip=True)[:50]}' -> dd='{dd_text}'")
    
    # Yontem 1: <dt> / <dd> yapisi
    for dt in soup.find_all("dt"):
        txt = dt.get_text(strip=True).lower()
        dd = dt.find_next_sibling("dd")
        val = dd.get_text(strip=True) if dd else ""
        if not val or val == "":
            continue
        
        if ("son ila" in txt or "hasat ara" in txt) and result["phi"] == "-":
            result["phi"] = val
        elif "dozu" in txt and result["doz"] == "-":
            result["doz"] = val
        elif "mrl" in txt and result["mrl"] == "-":
            result["mrl"] = val
        elif ("a\u00e7\u0131klama" in txt or "aciklama" in txt) and result["aciklama"] == "-":
            result["aciklama"] = val
    
    # Yontem 2: Regex ile HTML'den direkt cek (dt/dd bulunamazsa)
    if result["phi"] == "-":
        # "Son İlaçlama ile Hasat Arası Süre" etiketi ve sonrasındaki değer
        patterns = [
            r'Son\s+[İI]la[çc]lama.*?(?:S[üu]re)\s*</dt>\s*<dd[^>]*>\s*(.*?)\s*</dd>',
            r'Son\s+[İI]la[çc]lama.*?(?:S[üu]re)\s*</\w+>\s*<\w+[^>]*>\s*(.*?)\s*</\w+>',
            r'Hasat\s+Aras[ıi].*?</dt>\s*<dd[^>]*>\s*(.*?)\s*</dd>',
            r'Hasat\s+Aras[ıi].*?</\w+>\s*<\w+[^>]*>\s*(.*?)\s*</\w+>',
        ]
        for pat in patterns:
            m = re.search(pat, html, re.IGNORECASE | re.DOTALL)
            if m:
                val = re.sub(r'<[^>]+>', '', m.group(1)).strip()
                if val and val != "-" and val != "":
                    result["phi"] = val
                    if debug:
                        print(f"    PHI regex ile bulundu: '{val}'")
                    break
    
    if result["doz"] == "-":
        patterns = [
            r'Dozu\s*</dt>\s*<dd[^>]*>\s*(.*?)\s*</dd>',
            r'Dozu\s*</\w+>\s*<\w+[^>]*>\s*(.*?)\s*</\w+>',
            r'>Dozu<.*?>([\d\s,.mglkLda/]+(?:ml|g|l|da|su|tohum)[^<]*)<',
        ]
        for pat in patterns:
            m = re.search(pat, html, re.IGNORECASE | re.DOTALL)
            if m:
                val = re.sub(r'<[^>]+>', '', m.group(1)).strip()
                if val:
                    result["doz"] = val
                    break
    
    if result["mrl"] == "-":
        patterns = [
            r'MRL\s*</dt>\s*<dd[^>]*>\s*(.*?)\s*</dd>',
            r'MRL\s*</\w+>\s*<\w+[^>]*>\s*(.*?)\s*</\w+>',
            r'>MRL<.*?>([\d\s,.;:a-zA-Z/]+)<',
        ]
        for pat in patterns:
            m = re.search(pat, html, re.IGNORECASE | re.DOTALL)
            if m:
                val = re.sub(r'<[^>]+>', '', m.group(1)).strip()
                if val:
                    result["mrl"] = val
                    break
    
    if result["aciklama"] == "-":
        patterns = [
            r'[Aa][çc]\u0131klama\s*</dt>\s*<dd[^>]*>\s*(.*?)\s*</dd>',
            r'[Aa][çc]\u0131klama\s*</\w+>\s*<\w+[^>]*>\s*(.*?)\s*</\w+>',
            r'A\u00e7\u0131klama\s*</dt>\s*<dd[^>]*>\s*(.*?)\s*</dd>',
        ]
        for pat in patterns:
            m = re.search(pat, html, re.IGNORECASE | re.DOTALL)
            if m:
                val = re.sub(r'<[^>]+>', '', m.group(1)).strip()
                if val:
                    result["aciklama"] = val
                    break
    
    return result

def scrape_details(matched, session):
    debug_first = True  # Ilk kayit icin detayli log
    
    for i, r in enumerate(matched):
        rid = r.get("id")
        if not rid:
            continue
        print(f"  [{i+1}/{len(matched)}] {r.get('bitkiAdi','')} - {r.get('syngenta_urun','')}")
        try:
            resp = session.get(
                f"https://bku.tarimorman.gov.tr/BKUGeciciTavsiyeAlanlar/Details/{rid}",
                timeout=60
            )
            details = scrape_detail_page(resp.text, debug=debug_first)
            r.update(details)
            
            if debug_first:
                print(f"    >>> PHI='{details['phi']}' | Doz='{details['doz']}' | MRL='{details['mrl']}'")
                debug_first = False
            
        except Exception as e:
            print(f"    HATA: {e}")
            r["phi"] = "-"; r["doz"] = "-"; r["mrl"] = "-"; r["aciklama"] = "-"
        time.sleep(1)
    return matched

def save(matched):
    ts = datetime.now().strftime("%Y-%m-%d %H:%M")
    rows = []
    for r in matched:
        rows.append({
            "urun": r.get("syngenta_urun", ""),
            "form": r.get("form_short", ""),
            "aktif": r.get("aktifMaddeAdi", ""),
            "bitki": r.get("bitkiAdi", ""),
            "zararli": r.get("zararliAdi", ""),
            "phi": r.get("phi", "-"),
            "doz": r.get("doz", "-"),
            "mrl": r.get("mrl", "-"),
            "grup": r.get("ruhsatGrubu", ""),
            "gecerlilik": (r.get("gecerlilikSuresi", "") or "")[:10],
            "aciklama": r.get("aciklama", "-"),
        })
    with open("data.js", "w", encoding="utf-8") as f:
        f.write(f"// Son guncelleme: {ts}\n")
        f.write(f"// Toplam: {len(rows)} eslesme\n")
        f.write(f"const BKU_DATA = {json.dumps(rows, ensure_ascii=False, indent=2)};\n")
    pd.DataFrame(rows).to_excel("syngenta_bku_live.xlsx", index=False)
    print(f"  data.js + Excel: {len(rows)} kayit")
    
    # PHI istatistigi
    phi_found = sum(1 for r in rows if r["phi"] != "-")
    print(f"  PHI bulunan: {phi_found}/{len(rows)}")

if __name__ == "__main__":
    print("=" * 50)
    print("BKU - Syngenta Eslestirme v4")
    print("=" * 50)
    lookup = load_portfolio()
    if not lookup:
        sys.exit(1)
    session = create_session()
    recs = fetch_bku(session)
    m = match_records(recs, lookup)
    print("\nDetaylar cekiliyor...")
    m = scrape_details(m, session)
    print("\nKaydediliyor...")
    save(m)
    print(f"\nTAMAMLANDI: {len(m)} eslesme")
