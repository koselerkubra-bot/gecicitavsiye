"""
BKU Gecici Tavsiye - Syngenta Canli Eslestirme
"""
import requests, pandas as pd, json, time, glob, sys
from bs4 import BeautifulSoup
from datetime import datetime

FORM_MAP = {
    "EC (Emulsiye Olabilen Konsantre)": "EC",
    "SC (Akici Konsantre/Susansiyon Konsantre)": "SC",
    "CS (Kapsul Susansiyon)": "CS",
    "EW (Emulsiyon, Suda Yag)": "EW",
    "FS (Tohum Ilaclamasi Icin Akici Konsantre)": "FS",
    "WG (Suda Dagilabilen Granul)": "WG",
    "WP (Islanabilir Toz)": "WP",
    "ES (Emulsiyon Tohum Ilaci)": "ES",
    "ZC (CS ve SC Formulasyonlarinin Karisimi)": "ZC",
    "OD (Yagda Dagilabilen)": "OD",
    "SL (Suda Cozunen Konsantre)": "SL",
}

# Turkish character variants for form matching
FORM_MAP_TR = {
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
FORM_MAP.update(FORM_MAP_TR)

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

def fetch_bku():
    session = requests.Session()
    session.headers.update({
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "application/json, text/javascript, */*; q=0.01",
        "Accept-Language": "tr-TR,tr;q=0.9,en;q=0.8",
        "X-Requested-With": "XMLHttpRequest",
        "Referer": "https://bku.tarimorman.gov.tr/BKUGeciciTavsiyeAlanlar/GeciciTavsiyeIndeks",
    })

    # Step 1: Visit main page to get cookies
    print("BKU ana sayfa yukleniyor (cookie icin)...")
    try:
        main = session.get(
            "https://bku.tarimorman.gov.tr/BKUGeciciTavsiyeAlanlar/GeciciTavsiyeIndeks",
            timeout=30
        )
        print(f"  Ana sayfa status: {main.status_code}")
        print(f"  Cookies: {list(session.cookies.keys())}")
    except Exception as e:
        print(f"  Ana sayfa hatasi: {e}")

    # Step 2: Call DataTable API
    url = "https://bku.tarimorman.gov.tr/BKUGeciciTavsiyeAlanlar/DataTableGetir"
    params = {
        "draw": "1",
        "start": "0",
        "length": "2000",
        "search[value]": "",
        "search[regex]": "false",
        "param1": "[]",
        "order[0][column]": "6",
        "order[0][dir]": "desc",
        "columns[0][data]": "bitkiAdi",
        "columns[0][name]": "",
        "columns[0][searchable]": "true",
        "columns[0][orderable]": "true",
        "columns[0][search][value]": "",
        "columns[0][search][regex]": "false",
        "columns[1][data]": "zararliAdi",
        "columns[1][name]": "",
        "columns[1][searchable]": "true",
        "columns[1][orderable]": "true",
        "columns[1][search][value]": "",
        "columns[1][search][regex]": "false",
        "columns[2][data]": "durumu",
        "columns[2][name]": "",
        "columns[2][searchable]": "true",
        "columns[2][orderable]": "true",
        "columns[2][search][value]": "",
        "columns[2][search][regex]": "false",
        "columns[3][data]": "aktifMaddeAdi",
        "columns[3][name]": "",
        "columns[3][searchable]": "true",
        "columns[3][orderable]": "true",
        "columns[3][search][value]": "",
        "columns[3][search][regex]": "false",
        "columns[4][data]": "formulasyonAdi",
        "columns[4][name]": "",
        "columns[4][searchable]": "true",
        "columns[4][orderable]": "true",
        "columns[4][search][value]": "",
        "columns[4][search][regex]": "false",
        "columns[5][data]": "ruhsatGrubu",
        "columns[5][name]": "",
        "columns[5][searchable]": "true",
        "columns[5][orderable]": "true",
        "columns[5][search][value]": "",
        "columns[5][search][regex]": "false",
        "columns[6][data]": "verilisTarihi",
        "columns[6][name]": "",
        "columns[6][searchable]": "true",
        "columns[6][orderable]": "true",
        "columns[6][search][value]": "",
        "columns[6][search][regex]": "false",
        "columns[7][data]": "gecerlilikSuresi",
        "columns[7][name]": "",
        "columns[7][searchable]": "true",
        "columns[7][orderable]": "true",
        "columns[7][search][value]": "",
        "columns[7][search][regex]": "false",
        "columns[8][data]": "id",
        "columns[8][name]": "",
        "columns[8][searchable]": "true",
        "columns[8][orderable]": "false",
        "columns[8][search][value]": "",
        "columns[8][search][regex]": "false",
    }

    print("BKU API cagriliyor...")
    resp = session.get(url, params=params, timeout=30)
    print(f"  Status: {resp.status_code}")
    print(f"  Content-Type: {resp.headers.get('Content-Type', 'bilinmiyor')}")
    print(f"  Yanit boyut: {len(resp.text)} karakter")
    print(f"  Yanit ilk 300 kar: {resp.text[:300]}")

    if resp.status_code != 200:
        print(f"HATA: API {resp.status_code} dondu")
        sys.exit(1)

    try:
        data = resp.json()
    except Exception as e:
        print(f"\nJSON parse hatasi: {e}")
        print(f"Yanit HTML mi? {'<html' in resp.text.lower()}")
        print(f"Yanit ilk 500 kar:\n{resp.text[:500]}")
        sys.exit(1)

    records = data.get("data", [])
    total = data.get("recordsTotal", 0)
    print(f"  Toplam: {total} | Cekilen: {len(records)}")
    
    if len(records) > 0:
        print(f"  Ornek kayit: {json.dumps(records[0], ensure_ascii=False)[:200]}")
    
    return records

def get_form_short(form_long):
    if not form_long:
        return ""
    # Try direct lookup
    fs = FORM_MAP.get(form_long)
    if fs:
        return fs
    # Try extracting first 2-3 chars before parenthesis
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

def scrape_details(matched):
    s = requests.Session()
    s.headers.update({
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36"
    })
    for i, r in enumerate(matched):
        rid = r.get("id")
        if not rid:
            continue
        print(f"  [{i+1}/{len(matched)}] {r.get('bitkiAdi','')} - {r.get('syngenta_urun','')}")
        try:
            resp = s.get(
                f"https://bku.tarimorman.gov.tr/BKUGeciciTavsiyeAlanlar/Details/{rid}",
                timeout=15
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
        time.sleep(0.5)
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
    print("BKU - Syngenta Eslestirme")
    print("=" * 50)
    lookup = load_portfolio()
    if not lookup:
        sys.exit(1)
    recs = fetch_bku()
    m = match_records(recs, lookup)
    print("\nDetaylar cekiliyor...")
    m = scrape_details(m)
    print("\nKaydediliyor...")
    save(m)
    print(f"\nTAMAMLANDI: {len(m)} eslesme")
