[README.md](https://github.com/user-attachments/files/34500852/README.md)
# Stok ve Cari Takip — GitHub (Yerel) Sürümü

**Sürüm:** `2026.10.25-47`

Stok, cari hesap, satış/alış, sipariş, kampanya ve etiket yönetimi için **tek dosyalık web uygulaması**. Sunucu ve veritabanı gerekmez: uygulama GitHub Pages ile yayınlanır, kayıtlar **kullandığınız tarayıcıda** saklanır. Telefona uygulama gibi eklenebilir (PWA) ve internet olmadan da açılır.

> Adım adım GitHub kurulumu için **`KURULUM.txt`**, şifre kurtarma için **`SIFRE-KURTARMA.txt`** dosyalarına bakın. Bu README genel bir özet ve başvuru kaynağıdır.

---

## Bu sürüm kime göre?

| | GitHub (yerel) sürümü | Sunucu sürümü |
|---|---|---|
| Kayıtların yeri | Her cihazın **kendi tarayıcısı** | SQL Server (tek ortak veri) |
| Birden çok cihaz/kullanıcı aynı anda | Hayır (her cihaz ayrı) | Evet |
| Kurulum | Dosyaları GitHub'a yüklemek | Bilgisayara SQL Server + Node.js |
| Mağaza / transfer | Yok (tek lokasyon gibi çalışır) | Var |
| Çok sayıda ürün fotoğrafı | Sınırlı (~5 MB tarayıcı limiti) | Uygun |
| Yedek | Elle (Ayarlar > Yedek) | SQL Server yedeği + otomatik |

Tek kişi/tek cihaz ve basit kullanım için idealdir. Birden çok çalışan, mağaza veya cihaz aynı veriyi kullanacaksa **sunucu sürümüne** geçin (yedek dosyası `ithal-et.bat` ile taşınır).

## Dosyalar

| Dosya | Açıklama |
|---|---|
| `index.html` | Uygulamanın kendisi (sürüm numarası içinde) |
| `manifest.webmanifest`, `sw.js` | Uygulama adı/rengi ve çevrimdışı çalışma |
| `icon-*.png`, `apple-touch-icon.png`, `favicon-32.png` | Simgeler |
| `sifre-sifirla.html` | İsteğe bağlı: konsol açamadığınızda şifre sıfırlama sayfası |
| `KURULUM.txt`, `SIFRE-KURTARMA.txt` | Ayrıntılı kılavuzlar |
| `README.md` | Bu dosya |

## Hızlı kurulum

1. github.com'da yeni bir **Public** depo açın (örn. `stok-takip`).
2. Zip'i klasöre çıkarın; içindeki dosyaları **Add file > Upload files** ile yükleyin (zip'i olduğu gibi yüklemeyin). `README.md` ve `.txt` dosyaları yüklenebilir ya da atlanabilir.
3. **Settings > Pages**: *Deploy from a branch*, branch `main`, klasör `/ (root)` → Save.
4. 1-2 dakika sonra adres hazır: `https://KULLANICIADINIZ.github.io/stok-takip/`
5. Telefonda: Android (Chrome) menü > *Uygulamayı yükle*; iPhone (Safari) Paylaş > *Ana Ekrana Ekle*. İlk açılışı internet varken yapın.

> Veriler depoda değil, **kullanıcının tarayıcısında** durur; depoda yalnızca uygulama dosyaları olur.

## Güncelleme

1. Yeni zip'ten `index.html` dosyasını (ve değiştiyse `sw.js`, `manifest.webmanifest`) depoya aynı adla yükleyin.
2. Uygulamada **Hesabım > Uygulamayı yenile** deyin (ya da sayfayı yenileyin). Kayıtlarınız silinmez.
3. Sürüm numarası Hesabım penceresinde görünür; zip'teki sürümle aynı olduğunu kontrol edin.

## Özellikler (özet)

**Temel:** ürün kartları (özellik, renk/beden varyantı, varyant ve lot barkodu, KDV, kritik stok), cariler ve perakende müşteriler, ekstre ve bakiye, tahsilat/ödeme, stok girişi/çıkışı, kampanyalar, fiş yazdırma, Excel ve PDF raporları, çoklu kullanıcı ve yetkiler (aynı cihazda).

**Satış:** perakende ve toptan satış, iade, belge ve makbuz düzenleme, kapanış kilidi, **satış sorumlusu** (parametreli) ve sorumlu raporu.

**Sipariş, kapora, avans:** satış/alış siparişi, kısmi faturalama, **birden fazla siparişi tek faturada birleştirme**, kapora ve cari avansı, **dövizli (USD/EUR)** işlemler (kurlar elle girilir), sipariş ve avans raporları.

**Barkod, lot, etiket:** EAN-13, varyant ve **lot barkodu**, **etiket tasarımcısı** (rulo/A4, sürükle-bırak, çoklu tasarım, üstü çizili kampanyalı fiyat, fiyat tarihi, yerli üretim logosu), **ürün fotoğrafı**.

**Görünüm:** TR / EN / RU, 11 tema, menü adı ve simgeleri, yazı tipi/boyutu.

## Yedekleme ve cihaz taşıma

- Her cihazın kayıtları **ayrıdır**. Düzenli olarak **Ayarlar > Yedek dosyası indir** ile yedek alın. **Tarayıcı verisini temizlemek tüm kayıtları siler.**
- Bilgisayardan telefona taşıma: bilgisayarda yedek indirin → telefona gönderin → telefonda ilk kurulum ekranında **"Yedek dosyasından başla"** ya da giriş yapınca **Ayarlar > Dosyadan geri yükle**. Bu bir senkronizasyon değildir; iki cihazda ayrı çalışırsanız kayıtlar ayrışır.
- iPhone: ana ekrana eklenen uygulamanın kayıtları Safari'ninkinden **ayrıdır**; yedeği ana ekran simgesinden açıp **orada** yükleyin.
- İndirme çalışmazsa Ayarlar > **Yedek metni oluştur** ile metni kopyalayıp Notlar'a yapıştırın.

## Önemli notlar ve sınırlar

- **Depolama sınırı ~5 MB:** çok sayıda ürün fotoğrafı bu sınırı doldurabilir; ürün kartında toplam fotoğraf boyutu gösterilir. Çok fotoğraf için sunucu sürümünü kullanın.
- Aynı GitHub hesabındaki (`kullaniciadi.github.io`) tüm siteler tarayıcıda aynı depolama alanını paylaşır. Başka siteleriniz de varsa bu uygulama için ayrı hesap/kuruluş ya da kendi alan adınızı kullanın.
- **Adres değişirse** (depo adı vb.) eski adresteki kayıtlar yeni adreste görünmez; önce yedek alın.
- Lokasyon/transfer ve ortak veri bu sürümde yoktur (sunucu sürümüne özgü).
- Etiketler tarayıcının yazdırma penceresinden basılır: ölçeği **%100** seçin, "sayfaya sığdır" ve üstbilgi/altbilgiyi kapatın; rulo yazıcıda kâğıt boyutu olarak etiket boyutunu seçin.

## Şifre kurtarma (kısa)

Kayıtlar silinmez; şifre yeniden belirlenebilir: giriş ekranında **"Şifremi unuttum"** (kurtarma koduyla) ya da `SIFRE-KURTARMA.txt` içindeki konsol komutu / `sifre-sifirla.html`. Kurtarma kodunu önceden **Hesabım > Kurtarma kodu oluştur** ile alıp saklayın.

## Sürüm notları

| Sürüm | Değişiklik |
|---|---|
| **-47** | Ürün fotoğrafı: yükleme, küçültme, satış/alış/sipariş/stok satırlarında küçük resim, resimli ürün seçici, etiket alanı |
| **-46** | Etiket tasarımcısı: çoklu tasarım, sürükle-bırak yerleşim, rulo ve A4, üstü çizili kampanyalı fiyat, fiyat tarihi, yerli üretim logosu |
| **-45** | Menü simgeleri; ürün kartında kampanyalı fiyat ve fiyat değişiklik tarihi; tarihli kampanyada kart fiyatını kullanma |
| **-44** | 9 yeni tema |
| **-43** | Satış sorumlusu (parametreli) ve sorumlu raporu |
| **-42** | "Siparişi faturalaştır" her zaman görünür; görünenleri seç/kaldır |
| **-41** | Aynı carinin birden fazla siparişini tek faturada birleştirme |
| **-40** | Siparişler ekranında "Siparişi faturalaştır" penceresi |
| **-39** | Toplu etiket: ürün/varyant barkodu ile lot barkodu türü seçimi |
| **-38** | Satır editörlerinde elle lot seçimi |
| **-37** | Lot (beden dağılımı) ve lot barkodu |
| **-36** | Telefonda dil düğmeleri firma adının altına alındı |
| **-35 / -34** | Fiş gruplama düğmeleri tek üründe de görünür; çeviri eklemeleri |
| **-33** | Sipariş, kapora/avans, döviz, raporlar, TR/EN/RU dil, menü sığdırma, yazı tipi ayarları |
