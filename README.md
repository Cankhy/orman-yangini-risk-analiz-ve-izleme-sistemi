# Orman Yangını Risk Analiz ve İzleme Sistemi

Harita tabanlı, canlı meteoroloji ile beslenen ve OGM taşra modelini referans alan gelişmiş bir GIS karar destek prototipi.

Bu proje yalnızca görsel bir arayüz denemesi değildir. Amaç; yangın riski, müdahale önceliği, ekip konuşlanması, olay günlüğü, alarm geçmişi ve yönetici özeti gibi kurumsal karar destek bileşenlerini aynı ürün akışında gösterebilen güçlü bir kamu teknolojisi vitrini üretmektir.

## Proje Ne Gösteriyor?

- Harita tabanlı risk analizi kurgulayabildiğimi
- GIS odaklı veri modelini arayüze taşıyabildiğimi
- Kurumsal operasyon dilini ürün mantığına çevirebildiğimi
- Statik ekran yerine canlı karar destek deneyimi oluşturabildiğimi

## Öne Çıkan Modüller

- Leaflet tabanlı etkileşimli harita
- Canlı meteoroloji verisi entegrasyonu
- Sabah, öğlen ve akşam için senaryo tabanlı risk değişimi
- 7 günlük risk trendi
- İl bazlı risk sıralama tablosu
- Ekip ve araç konuşlanma özeti
- Olay günlüğü ve alarm geçmişi
- Yönetici özeti ve paylaşılabilir rapor merkezi
- 30 OGM Bölge Müdürlüğü için ulusal ağ katmanı

## Kullanılan Teknolojiler

- HTML
- CSS
- JavaScript
- Leaflet
- GeoJSON
- Open-Meteo API

## Veri Katmanları

- `data/fire-risk-regions.geojson`
  Prototipte kullanılan seçili risk sahaları

- `data/weather-stations.geojson`
  Gözlem istasyonu noktaları

- `data/operational-scenarios.json`
  Zaman bazlı operasyon senaryoları

- `data/ogm-regional-directorates.json`
  OGM Bölge Müdürlükleri ulusal ağ listesi

## Nasıl Çalıştırılır?

Projeyi doğrudan tarayıcıda açabilirsin:

- `index.html`

Lint kontrolü:

```bash
npm run lint
```

## Yayına Alma

Repo GitHub Pages için hazırdır. `main` dalına yapılan her push sonrasında otomatik yayın alacak şekilde yapılandırılmıştır.

İlk yayın sonrası adres şu formatta olur:

`https://kullanici-adin.github.io/repo-adi/`

## Proje Yapısı

- `index.html`
  Uygulama iskeleti ve panel yerleşimleri

- `style.css`
  Tüm görsel sistem, paneller ve duyarlı yerleşim

- `script.js`
  Harita, veri akışı, trendler, alarm geçmişi, rapor üretimi ve canlı meteoroloji mantığı

- `scripts/lint.mjs`
  Proje için özel statik doğrulama akışı

- `.github/workflows/deploy.yml`
  GitHub Pages için otomatik yayın iş akışı

## Neden Portföy İçin Güçlü?

Bu repo şu mesajı verir:

> Sadece ön yüz yapmıyor; veri, harita, saha operasyonu ve kurumsal karar mantığını aynı üründe birleştirebiliyor.

Özellikle GIS, kamu teknolojileri, karar destek sistemleri, harita tabanlı ürünler ve saha operasyonlarına yakın roller için güçlü bir portföy parçası olacak şekilde tasarlanmıştır.

## Notlar

- Canlı hava verisi Open-Meteo üzerinden alınır.
- Demo sahaları prototip amaçlıdır; ürün mantığını göstermek için modellenmiştir.
- OGM taşra yapısı, resmî Bölge Müdürlüğü dağılımı referans alınarak kurgulanmıştır.

## Sonraki Aşamalar

1. Gerçek il ve orman işletme sınırları
2. Tarihsel yangın verisi ile daha gelişmiş risk modeli
3. Uydu fark analizi
4. PDF operasyon raporunu daha zengin çıktı haline getirme
5. Backend ve veritabanı
6. Rol bazlı kullanıcı yönetimi
