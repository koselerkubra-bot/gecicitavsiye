// Son guncelleme: 2026-06-19 09:49
// Tekrarlayan tavsiyeler: 107 kombinasyon
const BKU_RECURRING = [
  {
    "bitki": "ISPANAK",
    "zararli": "Pamuk yaprakkurdu",
    "zararliLat": "Spodoptera littoralis",
    "urun": "KARATE ZEON",
    "form": "CS",
    "aktif": "50 g/l Lambda-cyhalothrin ",
    "grup": "İnsektisit",
    "tekrar": 5,
    "donemler": [
      {
        "tavsiye": "2026-04-30",
        "gecerlilik": "2026-08-31",
        "durum": "Geçerli"
      },
      {
        "tavsiye": "2026-01-01",
        "gecerlilik": "2026-04-30",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-10-04",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-07-03",
        "gecerlilik": "2025-10-03",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-04-02",
        "gecerlilik": "2025-07-02",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "MAYDANOZ",
    "zararli": "Mildiyö",
    "zararliLat": "Plasmopara spp, Bremia lactucae",
    "urun": "QUADRİS",
    "form": "SC",
    "aktif": "250 g/l Azoxystrobin",
    "grup": "Fungisit",
    "tekrar": 4,
    "donemler": [
      {
        "tavsiye": "2026-05-01",
        "gecerlilik": "2026-08-31",
        "durum": "Geçerli"
      },
      {
        "tavsiye": "2026-01-01",
        "gecerlilik": "2026-04-30",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "DEREOTU",
    "zararli": "Yaprağı Yenen Sebzelerde Beyaz Pas",
    "zararliLat": "Albugo candida, Wilsoniana occidentalis, Wilsoniana portulacae",
    "urun": "QUADRİS",
    "form": "SC",
    "aktif": "250 g/l Azoxystrobin",
    "grup": "Fungisit",
    "tekrar": 4,
    "donemler": [
      {
        "tavsiye": "2026-05-01",
        "gecerlilik": "2026-08-31",
        "durum": "Geçerli"
      },
      {
        "tavsiye": "2026-01-01",
        "gecerlilik": "2026-04-30",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "DEREOTU",
    "zararli": "Alternaria yaprak lekesi",
    "zararliLat": "Alternaria spp.",
    "urun": "QUADRİS",
    "form": "SC",
    "aktif": "250 g/l Azoxystrobin",
    "grup": "Fungisit",
    "tekrar": 4,
    "donemler": [
      {
        "tavsiye": "2026-05-01",
        "gecerlilik": "2026-08-31",
        "durum": "Geçerli"
      },
      {
        "tavsiye": "2026-01-01",
        "gecerlilik": "2026-04-30",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "NANE",
    "zararli": "Yaprağı Yenen Sebzelerde Beyaz Pas",
    "zararliLat": "Albugo candida, Wilsoniana occidentalis, Wilsoniana portulacae",
    "urun": "QUADRİS",
    "form": "SC",
    "aktif": "250 g/l Azoxystrobin",
    "grup": "Fungisit",
    "tekrar": 4,
    "donemler": [
      {
        "tavsiye": "2026-05-01",
        "gecerlilik": "2026-08-31",
        "durum": "Geçerli"
      },
      {
        "tavsiye": "2026-01-01",
        "gecerlilik": "2026-04-30",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "ISPANAK",
    "zararli": "Yaprağı Yenen Sebzelerde Beyaz Pas",
    "zararliLat": "Albugo candida, Wilsoniana occidentalis, Wilsoniana portulacae",
    "urun": "QUADRİS",
    "form": "SC",
    "aktif": "250 g/l Azoxystrobin",
    "grup": "Fungisit",
    "tekrar": 4,
    "donemler": [
      {
        "tavsiye": "2026-05-01",
        "gecerlilik": "2026-08-31",
        "durum": "Geçerli"
      },
      {
        "tavsiye": "2026-01-01",
        "gecerlilik": "2026-04-30",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "ROKA",
    "zararli": "Alternaria yaprak lekesi",
    "zararliLat": "Alternaria spp.",
    "urun": "QUADRİS",
    "form": "SC",
    "aktif": "250 g/l Azoxystrobin",
    "grup": "Fungisit",
    "tekrar": 4,
    "donemler": [
      {
        "tavsiye": "2026-05-01",
        "gecerlilik": "2026-08-31",
        "durum": "Geçerli"
      },
      {
        "tavsiye": "2026-01-01",
        "gecerlilik": "2026-04-30",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "ROKA",
    "zararli": "Mildiyö",
    "zararliLat": "Plasmopara spp, Bremia lactucae",
    "urun": "QUADRİS",
    "form": "SC",
    "aktif": "250 g/l Azoxystrobin",
    "grup": "Fungisit",
    "tekrar": 4,
    "donemler": [
      {
        "tavsiye": "2026-05-01",
        "gecerlilik": "2026-08-31",
        "durum": "Geçerli"
      },
      {
        "tavsiye": "2026-01-01",
        "gecerlilik": "2026-04-30",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "ROKA",
    "zararli": "Sebzelerde septorya yaprak lekesi",
    "zararliLat": "Septoria apiicola, S.lycopersici, S.petroselini",
    "urun": "QUADRİS",
    "form": "SC",
    "aktif": "250 g/l Azoxystrobin",
    "grup": "Fungisit",
    "tekrar": 4,
    "donemler": [
      {
        "tavsiye": "2026-05-01",
        "gecerlilik": "2026-08-31",
        "durum": "Geçerli"
      },
      {
        "tavsiye": "2026-01-01",
        "gecerlilik": "2026-04-30",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "TERE",
    "zararli": "Alternaria yaprak lekesi",
    "zararliLat": "Alternaria spp.",
    "urun": "QUADRİS",
    "form": "SC",
    "aktif": "250 g/l Azoxystrobin",
    "grup": "Fungisit",
    "tekrar": 4,
    "donemler": [
      {
        "tavsiye": "2026-05-01",
        "gecerlilik": "2026-08-31",
        "durum": "Geçerli"
      },
      {
        "tavsiye": "2026-01-01",
        "gecerlilik": "2026-04-30",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "TERE",
    "zararli": "Mildiyö",
    "zararliLat": "Plasmopara spp, Bremia lactucae",
    "urun": "QUADRİS",
    "form": "SC",
    "aktif": "250 g/l Azoxystrobin",
    "grup": "Fungisit",
    "tekrar": 4,
    "donemler": [
      {
        "tavsiye": "2026-05-01",
        "gecerlilik": "2026-08-31",
        "durum": "Geçerli"
      },
      {
        "tavsiye": "2026-01-01",
        "gecerlilik": "2026-04-30",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "ARMUT",
    "zararli": "Turunçgil uzun antenli böceği",
    "zararliLat": "Anoplophora chinensis",
    "urun": "NİNJA 5 EC",
    "form": "EC",
    "aktif": "50 g/l Lambda-cyhalothrin ",
    "grup": "İnsektisit",
    "tekrar": 3,
    "donemler": [
      {
        "tavsiye": "2026-04-15",
        "gecerlilik": "2026-08-13",
        "durum": "İl/İlçe bazında Geçici Tavsiye"
      },
      {
        "tavsiye": "2025-08-01",
        "gecerlilik": "2025-10-30",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-07-30",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "ELMA",
    "zararli": "Turunçgil uzun antenli böceği",
    "zararliLat": "Anoplophora chinensis",
    "urun": "NİNJA 5 EC",
    "form": "EC",
    "aktif": "50 g/l Lambda-cyhalothrin ",
    "grup": "İnsektisit",
    "tekrar": 3,
    "donemler": [
      {
        "tavsiye": "2026-04-15",
        "gecerlilik": "2026-08-13",
        "durum": "İl/İlçe bazında Geçici Tavsiye"
      },
      {
        "tavsiye": "2025-08-01",
        "gecerlilik": "2025-10-30",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-07-30",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "KİRAZ",
    "zararli": "Turunçgil uzun antenli böceği",
    "zararliLat": "Anoplophora chinensis",
    "urun": "AMPLİGO 150 ZC",
    "form": "ZC",
    "aktif": "100 g/l Chlorantraniliprole + 50 g/l Lambda-cyhalothrin",
    "grup": "İnsektisit",
    "tekrar": 3,
    "donemler": [
      {
        "tavsiye": "2026-04-15",
        "gecerlilik": "2026-08-13",
        "durum": "İl/İlçe bazında Geçici Tavsiye"
      },
      {
        "tavsiye": "2025-08-01",
        "gecerlilik": "2025-10-30",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-07-30",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "FINDIK",
    "zararli": "Turunçgil uzun antenli böceği",
    "zararliLat": "Anoplophora chinensis",
    "urun": "NİNJA 5 EC",
    "form": "EC",
    "aktif": "50 g/l Lambda-cyhalothrin ",
    "grup": "İnsektisit",
    "tekrar": 3,
    "donemler": [
      {
        "tavsiye": "2026-04-15",
        "gecerlilik": "2026-08-13",
        "durum": "İl/İlçe bazında Geçici Tavsiye"
      },
      {
        "tavsiye": "2025-08-01",
        "gecerlilik": "2025-10-30",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-07-30",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "FINDIK",
    "zararli": "Turunçgil uzun antenli böceği",
    "zararliLat": "Anoplophora chinensis",
    "urun": "AMPLİGO 150 ZC",
    "form": "ZC",
    "aktif": "100 g/l Chlorantraniliprole + 50 g/l Lambda-cyhalothrin",
    "grup": "İnsektisit",
    "tekrar": 3,
    "donemler": [
      {
        "tavsiye": "2026-04-15",
        "gecerlilik": "2026-08-13",
        "durum": "İl/İlçe bazında Geçici Tavsiye"
      },
      {
        "tavsiye": "2025-08-01",
        "gecerlilik": "2025-10-30",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-07-30",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "KAVAK, ÇINAR, HUŞ, AT KESTANESİ, KARAAĞAÇ, KIZILAĞAÇ, AKÇAAĞAÇ, GÜRGEN",
    "zararli": "Turunçgil uzun antenli böceği",
    "zararliLat": "Anoplophora chinensis",
    "urun": "KARATE ZEON",
    "form": "CS",
    "aktif": "50 g/l Lambda-cyhalothrin ",
    "grup": "İnsektisit",
    "tekrar": 3,
    "donemler": [
      {
        "tavsiye": "2026-04-15",
        "gecerlilik": "2026-08-13",
        "durum": "İl/İlçe bazında Geçici Tavsiye"
      },
      {
        "tavsiye": "2025-08-01",
        "gecerlilik": "2025-10-30",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-07-30",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "KAVAK, ÇINAR, HUŞ, AT KESTANESİ, KARAAĞAÇ, KIZILAĞAÇ, AKÇAAĞAÇ, GÜRGEN",
    "zararli": "Turunçgil uzun antenli böceği",
    "zararliLat": "Anoplophora chinensis",
    "urun": "IMPERATOR 25 EC",
    "form": "EC",
    "aktif": "250 g/l Cypermethrin",
    "grup": "İnsektisit",
    "tekrar": 3,
    "donemler": [
      {
        "tavsiye": "2026-04-15",
        "gecerlilik": "2026-08-13",
        "durum": "İl/İlçe bazında Geçici Tavsiye"
      },
      {
        "tavsiye": "2025-08-01",
        "gecerlilik": "2025-10-30",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-07-30",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "KAVUN",
    "zararli": "KAVUN SİNEĞİ",
    "zararliLat": "Myiopardalis pardalina",
    "urun": "IMPERATOR 25 EC",
    "form": "EC",
    "aktif": "250 g/l Cypermethrin",
    "grup": "İnsektisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2026-06-10",
        "gecerlilik": "2026-10-10",
        "durum": "Geçerli"
      },
      {
        "tavsiye": "2025-05-05",
        "gecerlilik": "2025-09-05",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "PAMUK ",
    "zararli": "Pamuk unlubiti",
    "zararliLat": "Phenacoccus solenopsis",
    "urun": "NİNJA 5 EC",
    "form": "EC",
    "aktif": "50 g/l Lambda-cyhalothrin ",
    "grup": "İnsektisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2026-06-01",
        "gecerlilik": "2026-09-29",
        "durum": "Geçerli"
      },
      {
        "tavsiye": "2025-06-01",
        "gecerlilik": "2025-09-30",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "NAR",
    "zararli": "Kırmızıörümcekler",
    "zararliLat": "Tetranychus spp., Panonychus spp.",
    "urun": "THIOVIT JET",
    "form": "WG",
    "aktif": "%80 Kükürt",
    "grup": "Fungisit + Akarisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2026-05-30",
        "gecerlilik": "2026-09-30",
        "durum": "Geçerli"
      },
      {
        "tavsiye": "2025-05-30",
        "gecerlilik": "2025-09-30",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "YABAN MERSİNİ",
    "zararli": "Turunçgil unlubiti",
    "zararliLat": "Planococcus citri",
    "urun": "PLOCAFİR",
    "form": "EW",
    "aktif": "700 g/l Mineral Yağ",
    "grup": "İnsektisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2026-05-17",
        "gecerlilik": "2026-09-17",
        "durum": "Geçerli"
      },
      {
        "tavsiye": "2026-01-16",
        "gecerlilik": "2026-05-16",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "NARENCİYE",
    "zararli": "Yalancı Kelebek",
    "zararliLat": "Ricania japonica",
    "urun": "THIOVIT JET",
    "form": "WG",
    "aktif": "%80 Kükürt",
    "grup": "İnsektisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2026-05-15",
        "gecerlilik": "2026-09-15",
        "durum": "Geçerli"
      },
      {
        "tavsiye": "2025-08-15",
        "gecerlilik": "2025-09-30",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "FASULYE",
    "zararli": "Yalancı Kelebek",
    "zararliLat": "Ricania japonica",
    "urun": "THIOVIT JET",
    "form": "WG",
    "aktif": "%80 Kükürt",
    "grup": "İnsektisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2026-05-15",
        "gecerlilik": "2026-09-15",
        "durum": "Geçerli"
      },
      {
        "tavsiye": "2025-08-15",
        "gecerlilik": "2025-09-30",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "HIYAR",
    "zararli": "Yalancı Kelebek",
    "zararliLat": "Ricania japonica",
    "urun": "THIOVIT JET",
    "form": "WG",
    "aktif": "%80 Kükürt",
    "grup": "İnsektisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2026-05-15",
        "gecerlilik": "2026-09-15",
        "durum": "Geçerli"
      },
      {
        "tavsiye": "2025-08-15",
        "gecerlilik": "2025-09-30",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "MISIR",
    "zararli": "Yalancı Kelebek",
    "zararliLat": "Ricania japonica",
    "urun": "THIOVIT JET",
    "form": "WG",
    "aktif": "%80 Kükürt",
    "grup": "İnsektisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2026-05-15",
        "gecerlilik": "2026-09-15",
        "durum": "Geçerli"
      },
      {
        "tavsiye": "2025-08-15",
        "gecerlilik": "2025-09-30",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "KİVİ",
    "zararli": "Yalancı Kelebek",
    "zararliLat": "Ricania japonica",
    "urun": "THIOVIT JET",
    "form": "WG",
    "aktif": "%80 Kükürt",
    "grup": "İnsektisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2026-05-15",
        "gecerlilik": "2026-09-15",
        "durum": "Geçerli"
      },
      {
        "tavsiye": "2025-09-15",
        "gecerlilik": "2025-11-15",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "MAYDANOZ",
    "zararli": "Toprak kökenli patojenler",
    "zararliLat": "Fusarium spp., Macrophomina spp., Phytophthora spp., Rhizoctonia spp.",
    "urun": "APRIN XL 350 ES",
    "form": "ES",
    "aktif": "350 g/l Metalaxyl-m",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2026-05-01",
        "gecerlilik": "2026-08-31",
        "durum": "Geçerli"
      },
      {
        "tavsiye": "2026-01-01",
        "gecerlilik": "2026-04-30",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "DEREOTU",
    "zararli": "Mildiyö",
    "zararliLat": "Plasmopara spp, Bremia lactucae",
    "urun": "QUADRİS",
    "form": "SC",
    "aktif": "250 g/l Azoxystrobin",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2026-05-01",
        "gecerlilik": "2026-08-31",
        "durum": "Geçerli"
      },
      {
        "tavsiye": "2026-01-01",
        "gecerlilik": "2026-04-30",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "DEREOTU",
    "zararli": "Toprak kökenli patojenler",
    "zararliLat": "Fusarium spp., Macrophomina spp., Phytophthora spp., Rhizoctonia spp.",
    "urun": "APRIN XL 350 ES",
    "form": "ES",
    "aktif": "350 g/l Metalaxyl-m",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2026-05-01",
        "gecerlilik": "2026-08-31",
        "durum": "Geçerli"
      },
      {
        "tavsiye": "2026-01-01",
        "gecerlilik": "2026-04-30",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "DEREOTU",
    "zararli": "Sebzelerde septorya yaprak lekesi",
    "zararliLat": "Septoria apiicola, S.lycopersici, S.petroselini",
    "urun": "QUADRİS",
    "form": "SC",
    "aktif": "250 g/l Azoxystrobin",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2026-05-01",
        "gecerlilik": "2026-08-31",
        "durum": "Geçerli"
      },
      {
        "tavsiye": "2026-01-01",
        "gecerlilik": "2026-04-30",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "MARUL",
    "zararli": "KÜLLEME",
    "zararliLat": "Erysiphe spp.",
    "urun": "QUADRİS",
    "form": "SC",
    "aktif": "250 g/l Azoxystrobin",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2026-05-01",
        "gecerlilik": "2026-08-31",
        "durum": "Geçerli"
      },
      {
        "tavsiye": "2026-01-01",
        "gecerlilik": "2026-04-30",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "MARUL",
    "zararli": "Alternaria yaprak lekesi",
    "zararliLat": "Alternaria spp.",
    "urun": "QUADRİS",
    "form": "SC",
    "aktif": "250 g/l Azoxystrobin",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2026-05-01",
        "gecerlilik": "2026-08-31",
        "durum": "Geçerli"
      },
      {
        "tavsiye": "2026-01-01",
        "gecerlilik": "2026-04-30",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "MARUL",
    "zararli": "Sebzelerde septorya yaprak lekesi",
    "zararliLat": "Septoria apiicola, S.lycopersici, S.petroselini",
    "urun": "QUADRİS",
    "form": "SC",
    "aktif": "250 g/l Azoxystrobin",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2026-05-01",
        "gecerlilik": "2026-08-31",
        "durum": "Geçerli"
      },
      {
        "tavsiye": "2026-01-01",
        "gecerlilik": "2026-04-30",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "NANE",
    "zararli": "Toprak kökenli patojenler",
    "zararliLat": "Fusarium spp., Macrophomina spp., Phytophthora spp., Rhizoctonia spp.",
    "urun": "APRIN XL 350 ES",
    "form": "ES",
    "aktif": "350 g/l Metalaxyl-m",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2026-05-01",
        "gecerlilik": "2026-08-31",
        "durum": "Geçerli"
      },
      {
        "tavsiye": "2026-01-01",
        "gecerlilik": "2026-04-30",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "SEMİZOTU",
    "zararli": "Yaprağı Yenen Sebzelerde Beyaz Pas",
    "zararliLat": "Albugo candida, Wilsoniana occidentalis, Wilsoniana portulacae",
    "urun": "QUADRİS",
    "form": "SC",
    "aktif": "250 g/l Azoxystrobin",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2026-05-01",
        "gecerlilik": "2026-08-31",
        "durum": "Geçerli"
      },
      {
        "tavsiye": "2026-01-01",
        "gecerlilik": "2026-04-30",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "SEMİZOTU",
    "zararli": "Mildiyö",
    "zararliLat": "Plasmopara spp, Bremia lactucae",
    "urun": "QUADRİS",
    "form": "SC",
    "aktif": "250 g/l Azoxystrobin",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2026-05-01",
        "gecerlilik": "2026-08-31",
        "durum": "Geçerli"
      },
      {
        "tavsiye": "2026-01-01",
        "gecerlilik": "2026-04-30",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "SEMİZOTU",
    "zararli": "Alternaria yaprak lekesi",
    "zararliLat": "Alternaria spp.",
    "urun": "QUADRİS",
    "form": "SC",
    "aktif": "250 g/l Azoxystrobin",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2026-05-01",
        "gecerlilik": "2026-08-31",
        "durum": "Geçerli"
      },
      {
        "tavsiye": "2026-01-01",
        "gecerlilik": "2026-04-30",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "SEMİZOTU",
    "zararli": "Sebzelerde septorya yaprak lekesi",
    "zararliLat": "Septoria apiicola, S.lycopersici, S.petroselini",
    "urun": "QUADRİS",
    "form": "SC",
    "aktif": "250 g/l Azoxystrobin",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2026-05-01",
        "gecerlilik": "2026-08-31",
        "durum": "Geçerli"
      },
      {
        "tavsiye": "2026-01-01",
        "gecerlilik": "2026-04-30",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "SEMİZOTU",
    "zararli": "KÜLLEME",
    "zararliLat": "Erysiphe spp.",
    "urun": "QUADRİS",
    "form": "SC",
    "aktif": "250 g/l Azoxystrobin",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2026-05-01",
        "gecerlilik": "2026-08-31",
        "durum": "Geçerli"
      },
      {
        "tavsiye": "2026-01-01",
        "gecerlilik": "2026-04-30",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "ISPANAK",
    "zararli": "KÜLLEME",
    "zararliLat": "Erysiphe spp.",
    "urun": "QUADRİS",
    "form": "SC",
    "aktif": "250 g/l Azoxystrobin",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2026-05-01",
        "gecerlilik": "2026-08-31",
        "durum": "Geçerli"
      },
      {
        "tavsiye": "2026-01-01",
        "gecerlilik": "2026-04-30",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "ROKA",
    "zararli": "Toprak kökenli patojenler",
    "zararliLat": "Fusarium spp., Macrophomina spp., Phytophthora spp., Rhizoctonia spp.",
    "urun": "APRIN XL 350 ES",
    "form": "ES",
    "aktif": "350 g/l Metalaxyl-m",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2026-05-01",
        "gecerlilik": "2026-08-31",
        "durum": "Geçerli"
      },
      {
        "tavsiye": "2026-01-01",
        "gecerlilik": "2026-04-30",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "TERE",
    "zararli": "Toprak kökenli patojenler",
    "zararliLat": "Fusarium spp., Macrophomina spp., Phytophthora spp., Rhizoctonia spp.",
    "urun": "APRIN XL 350 ES",
    "form": "ES",
    "aktif": "350 g/l Metalaxyl-m",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2026-05-01",
        "gecerlilik": "2026-08-31",
        "durum": "Geçerli"
      },
      {
        "tavsiye": "2026-01-01",
        "gecerlilik": "2026-04-30",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "FESLEĞEN",
    "zararli": "MİLDİYÖ",
    "zararliLat": "(Peronospora belbahrii)",
    "urun": "QUADRİS",
    "form": "SC",
    "aktif": "250 g/l Azoxystrobin",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2026-05-01",
        "gecerlilik": "2026-08-31",
        "durum": "Geçerli"
      },
      {
        "tavsiye": "2026-01-01",
        "gecerlilik": "2026-04-30",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "FESLEĞEN",
    "zararli": "Toprak kökenli patojenler",
    "zararliLat": "Fusarium spp., Macrophomina spp., Phytophthora spp., Pythium spp., Rhizoctonia spp.",
    "urun": "APRIN XL 350 ES",
    "form": "ES",
    "aktif": "350 g/l Metalaxyl-m",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2026-05-01",
        "gecerlilik": "2026-08-31",
        "durum": "Geçerli"
      },
      {
        "tavsiye": "2026-01-01",
        "gecerlilik": "2026-04-30",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "FESLEĞEN",
    "zararli": "Alternaria yaprak lekesi",
    "zararliLat": "Alternaria spp.",
    "urun": "QUADRİS",
    "form": "SC",
    "aktif": "250 g/l Azoxystrobin",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2026-05-01",
        "gecerlilik": "2026-08-31",
        "durum": "Geçerli"
      },
      {
        "tavsiye": "2026-01-01",
        "gecerlilik": "2026-04-30",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "FESLEĞEN",
    "zararli": "Sebzelerde septorya yaprak lekesi",
    "zararliLat": "Septoria apiicola, S.lycopersici, S.petroselini",
    "urun": "QUADRİS",
    "form": "SC",
    "aktif": "250 g/l Azoxystrobin",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2026-05-01",
        "gecerlilik": "2026-08-31",
        "durum": "Geçerli"
      },
      {
        "tavsiye": "2026-01-01",
        "gecerlilik": "2026-04-30",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "FESLEĞEN",
    "zararli": "KÜLLEME",
    "zararliLat": "Erysiphe spp.",
    "urun": "QUADRİS",
    "form": "SC",
    "aktif": "250 g/l Azoxystrobin",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2026-05-01",
        "gecerlilik": "2026-08-31",
        "durum": "Geçerli"
      },
      {
        "tavsiye": "2026-01-01",
        "gecerlilik": "2026-04-30",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "AVOKADO",
    "zararli": "İncir Teke Böceği",
    "zararliLat": "Batocera rufomaculata",
    "urun": "NİNJA 5 EC",
    "form": "EC",
    "aktif": "50 g/l Lambda-cyhalothrin ",
    "grup": "İnsektisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2026-03-15",
        "gecerlilik": "2026-07-15",
        "durum": "Geçerli"
      },
      {
        "tavsiye": "2025-05-30",
        "gecerlilik": "2025-08-30",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "AVOKADO",
    "zararli": "İncir Teke Böceği",
    "zararliLat": "Batocera rufomaculata",
    "urun": "AMPLİGO 150 ZC",
    "form": "ZC",
    "aktif": "100 g/l Chlorantraniliprole + 50 g/l Lambda-cyhalothrin",
    "grup": "İnsektisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2026-03-15",
        "gecerlilik": "2026-07-15",
        "durum": "Geçerli"
      },
      {
        "tavsiye": "2025-05-30",
        "gecerlilik": "2025-08-30",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "KANOLA",
    "zararli": "Yaprakbiti",
    "zararliLat": "Brevicoryne brassicae",
    "urun": "KARATE ZEON",
    "form": "CS",
    "aktif": "50 g/l Lambda-cyhalothrin ",
    "grup": "İnsektisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2026-03-01",
        "gecerlilik": "2026-06-28",
        "durum": "Geçerli"
      },
      {
        "tavsiye": "2025-04-15",
        "gecerlilik": "2025-06-30",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "MAYDANOZ",
    "zararli": "Sebzelerde septorya yaprak lekesi",
    "zararliLat": "Septoria apiicola, S.lycopersici, S.petroselini",
    "urun": "QUADRİS",
    "form": "SC",
    "aktif": "250 g/l Azoxystrobin",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "MAYDANOZ",
    "zararli": "Sebzelerde septorya yaprak lekesi",
    "zararliLat": "Septoria apiicola, S.lycopersici, S.petroselini",
    "urun": "QUADRİS MAXX",
    "form": "SC",
    "aktif": "200 g/l Azoxystrobin + 125 g/l Difenoconazole",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "TERE",
    "zararli": "YAPRAK LEKESİ",
    "zararliLat": "Cercospora sp.",
    "urun": "REGALIA",
    "form": "SC",
    "aktif": "224,6 g/l Reynoutria spp. ekstraktı",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "TERE",
    "zararli": "Külleme",
    "zararliLat": "Erysiphe cichoracearum",
    "urun": "REGALIA",
    "form": "SC",
    "aktif": "224,6 g/l Reynoutria spp. ekstraktı",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "TERE",
    "zararli": "Külleme",
    "zararliLat": "Erysiphe cichoracearum",
    "urun": "QUADRİS",
    "form": "SC",
    "aktif": "250 g/l Azoxystrobin",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "TERE",
    "zararli": "Sebzelerde beyaz çürüklük",
    "zararliLat": "Sclerotinia sclerotiorum",
    "urun": "REGALIA",
    "form": "SC",
    "aktif": "224,6 g/l Reynoutria spp. ekstraktı",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "MAYDANOZ",
    "zararli": "Külleme",
    "zararliLat": "Erysiphe cichoracearum",
    "urun": "REGALIA",
    "form": "SC",
    "aktif": "224,6 g/l Reynoutria spp. ekstraktı",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "MAYDANOZ",
    "zararli": "Külleme",
    "zararliLat": "Erysiphe cichoracearum",
    "urun": "QUADRİS",
    "form": "SC",
    "aktif": "250 g/l Azoxystrobin",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "MAYDANOZ",
    "zararli": "FİDE KÖK ÇÜRÜKLÜĞÜ",
    "zararliLat": "Rhizoctonia solani",
    "urun": "QUADRİS",
    "form": "SC",
    "aktif": "250 g/l Azoxystrobin",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "MAYDANOZ",
    "zararli": "Yaprağı Yenen Sebzelerde Beyaz Pas",
    "zararliLat": "Albugo candida, Wilsoniana occidentalis, Wilsoniana portulacae",
    "urun": "QUADRİS",
    "form": "SC",
    "aktif": "250 g/l Azoxystrobin",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "MAYDANOZ",
    "zararli": "Yaprağı Yenen Sebzelerde Beyaz Pas",
    "zararliLat": "Albugo candida, Wilsoniana occidentalis, Wilsoniana portulacae",
    "urun": "REGALIA",
    "form": "SC",
    "aktif": "224,6 g/l Reynoutria spp. ekstraktı",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "MAYDANOZ",
    "zararli": "Sebzelerde beyaz çürüklük",
    "zararliLat": "Sclerotinia sclerotiorum",
    "urun": "REGALIA",
    "form": "SC",
    "aktif": "224,6 g/l Reynoutria spp. ekstraktı",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "MARUL",
    "zararli": "Sebzelerde beyaz çürüklük",
    "zararliLat": "Sclerotinia sclerotiorum",
    "urun": "REGALIA",
    "form": "SC",
    "aktif": "224,6 g/l Reynoutria spp. ekstraktı",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "MARUL",
    "zararli": "Mildiyö",
    "zararliLat": "Plasmopara spp, Bremia lactucae",
    "urun": "REGALIA",
    "form": "SC",
    "aktif": "224,6 g/l Reynoutria spp. ekstraktı",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "MARUL",
    "zararli": "YAPRAK LEKESİ",
    "zararliLat": "Cercospora sp.",
    "urun": "REGALIA",
    "form": "SC",
    "aktif": "224,6 g/l Reynoutria spp. ekstraktı",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "MARUL",
    "zararli": "Külleme",
    "zararliLat": "Erysiphe cichoracearum",
    "urun": "REGALIA",
    "form": "SC",
    "aktif": "224,6 g/l Reynoutria spp. ekstraktı",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "MARUL",
    "zararli": "Yaprağı Yenen Sebzelerde Beyaz Pas",
    "zararliLat": "Albugo candida, Wilsoniana occidentalis, Wilsoniana portulacae",
    "urun": "REGALIA",
    "form": "SC",
    "aktif": "224,6 g/l Reynoutria spp. ekstraktı",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "SEMİZOTU",
    "zararli": "Yaprağı Yenen Sebzelerde Beyaz Pas",
    "zararliLat": "Albugo candida, Wilsoniana occidentalis, Wilsoniana portulacae",
    "urun": "REGALIA",
    "form": "SC",
    "aktif": "224,6 g/l Reynoutria spp. ekstraktı",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "SEMİZOTU",
    "zararli": "Sebzelerde beyaz çürüklük",
    "zararliLat": "Sclerotinia sclerotiorum",
    "urun": "REGALIA",
    "form": "SC",
    "aktif": "224,6 g/l Reynoutria spp. ekstraktı",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "SEMİZOTU",
    "zararli": "Külleme",
    "zararliLat": "Erysiphe cichoracearum",
    "urun": "REGALIA",
    "form": "SC",
    "aktif": "224,6 g/l Reynoutria spp. ekstraktı",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "SEMİZOTU",
    "zararli": "YAPRAK LEKESİ",
    "zararliLat": "Cercospora sp.",
    "urun": "REGALIA",
    "form": "SC",
    "aktif": "224,6 g/l Reynoutria spp. ekstraktı",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "SEMİZOTU",
    "zararli": "Mildiyö",
    "zararliLat": "Plasmopara spp, Bremia lactucae",
    "urun": "REGALIA",
    "form": "SC",
    "aktif": "224,6 g/l Reynoutria spp. ekstraktı",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "NANE",
    "zararli": "Alternaria yaprak lekesi",
    "zararliLat": "Alternaria spp.",
    "urun": "QUADRİS",
    "form": "SC",
    "aktif": "250 g/l Azoxystrobin",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "NANE",
    "zararli": "Yaprağı Yenen Sebzelerde Beyaz Pas",
    "zararliLat": "Albugo candida, Wilsoniana occidentalis, Wilsoniana portulacae",
    "urun": "REGALIA",
    "form": "SC",
    "aktif": "224,6 g/l Reynoutria spp. ekstraktı",
    "grup": "Biyolojik Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "ISPANAK",
    "zararli": "Mildiyö",
    "zararliLat": "Plasmopara spp, Bremia lactucae",
    "urun": "REGALIA",
    "form": "SC",
    "aktif": "224,6 g/l Reynoutria spp. ekstraktı",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "ISPANAK",
    "zararli": "Yaprağı Yenen Sebzelerde Beyaz Pas",
    "zararliLat": "Albugo candida, Wilsoniana occidentalis, Wilsoniana portulacae",
    "urun": "REGALIA",
    "form": "SC",
    "aktif": "224,6 g/l Reynoutria spp. ekstraktı",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "DEREOTU",
    "zararli": "Külleme",
    "zararliLat": "Erysiphe heraclei",
    "urun": "REGALIA",
    "form": "SC",
    "aktif": "224,6 g/l Reynoutria spp. ekstraktı",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "DEREOTU",
    "zararli": "Külleme",
    "zararliLat": "Erysiphe heraclei",
    "urun": "QUADRİS",
    "form": "SC",
    "aktif": "250 g/l Azoxystrobin",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "ISPANAK",
    "zararli": "YAPRAK LEKESİ",
    "zararliLat": "Cercospora sp.",
    "urun": "REGALIA",
    "form": "SC",
    "aktif": "224,6 g/l Reynoutria spp. ekstraktı",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "ISPANAK",
    "zararli": "Külleme",
    "zararliLat": "Erysiphe cichoracearum",
    "urun": "REGALIA",
    "form": "SC",
    "aktif": "224,6 g/l Reynoutria spp. ekstraktı",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "ISPANAK",
    "zararli": "Sebzelerde beyaz çürüklük",
    "zararliLat": "Sclerotinia sclerotiorum",
    "urun": "REGALIA",
    "form": "SC",
    "aktif": "224,6 g/l Reynoutria spp. ekstraktı",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "ROKA",
    "zararli": "Yaprağı Yenen Sebzelerde Beyaz Pas",
    "zararliLat": "Albugo candida, Wilsoniana occidentalis, Wilsoniana portulacae",
    "urun": "QUADRİS",
    "form": "SC",
    "aktif": "250 g/l Azoxystrobin",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "ROKA",
    "zararli": "Yaprağı Yenen Sebzelerde Beyaz Pas",
    "zararliLat": "Albugo candida, Wilsoniana occidentalis, Wilsoniana portulacae",
    "urun": "REGALIA",
    "form": "SC",
    "aktif": "224,6 g/l Reynoutria spp. ekstraktı",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "ROKA",
    "zararli": "Sebzelerde beyaz çürüklük",
    "zararliLat": "Sclerotinia sclerotiorum",
    "urun": "REGALIA",
    "form": "SC",
    "aktif": "224,6 g/l Reynoutria spp. ekstraktı",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "ROKA",
    "zararli": "Külleme",
    "zararliLat": "Erysiphe cichoracearum",
    "urun": "REGALIA",
    "form": "SC",
    "aktif": "224,6 g/l Reynoutria spp. ekstraktı",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "ROKA",
    "zararli": "YAPRAK LEKESİ",
    "zararliLat": "Cercospora sp.",
    "urun": "REGALIA",
    "form": "SC",
    "aktif": "224,6 g/l Reynoutria spp. ekstraktı",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "ROKA",
    "zararli": "Mildiyö",
    "zararliLat": "Plasmopara spp, Bremia lactucae",
    "urun": "REGALIA",
    "form": "SC",
    "aktif": "224,6 g/l Reynoutria spp. ekstraktı",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "ROKA",
    "zararli": "FİDE KÖK ÇÜRÜKLÜĞÜ",
    "zararliLat": "Rhizoctonia solani",
    "urun": "QUADRİS",
    "form": "SC",
    "aktif": "250 g/l Azoxystrobin",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "TERE",
    "zararli": "Yaprağı Yenen Sebzelerde Beyaz Pas",
    "zararliLat": "Albugo candida, Wilsoniana occidentalis, Wilsoniana portulacae",
    "urun": "REGALIA",
    "form": "SC",
    "aktif": "224,6 g/l Reynoutria spp. ekstraktı",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "TERE",
    "zararli": "Yaprağı Yenen Sebzelerde Beyaz Pas",
    "zararliLat": "Albugo candida, Wilsoniana occidentalis, Wilsoniana portulacae",
    "urun": "QUADRİS",
    "form": "SC",
    "aktif": "250 g/l Azoxystrobin",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "TERE",
    "zararli": "Mildiyö",
    "zararliLat": "Plasmopara spp, Bremia lactucae",
    "urun": "REGALIA",
    "form": "SC",
    "aktif": "224,6 g/l Reynoutria spp. ekstraktı",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "TERE",
    "zararli": "Sebzelerde septorya yaprak lekesi",
    "zararliLat": "Septoria apiicola, S.lycopersici, S.petroselini",
    "urun": "QUADRİS",
    "form": "SC",
    "aktif": "250 g/l Azoxystrobin",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "TERE",
    "zararli": "FİDE KÖK ÇÜRÜKLÜĞÜ",
    "zararliLat": "Rhizoctonia solani",
    "urun": "QUADRİS",
    "form": "SC",
    "aktif": "250 g/l Azoxystrobin",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "FESLEĞEN",
    "zararli": "MİLDİYÖ",
    "zararliLat": "(Peronospora belbahrii)",
    "urun": "REGALIA",
    "form": "SC",
    "aktif": "224,6 g/l Reynoutria spp. ekstraktı",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "REZENE",
    "zararli": "YAPRAK LEKESİ",
    "zararliLat": "Cercospora sp.",
    "urun": "REGALIA",
    "form": "SC",
    "aktif": "224,6 g/l Reynoutria spp. ekstraktı",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "REZENE",
    "zararli": "Mildiyö",
    "zararliLat": "Plasmopara spp, Bremia lactucae",
    "urun": "REGALIA",
    "form": "SC",
    "aktif": "224,6 g/l Reynoutria spp. ekstraktı",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "REZENE",
    "zararli": "Sebzelerde beyaz çürüklük",
    "zararliLat": "Sclerotinia sclerotiorum",
    "urun": "REGALIA",
    "form": "SC",
    "aktif": "224,6 g/l Reynoutria spp. ekstraktı",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "REZENE",
    "zararli": "Yaprağı Yenen Sebzelerde Beyaz Pas",
    "zararliLat": "Albugo candida, Wilsoniana occidentalis, Wilsoniana portulacae",
    "urun": "REGALIA",
    "form": "SC",
    "aktif": "224,6 g/l Reynoutria spp. ekstraktı",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "REZENE",
    "zararli": "Külleme",
    "zararliLat": "Erysiphe cichoracearum",
    "urun": "REGALIA",
    "form": "SC",
    "aktif": "224,6 g/l Reynoutria spp. ekstraktı",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "REYHAN",
    "zararli": "MİLDİYÖ",
    "zararliLat": "(Peronospora belbahrii)",
    "urun": "REGALIA",
    "form": "SC",
    "aktif": "224,6 g/l Reynoutria spp. ekstraktı",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "MAYDANOZ",
    "zararli": "Alternaria yaprak lekesi",
    "zararliLat": "Alternaria spp.",
    "urun": "QUADRİS MAXX",
    "form": "SC",
    "aktif": "200 g/l Azoxystrobin + 125 g/l Difenoconazole",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "MAYDANOZ",
    "zararli": "Alternaria yaprak lekesi",
    "zararliLat": "Alternaria spp.",
    "urun": "QUADRİS",
    "form": "SC",
    "aktif": "250 g/l Azoxystrobin",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "MAYDANOZ",
    "zararli": "Mildiyö",
    "zararliLat": "Plasmopara spp, Bremia lactucae",
    "urun": "REGALIA",
    "form": "SC",
    "aktif": "224,6 g/l Reynoutria spp. ekstraktı",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "MAYDANOZ",
    "zararli": "YAPRAK LEKESİ",
    "zararliLat": "Cercospora sp.",
    "urun": "REGALIA",
    "form": "SC",
    "aktif": "224,6 g/l Reynoutria spp. ekstraktı",
    "grup": "Fungisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2025-09-01",
        "gecerlilik": "2025-12-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-01",
        "gecerlilik": "2025-08-31",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "KİRAZ",
    "zararli": "Haziran böceği",
    "zararliLat": "Polyphylla spp.",
    "urun": "AMPLİGO 150 ZC",
    "form": "ZC",
    "aktif": "100 g/l Chlorantraniliprole + 50 g/l Lambda-cyhalothrin",
    "grup": "İnsektisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2025-08-21",
        "gecerlilik": "2025-10-20",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-20",
        "gecerlilik": "2025-08-20",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  },
  {
    "bitki": "KİRAZ",
    "zararli": "Mayıs böceği",
    "zararliLat": "Melolontha spp.",
    "urun": "AMPLİGO 150 ZC",
    "form": "ZC",
    "aktif": "100 g/l Chlorantraniliprole + 50 g/l Lambda-cyhalothrin",
    "grup": "İnsektisit",
    "tekrar": 2,
    "donemler": [
      {
        "tavsiye": "2025-08-21",
        "gecerlilik": "2025-10-20",
        "durum": "Geçerlilik Süresi Geçmiştir"
      },
      {
        "tavsiye": "2025-05-20",
        "gecerlilik": "2025-08-20",
        "durum": "Geçerlilik Süresi Geçmiştir"
      }
    ]
  }
];
