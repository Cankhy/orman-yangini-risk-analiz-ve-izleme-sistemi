# Orman Yangını Risk Analiz ve İzleme Sistemi

Harita tabanlı, canlı meteoroloji ile beslenen ve OGM taşra modelini referans alan bir GIS karar destek prototipi.

Bu proje, klasik bir arayüz demosu değil. Amaç; yangın riski, müdahale önceliği, bölgesel izleme ve taşra yapısını aynı ürün akışında gösterebilen güçlü bir kamu teknolojisi vitrini ortaya koymak.

## Proje Ne Gösteriyor?

- Harita tabanlı risk analizi kurgulayabildiğimi
- GIS odaklı veri modelini arayüze taşıyabildiğimi
- Gerçek dünyadaki kurumsal yapıları ürün mantığına çevirebildiğimi
- Statik ekran yerine karar destek akışı kurabildiğimi

## Öne Çıkan Özellikler

- Leaflet tabanlı etkileşimli harita
- Canlı meteoroloji verisi entegrasyonu
- Sabah, öğlen ve akşam için senaryo tabanlı risk değişimi
- OGM işletme müdürlüğü mantığına hizalı örnek saha modeli
- 30 OGM Bölge Müdürlüğü için ulusal ağ katmanı
- Risk seviyesi, operasyon durumu ve bölge bazlı filtreleme
- Müdahale öncelik listesi
- Yönetici özeti, canlı bülten ve geçmiş olay referansları

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

Repo artık GitHub Pages için hazırdır. Projeyi GitHub'a gönderdiğinde `main` dalına yapılan her push sonrası otomatik yayın alacak.

Gerekli adımlar:

1. Bu klasörü yeni bir GitHub reposuna bağla.
2. Varsayılan dalı `main` olarak kullan.
3. GitHub içinde `Settings > Pages` bölümünde `GitHub Actions` kaynağını seç.
4. `main` dalına push yap.

İlk yayın sonrası adresin şu formatta olur:

`https://kullanici-adin.github.io/repo-adi/`

## Proje Yapısı

- `index.html`
  Uygulama iskeleti

- `style.css`
  Tüm görsel sistem ve duyarlı yerleşim

- `script.js`
  Harita, veri akışı, senaryolar, canlı meteoroloji ve etkileşim mantığı

- `scripts/lint.mjs`
  Proje için özel statik doğrulama akışı

- `.github/workflows/deploy.yml`
  GitHub Pages için otomatik yayın iş akışı

## Neden Portföy İçin Güçlü?

Bu repo şu mesajı verir:

> Sadece ön yüz yapmıyor; veri, harita, operasyon mantığı ve kurumsal ihtiyacı aynı üründe birleştirebiliyor.

Özellikle GIS, kamu teknolojileri, karar destek sistemleri, harita tabanlı ürünler ve saha operasyonlarına yakın roller için güçlü bir portföy parçası olacak şekilde tasarlandı.

## Notlar

- Canlı hava verisi Open-Meteo üzerinden alınır.
- Demo sahaları prototip amaçlıdır; ürün mantığını göstermek için modellenmiştir.
- OGM taşra yapısı, resmî Bölge Müdürlüğü dağılımı referans alınarak kurgulanmıştır.

## Sonraki Aşamalar

Bu projeyi daha da büyütmek için sıradaki mantıklı adımlar:

1. Gerçek il ve orman işletme sınırları
2. Tarihsel yangın verisi ile daha güçlü risk modeli
3. Uydu fark analizi
4. PDF operasyon raporu
5. Backend ve veritabanı
6. Canlı yayına alma
