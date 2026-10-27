[README.md](https://github.com/user-attachments/files/34050677/README.md)
# 📦 Stok ve Cari Takip

**Stok ve Cari Takip**, satış, alış, stok hareketleri ve cari hesap işlemlerini tek ekrandan yönetmeye yönelik Türkçe, mobil uyumlu bir web uygulamasıdır. **Progressive Web App (PWA)** desteğiyle uygun tarayıcılarda bilgisayar ve telefon ana ekranına eklenebilir; ilk çevrimiçi yüklemeden sonra uygulama kabuğu çevrimdışı da açılabilir.

> **Önemli:** Bu depodaki dosyalar GitHub Pages üzerinde **yerel/tarayıcı modunda** çalışır. Veriler otomatik olarak farklı cihazlar arasında eşitlenmez. Kodda ayrıca `/api/` uç noktalarını kullanan bir sunucu modu bulunur; ancak bu pakette sunucu uygulaması yer almamaktadır.

## Özellikler

- **Satış ve alış:** Satış/alış belgeleri, satış ve alış iadeleri, iskonto ve ödeme türleri.
- **Ürün yönetimi:** Ürün kartları, barkodlar, renk/beden varyantları, özellikler ve toplu ürün aktarımı (CSV/Excel'den kopyalama).
- **Stok takibi:** Stok giriş/çıkışları, stok hareketleri ve kritik stok takibi.
- **Cari hesaplar:** Cari kartları, bakiyeler, ekstreler, tahsilat ve ödemeler.
- **Döviz:** TRY, USD ve EUR işlemleri; yerel modda kur girişi elle yapılır.
- **Raporlama:** Satış, alış, kasa, ödeme ve kârlılık yetkilerine bağlı raporlar.
- **Kullanıcı yetkileri:** Yönetici ve kullanıcı bazlı menü/işlem izinleri; kasiyer, satış, depo ve muhasebe yetki şablonları.
- **Etiket ve fiş:** EAN-13 barkod işlemleri, etiketler ve yazdırılabilir fişler.
- **Görünüm:** Mobil uyumlu arayüz, açık/koyu tema ve PWA simgeleri.
- **Yedekleme:** Yerel verilerin yedeklenmesi ve yedekten geri yüklenmesi.

## Dosya yapısı

```text
stok-ve-cari-takip/
├── index.html                # Uygulamanın arayüzü ve istemci kodu
├── manifest.webmanifest      # PWA adı, görünümü ve simgeleri
├── sw.js                     # Çevrimdışı önbellek ve güncelleme yönetimi
├── icon-192.png              # 192×192 uygulama simgesi
├── icon-512.png              # 512×512 uygulama simgesi
├── icon-maskable-512.png     # Android uyarlanabilir simge
├── apple-touch-icon.png      # iPhone/iPad ana ekran simgesi
├── favicon-32.png            # Tarayıcı sekmesi simgesi
└── README.md                 # Bu doküman
```

**Dosya adları önemlidir.** Yüklenen dosyalarda `(1)`, `(2)` veya `(4)` gibi ekler varsa GitHub'a yüklemeden önce yukarıdaki adlarla yeniden adlandırın. Özellikle `index.html`, `sw.js` ve `manifest.webmanifest` adları kod içindeki referanslarla aynı olmalıdır.

## GitHub Pages ile kurulum

1. [github.com](https://github.com) üzerinde yeni bir **Public** repository oluşturun (örnek: `stok-takip`).
2. Yukarıdaki uygulama dosyalarını **deponun kök dizinine**, tek tek yükleyin. ZIP dosyasını doğrudan yüklemeyin.
3. **Settings → Pages** bölümüne girin.
4. **Build and deployment → Source:** `Deploy from a branch` seçin.
5. **Branch:** `main`, klasör: `/ (root)` seçip **Save** düğmesine basın.
6. Yayın işlemi tamamlanınca uygulamayı aşağıdaki örnek biçimdeki adresten açın:

```text
https://KULLANICIADINIZ.github.io/stok-takip/
```

GitHub Pages yalnızca statik dosyaları barındırır; bu kurulum kendi başına merkezi veritabanı veya çok cihazlı canlı senkronizasyon sağlamaz.

## Uygulama olarak yükleme

| Platform | İşlem |
|---|---|
| Android / Chrome | Siteyi açın → üç nokta menüsü → **Uygulamayı yükle** veya **Ana ekrana ekle** |
| iPhone / Safari | Siteyi açın → **Paylaş** → **Ana Ekrana Ekle** |
| Windows / Chrome veya Edge | Siteyi açın → adres çubuğundaki yükleme simgesi veya tarayıcı menüsünden uygulama yükleme seçeneği |

İlk açılışta internet bağlantısı gereklidir. `sw.js`, uygulamanın temel dosyalarını önbelleğe alarak sonraki çevrimdışı açılışlara yardımcı olur. Çevrimdışı çalışabilirlik, dosyaların daha önce başarıyla önbelleğe alınmış olmasına ve tarayıcı koşullarına bağlıdır.

## Veri saklama ve cihazlar arası kullanım

GitHub Pages sürümünde veriler tarayıcının **localStorage** alanında tutulur (`stokcari_v1` anahtarı). Bu nedenle:

- Bilgisayar ve telefonun verileri **ayrıdır**; otomatik senkronizasyon yapılmaz.
- Başka bir tarayıcı veya yeni cihaz aynı kayıtları kendiliğinden göstermez.
- Tarayıcı site verilerini silmek kayıt kaybına neden olabilir.
- Adres/alan adı değişikliklerinden önce yedek alınmalıdır.
- iPhone'da Safari ve ana ekrana eklenen uygulamanın veri alanları farklı olabilir.

### Bilgisayardan telefona veri taşıma

1. Bilgisayardaki uygulamada **Ayarlar → Yedek dosyası indir** ile JSON yedeği oluşturun.
2. Dosyayı güvenli bir yöntemle telefona aktarın.
3. Telefonda uygulamayı açın. İlk kurulumda **Yedek dosyasından başla** seçeneğini kullanın; kurulum tamamlandıysa **Ayarlar → Dosyadan geri yükle** bölümünden içe aktarın.
4. iPhone'da ana ekran uygulamasını kullanacaksanız, **önce ana ekrana ekleyin**, ardından yedeği ana ekran uygulamasının içinden yükleyin.

Bu işlem **tek seferlik veri aktarımıdır**, canlı senkronizasyon değildir. Yedek dosyaları ticari ve kişisel kayıtlar içerebilir; güvenli saklayın.

## Güncelleme

Uygulama kodu değiştiğinde GitHub deposundaki `index.html` dosyasını güncelleyin. Gerekirse diğer değişen dosyaları da yükleyin. Sayfa yenilendiğinde servis çalışanı önce ağdan güncel sayfayı almaya çalışır; bağlantı yoksa önbellekteki kopyaya döner.

Önbellek sürümü `sw.js` içindeki `CACHE` sabitiyle yönetilir (`stokcari-v2`). Önbellek davranışını değiştirdiğiniz sürümlerde bu adı artırabilirsiniz. **Önbelleği temizlemek ile tarayıcı/site verilerini silmek aynı şey değildir:** kayıtları korumak için güncellemeden önce yedek alın ve site verilerini gelişigüzel silmeyin.

## Teknik notlar

- **Tek sayfa uygulaması:** HTML, CSS ve JavaScript kodu `index.html` içindedir.
- **PWA:** `manifest.webmanifest` ve `sw.js` kullanılır.
- **Service worker:** Gezinti isteklerinde önce ağ, ağ yoksa önbellek yaklaşımı uygulanır; aynı kökendeki statik dosyalarda önbellek önceliklidir. `/api/` istekleri service worker tarafından önbelleğe alınmaz.
- **Sunucu modu:** Kod `/api/ping` yanıtıyla sunucu desteğini algılayabilir; bu depodaki statik dosyalar tek başına API sunucusu kurmaz.
- **Tarayıcı desteği:** Güncel Chrome, Edge ve Safari gibi modern tarayıcılar hedeflenir. Kurulum ve çevrimdışı özellikler tarayıcıya göre farklılık gösterebilir.

## Sorun giderme

| Sorun | Kontrol |
|---|---|
| Sayfa açılmıyor | GitHub Pages ayarlarını, yayın adresini ve `index.html` adını kontrol edin. |
| Simge görünmüyor | Manifestteki simge adlarıyla yüklenen PNG adlarının eşleştiğini doğrulayın. |
| Çevrimdışı açılmıyor | Uygulamayı önce internet varken açın; `sw.js` dosyasının erişilebilir olduğunu kontrol edin. |
| Telefonda kayıtlar yok | Her cihazın ayrı depolama kullandığını unutmayın; JSON yedeğini telefona aktarın. |
| Güncelleme görünmüyor | Sayfayı yenileyin, gerekirse `sw.js` önbellek sürümünü değiştirin. Önce yedek alın. |
| Sunucu bağlantı hatası | Bu statik GitHub Pages paketinde API sunucusu yoktur; sunucu modu ayrı bir kurulum gerektirir. |

## Güvenlik ve kullanım uyarısı

Bu uygulamada ticari kayıtlar, cari bilgiler ve kullanıcı verileri tutulabilir. Yerel tarayıcı depolaması, merkezi veritabanı veya düzenli sunucu yedeği yerine geçmez. Cihaz erişimini koruyun, yedekleri güvenli saklayın ve üretim kullanımı öncesinde yetkilendirme, veri bütünlüğü ve kurtarma senaryolarını test edin.

---

**Kaynak:** Bu README, sağlanan `index.html`, `manifest.webmanifest`, `sw.js`, simge dosyaları ve `KURULUM.txt` esas alınarak hazırlanmıştır.
