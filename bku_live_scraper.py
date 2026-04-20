"""
BKU Gecici Tavsiye - Syngenta Canli Eslestirme v3
Timeout arttirildi + retry eklendi
"""
import requests, pandas as pd, json, time, glob, sys
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
    """Retry + uzun timeout ile session olustur."""
    s = requests.Session()
    retry = Retry(total=5, backoff_factor=3, status_forcelist=[500, 502, 503, 504])
    adapter = HTTPAdapter(max_retries=retry)
    s.mount("https://", adapter)
    s.mount("http://", adapter)
    s.headers.update({
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "application/json, text/javascript, */*; q=0.01",
        "Accept-Language": "tr-TR,tr;q=0.9,en;q=0.8",
        "X-Requested-With": "XMLHttpRequest",
        "Referer": "https://bku.tarimorman.gov.tr/BKUGeciciTavsiyeAlanlar/GeciciTavsiyeIndeks",
    })
    return s

def load_portfolio():
    for pat in ["SYNGENTA_PORTFOLIO*.xlsx", "portfolio*.xlsx", "*.xlsx"]:
        found = glob.glob(pat)
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
    # Once ana sayfayi ziyaret et (cookie icin)
    print("BKU ana sayfa yukleniyor...")
    try:
        session.get(
            "https://bku.tarimorman.gov.tr/BKUGeciciTavsiyeAlanlar/GeciciTavsiyeIndeks",
            timeout=120
        )
        print(f"  Cookies: {list(session.cookies.keys())}")
    except Exception as e:
        print(f"  Ana sayfa hatasi (devam ediliyor): {e}")

    url = "https://bku.tarimorman.gov.tr/BKUGeciciTavsiyeAlanlar/DataTableGetir"
    params = {
        "draw": "1", "start": "0", "length": "2000",
        "search[value]": "", "search[regex]": "false", "param1": "[]",
        "order[0][column]": "6", "order[0][dir]": "desc",
        "columns[0][data]": "bitkiAdi",
        "columns[1][data]": "zararliAdi",
        "columns[2][data]": "durumu",
        "columns[3][data]": "aktifMaddeAdi",
        "columns[4][data]": "formulasyonAdi",
        "columns[5][data]": "ruhsatGrubu",
        "columns[6][data]": "verilisTarihi",
        "columns[7][data]": "gecerlilikSuresi",
        "columns[8][data]": "id",
    }
    # Her sutun icin searchable/orderable parametreleri
    for i in range(9):
        params[f"columns[{i}][name]"] = ""
        params[f"columns[{i}][searchable]"] = "true"
        params[f"columns[{i}][orderable]"] = "true" if i < 8 else "false"
        params[f"columns[{i}][search][value]"] = ""
        params[f"columns[{i}][search][regex]"] = "false"

    print("BKU API cagriliyor (timeout=120s, 5 retry)...")
    resp = session.get(url, params=params, timeout=120)
    print(f"  Status: {resp.status_code}")
    print(f"  Content-Type: {resp.headers.get('Content-Type', '?')}")
    print(f"  Boyut: {len(resp.text)} karakter")
    print(f"  Ilk 200 kar: {resp.text[:200]}")

    try:
        data = resp.json()
    except Exception as e:
        print(f"JSON hatasi: {e}")
        print(f"HTML mi? {'<html' in resp.text.lower()}")
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

def scrape_details(matched, session):
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
            soup = BeautifulSoup(resp.text, "html.parser")
            def gf(label):
                for dt in soup.find_all("dt"):
                    txt = dt.get_text(strip=True)
                    if txt and label.lower() in txt.lower():
                        dd = dt.find_next_sibling("dd")
                        return dd.get_text(strip=True) if dd else "-"
                return "-"
            r["phi"] = gf("son ila")
            r["doz"] = gf("dozu")
            r["mrl"] = gf("mrl")
            r["aciklama"] = gf("a\u00e7\u0131klama") or gf("aciklama")
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

if __name__ == "__main__":
    print("=" * 50)
    print("BKU - Syngenta Eslestirme v3")
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
