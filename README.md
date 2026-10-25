# 📦 Stok ve Cari Takip

![Uygulama simgesi](icon-192.png)

**Stok ve Cari Takip**, satış, alış, ürün, stok ve cari hesap işlemlerini tek arayüzden yönetmeye yönelik Türkçe, mobil uyumlu bir web uygulamasıdır. Progressive Web App (PWA) desteği sayesinde desteklenen tarayıcılarda ana ekrana eklenebilir ve önbelleğe alınmış uygulama çevrimdışı açılabilir.

## ✨ Özellikler

- **Gösterge paneli:** Genel durum ve özet bilgiler
- **Satış ve alış:** İşlem kaydı, satış/alış iadeleri ve ödeme türleri
- **Ürün yönetimi:** Ürün kartları, renk/beden varyantları, barkod ve etiket işlemleri
- **Stok takibi:** Stok giriş-çıkışları ve kritik stok kontrolü
- **Cari hesaplar:** Müşteri/tedarikçi kartları, bakiye ve hesap ekstresi
- **Tahsilat ve ödeme:** Nakit, kredi kartı, havale/EFT ve çek/senet seçenekleri
- **Kampanyalar ve iskonto:** Satış fiyatı ve indirim işlemleri
- **Raporlama:** Satış, alış, ödeme ve kârlılık raporları
- **Kullanıcı ve yetki yönetimi:** Yönetici/personel rolleri ve işlem bazlı izinler
- **Veri aktarımı ve yedekleme:** Excel'den ürün aktarımı, JSON yedek alma/geri yükleme
- **Arayüz:** Türkçe, mobil uyumlu, açık/koyu tema

## 🚀 GitHub Pages ile kurulum

1. Bu depodaki dosyaları GitHub repository'sinin **kök dizinine** yükleyin.
2. GitHub'da **Settings → Pages** bölümüne girin.
3. **Build and deployment → Source** için `Deploy from a branch` seçin.
4. **Branch:** `main`, **Folder:** `/ (root)` olarak ayarlayıp kaydedin.
5. Yayınlandıktan sonra uygulama genellikle şu adresten açılır:

   `https://KULLANICI_ADI.github.io/REPOSITORY_ADI/`

> GitHub Pages statik dosyaları yayınlar. GitHub Pages kullanımı ve görünürlük koşulları hesabınızın planına ve repository ayarlarına bağlıdır; private repository oluşturmak, yayınlanan sitenin de private olduğu anlamına gelmez.

## 📱 Telefona veya bilgisayara yükleme

- **Android / Chrome:** Uygulama adresini açın → menü → **Uygulamayı yükle** veya **Ana ekrana ekle**.
- **iPhone / Safari:** Adresi açın → **Paylaş** → **Ana Ekrana Ekle**.
- **Bilgisayar / Chrome veya Edge:** Tarayıcının uygulama yükleme seçeneğini kullanın.

İlk açılışı internet bağlantısıyla yapın. Service worker uygulama dosyalarını önbelleğe alır; bu, farklı cihazlar arasında veri senkronizasyonu sağlamaz.

## 🗂️ Dosya yapısı

```text
├── index.html                # Uygulamanın HTML, CSS ve JavaScript kodu
├── manifest.webmanifest      # PWA tanımı
├── sw.js                     # Çevrimdışı önbellekleme
├── icon-192.png              # 192×192 uygulama simgesi
├── icon-512.png              # 512×512 uygulama simgesi
├── icon-maskable-512.png     # Android uyumlu maske simgesi
├── apple-touch-icon.png      # iOS ana ekran simgesi
├── favicon-32.png            # Tarayıcı simgesi
├── KURULUM.txt               # Ayrıntılı kurulum notları
└── README.md                 # Bu dosya
```

**Önemli:** Yüklemeden önce gönderilen `index(3).html`, `manifest(3).webmanifest` ve `sw(1).js` dosyalarını sırasıyla **`index.html`**, **`manifest.webmanifest`** ve **`sw.js`** olarak yeniden adlandırın. Uygulama bu standart dosya adlarını kullanır.

## 💾 Veri saklama ve yedekleme

GitHub Pages üzerinde çalışan statik sürümde veriler tarayıcının yerel depolamasında (`localStorage`) saklanır. Her cihazın ve tarayıcı profilinin kayıtları ayrıdır.

- **Yedek alma:** Uygulamada **Ayarlar → Yedek dosyası indir**.
- **Geri yükleme:** İlk kurulumda **Yedek dosyasından başla** veya **Ayarlar → Dosyadan geri yükle**.
- Tarayıcı verilerini temizlemek kayıtların kaybolmasına neden olabilir. Düzenli yedek alın.
- iPhone'da Safari ile ana ekrana eklenen uygulamanın depolama alanları ayrı olabilir; yedeği kullanacağınız ortamda geri yükleyin.

Uygulama kodunda sunucu API'siyle çalışmaya yönelik bölümler de vardır; ancak **bu repository'de sunucu uygulaması bulunmadığından** GitHub Pages dağıtımı tek başına merkezi veritabanı veya cihazlar arası otomatik senkronizasyon sunmaz.

## 🔄 Güncelleme

Değişen dosyaları aynı adlarla repository'ye yükleyip commit oluşturun. GitHub Pages yayını güncellendikten sonra uygulamayı yenileyin. Önbellek nedeniyle güncellemeler bazı cihazlarda gecikmeli görünebilir. Güncelleme öncesi yedek alın.

## 🔒 Güvenlik notları

- Repository'ye gerçek müşteri verisi, yedek dosyası, şifre veya API anahtarı yüklemeyin.
- Yerel tarayıcı depolaması merkezi sunucu veritabanı yerine geçmez; hassas veya çok kullanıcılı üretim senaryolarında uygun bir sunucu altyapısı ve güvenlik değerlendirmesi gerekir.
- Public repository'de kaynak kod herkes tarafından görüntülenebilir.

## 🛠️ Teknolojiler

HTML5 · CSS3 · JavaScript · Web App Manifest · Service Worker · Browser Local Storage

## 📄 Lisans

Bu repository için henüz bir lisans belirtilmemiştir. Kullanım ve dağıtım koşullarını netleştirmek için ayrıca bir `LICENSE` dosyası ekleyebilirsiniz.
