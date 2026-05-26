# MorShop E-Ticaret Sitesi

**Öğrenci:** Sevinç Sardan Çelik  
**Ders:** Web Tasarım  
**Proje türü:** Statik HTML, CSS ve JavaScript ile geliştirilmiş basit e-ticaret sitesi

MorShop; giyim ve aksesuar ürünlerinin listelendiği, sepete eklenebildiği ve iletişim formu üzerinden mesaj gönderilebildiği örnek bir e-ticaret arayüzüdür. Sunucu veya veritabanı kullanılmaz; tüm işlemler tarayıcıda çalışır.

---

## İçindekiler

1. [Proje özeti](#proje-özeti)
2. [Kullanılan teknolojiler](#kullanılan-teknolojiler)
3. [Klasör ve dosya yapısı](#klasör-ve-dosya-yapısı)
4. [Sayfalar](#sayfalar)
5. [Projeyi çalıştırma](#projeyi-çalıştırma)
6. [Tasarım ve renkler](#tasarım-ve-renkler)
7. [CSS dosyası (style.css)](#css-dosyası-stylecss)
8. [JavaScript dosyası (myscript.js)](#javascript-dosyası-myscriptjs)
9. [Ürün listesi](#ürün-listesi)
10. [Ödev gereksinimleri karşılığı](#ödev-gereksinimleri-karşılığı)
11. [Test senaryoları](#test-senaryoları)
12. [Sık karşılaşılan sorunlar](#sık-karşılaşılan-sorunlar)

---

## Proje özeti

Bu projede aşağıdaki e-ticaret sayfaları bulunur:

| Sayfa | Dosya | Açıklama |
|--------|--------|----------|
| Ana sayfa | `index.html` | Karşılama metni, öne çıkan 3 ürün, mini quiz |
| Ürün listeleme | `pages/urunler.html` | Tüm ürünler grid düzeninde |
| Ürün detay | `pages/urun-detay.html` | Tek ürün bilgisi (`?id=` ile seçilir) |
| Sepet | `pages/sepet.html` | Eklenen ürünler, toplam fiyat |
| İletişim | `pages/iletisim.html` | Ad, e-posta, konu, mesaj formu |

Tüm sayfalarda **aynı üst menü (navbar)** ve **aynı alt bilgi (footer)** kullanılır. Menüden her sayfaya ulaşılabilir.

---

## Kullanılan teknolojiler

| Teknoloji | Kullanım |
|-----------|----------|
| HTML5 | Sayfa yapısı, formlar, semantik etiketler (`header`, `main`, `footer`) |
| CSS3 | Stil, Flexbox, Grid, media query (responsive) |
| JavaScript (ES5 tarzı) | Ürün listesi, sepet, form kontrolü, quiz |

**Kullanılmayanlar:** React, Vue, Bootstrap, veritabanı, backend API, npm paketleri.

---

## Klasör ve dosya yapısı

```
SevincSardanCelik_Ecommerce/
│
├── index.html                 # Ana sayfa
├── README.md                  # Bu dosya
│
├── pages/
│   ├── urunler.html           # Ürün listeleme
│   ├── urun-detay.html        # Ürün detay
│   ├── sepet.html             # Alışveriş sepeti
│   └── iletisim.html          # İletişim formu
│
├── styles/
│   └── style.css              # Tüm sayfaların stilleri
│
├── scripts/
│   └── myscript.js            # Sepet, ürünler, form, quiz
│
└── img/
    ├── urun1.svg              # Mor Kapüşonlu
    ├── urun2.svg              # Siyah Spor Ayakkabı
    ├── urun3.svg              # Beyaz Omuz Çantası
    ├── urun4.svg              # Mor Bere
    ├── urun5.svg              # Siyah Saat
    └── urun6.svg              # Mor Defter Seti
```

**Önemli kurallar (ödev):**

- Tüm CSS yalnızca `styles/style.css` içindedir.
- Tüm JavaScript yalnızca `scripts/myscript.js` içindedir.
- HTML dosyalarında **inline** veya **internal** CSS/JS yoktur.

---

## Sayfalar

### Ana sayfa (`index.html`)

- Mağaza tanıtımı ve “Ürünleri Gör” butonu
- JavaScript ile yüklenen **3 öne çıkan ürün**
- **Mini quiz:** Mağazanın ana rengi sorulur; doğru cevap “Mor” → indirim kodu `MOR10` gösterilir

### Ürünler (`pages/urunler.html`)

- 6 ürün **CSS Grid** ile listelenir
- Her kartta: görsel, ad, fiyat, “İncele” ve “Sepete Ekle” butonları

### Ürün detay (`pages/urun-detay.html`)

- Adres çubuğundaki `id` parametresine göre ürün gösterilir  
  Örnek: `urun-detay.html?id=2` → Siyah Spor Ayakkabı
- Büyük görsel, açıklama, fiyat, sepete ekleme

### Sepet (`pages/sepet.html`)

- `localStorage` anahtarı: `morShopSepet`
- Tablo: ürün adı, adet, birim fiyat, satır toplamı
- “Sil” ve “Sepeti Temizle” işlemleri

### İletişim (`pages/iletisim.html`)

- Alanlar: Ad Soyad, E-posta, Konu (select), Mesaj
- JavaScript ile doğrulama; başarılı gönderimde onay mesajı

---

## Projeyi çalıştırma

Bu proje derleme gerektirmez. İki yöntemden biri yeterlidir.

### Yöntem 1: Dosyayı doğrudan açma

1. Proje klasörünü açın.
2. `index.html` dosyasına çift tıklayın veya sağ tık → tarayıcı ile açın.
3. Üst menüden diğer sayfalara geçin.

**Not:** Her zaman `index.html` ile başlamak önerilir; göreli yollar (`pages/`, `styles/`) buna göre ayarlanmıştır.

### Yöntem 2: Yerel sunucu (önerilen)

Terminalde proje klasörüne gidin:

```bash
cd /Users/sevsardan/Documents/Projects/SevincSardanCelik_Ecommerce
python3 -m http.server 8000
```

Tarayıcıda açın:

```
http://localhost:8000
```

Sunucuyu durdurmak için terminalde `Ctrl + C` tuşlarına basın.

### Cursor / VS Code Live Server

`index.html` açıkken **Live Server** eklentisi varsa “Go Live” ile de aynı şekilde çalıştırılabilir.

---

## Tasarım ve renkler

Site teması **mor, beyaz ve siyah** tonlarındadır.

| Renk | Kod | Kullanım |
|------|-----|----------|
| Mor | `#4a148c` | Menü, butonlar, başlıklar, çerçeveler |
| Açık mor | `#f3e5f5` | Karşılama ve quiz arka planı |
| Beyaz | `#ffffff` | Sayfa arka planı, metin zeminleri |
| Siyah | `#000000` | Gövde metni, footer arka planı |

**Responsive kırılım noktaları:**

- `768px` altı: menü dikey, ürün grid 2 sütun
- `480px` altı: ürün grid 1 sütun, menü linkleri tam genişlik

---

## CSS dosyası (style.css)

`styles/style.css` dosyasında başlıca bölümler:

| Bölüm | Açıklama |
|--------|----------|
| Genel ayarlar | `margin`, `padding` sıfırlama, `box-sizing` |
| `.ust-menu` | Mor navbar, Flexbox ile logo ve linkler |
| `.urun-listesi` | **CSS Grid** — 3 sütunlu ürün kartları |
| `.detay-alani` | **Flexbox** — detay sayfasında resim + bilgi |
| `.sepet-tablo` | Sepet tablosu stilleri |
| `.form-alani` | İletişim formu |
| `.quiz-kutusu` | Ana sayfadaki quiz alanı |
| `@media` | Mobil uyum kuralları |

---

## JavaScript dosyası (myscript.js)

`scripts/myscript.js` dosyasındaki ana fonksiyonlar:

| Fonksiyon | Görevi |
|-----------|--------|
| `urunler` (dizi) | 6 ürünün id, ad, fiyat, açıklama, resim bilgisi |
| `oneCikanUrunleriGoster()` | Ana sayfada ilk 3 ürünü yazar |
| `tumUrunleriGoster()` | Ürünler sayfasında tüm kartları oluşturur |
| `urunKartiOlustur(urun)` | Tek ürün için HTML kart üretir |
| `urunDetayGoster()` | URL’deki `id` ile detay sayfasını doldurur |
| `sepeteEkle(urunId)` | Sepete ürün ekler veya adedi artırır |
| `sepetiOku()` | `localStorage`’dan sepet verisini okur |
| `sepetSayfasiniGoster()` | Sepet tablosunu ve toplamı günceller |
| `sepettenSil(urunId)` | Tek ürünü sepetten çıkarır |
| `sepetiTemizle()` | Sepeti tamamen siler |
| `iletisimFormuKontrol()` | Form gönderiminde alan doğrulaması |
| `quizBaslat()` | Quiz cevabını kontrol eder |
| `dinamikButonlariBagla()` | Sepete ekle / sil butonlarına tıklama (inline `onclick` yok) |
| `sayfaHazir()` | Sayfa yüklendiğinde gerekli işlemleri başlatır |

Sayfa yüklendiğinde:

```javascript
window.addEventListener("DOMContentLoaded", sayfaHazir);
```

çalışır; hangi sayfada olursanız olun yalnızca o sayfaya ait HTML elemanı varsa ilgili fonksiyon iş yapar.

---

## Ürün listesi

| ID | Ürün adı | Fiyat |
|----|----------|-------|
| 1 | Mor Kapüşonlu | 349 TL |
| 2 | Siyah Spor Ayakkabı | 599 TL |
| 3 | Beyaz Omuz Çantası | 279 TL |
| 4 | Mor Bere | 129 TL |
| 5 | Siyah Saat | 449 TL |
| 6 | Mor Defter Seti | 89 TL |

Detay linki örneği: `pages/urun-detay.html?id=3`

---

## Ödev gereksinimleri karşılığı

| Gereksinim | Projede nasıl karşılanıyor |
|------------|----------------------------|
| Ortak layout | Tüm sayfalarda aynı navbar ve footer |
| Navbar ile erişim | Ana Sayfa, Ürünler, Sepet, İletişim linkleri |
| Responsive tasarım | `style.css` içinde media query |
| CSS ayrı dosya | `styles/style.css` |
| JS ayrı dosya | `scripts/myscript.js` |
| Inline / internal CSS-JS yok | Yalnızca harici `link` ve `script src` |
| Basit JavaScript uygulaması | Quiz + sepet + form doğrulama |
| Düzenli klasörler | `img`, `pages`, `scripts`, `styles` |
| Flexbox veya Grid | Grid: ürün listesi; Flexbox: menü, detay |
| Ana sayfa | `index.html` |
| Ürün listeleme | `pages/urunler.html` |
| Ürün detay | `pages/urun-detay.html` |
| Sepet | `pages/sepet.html` |
| İletişim / form | `pages/iletisim.html` |
| Mor, beyaz, siyah tema | Renk paleti yukarıda |

---

## Test senaryoları

Sunum veya teslim öncesi aşağıdakileri deneyin:

1. **Ana sayfa:** Öne çıkan 3 ürün görünüyor mu?
2. **Quiz:** “Mor” seçilince doğru mesaj ve `MOR10` kodu çıkıyor mu?
3. **Ürünler:** 6 kart listeleniyor mu? “İncele” detay sayfasına gidiyor mu?
4. **Detay:** `?id=1` ile farklı `?id=5` farklı ürün gösteriyor mu?
5. **Sepet:** “Sepete Ekle” → Sepet sayfasında ürün ve toplam doğru mu?
6. **Sepet sil:** “Sil” ve “Sepeti Temizle” çalışıyor mu?
7. **Form:** Boş ad, hatalı e-posta, kısa mesajda hata; doğru doldurunca başarı mesajı
8. **Mobil:** Tarayıcı penceresini daraltınca menü ve grid düzeni bozulmadan uyum sağlıyor mu?
9. **Menü:** Her sayfadan diğer tüm sayfalara gidilebiliyor mu?

---

## Sık karşılaşılan sorunlar

| Sorun | Olası neden | Çözüm |
|--------|-------------|--------|
| Görseller görünmüyor | Yanlış klasörden sayfa açılmış | `index.html` ile başlayın veya `http://localhost:8000` kullanın |
| Sepet boş kalıyor | Tarayıcı çerezleri / gizli mod | Normal pencerede deneyin; `localStorage` açık olmalı |
| CSS yüklenmiyor | Dosya yolu hatalı | `pages/` içindeki sayfalar `../styles/style.css` kullanır; dosyaları taşımayın |
| Detay hep aynı ürün | `id` parametresi yok | Adres: `urun-detay.html?id=2` şeklinde olmalı |

---

## Lisans ve not

Bu proje eğitim amaçlıdır. Görseller `img/` klasöründeki basit SVG dosyalarıdır; gerçek ürün fotoğrafı değildir.

**Geliştirici:** Sevinç Sardan Çelik  
**Depo adı:** SevincSardanCelik_Ecommerce
