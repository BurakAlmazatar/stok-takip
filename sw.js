/* Stok ve Cari Takip - servis dosyası
   Amaç: uygulamayı internet olmadan da açmak. Kayıtlarınıza (tarayıcı deposu) dokunmaz.
   Güncelleme: sayfa açılırken önce internetteki yeni sürüm alınır, internet yoksa kayıtlı kopya açılır.
   Gerekirse aşağıdaki sürüm adını değiştirerek eski önbelleği temizleyebilirsiniz. */
const CACHE = 'stokcari-v3';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './icon-maskable-512.png', './apple-touch-icon.png', './favicon-32.png'];

self.addEventListener('install', function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){ return c.addAll(SHELL); }).then(function(){ return self.skipWaiting(); }));
});

self.addEventListener('activate', function(e){
  e.waitUntil(
    caches.keys().then(function(keys){ return Promise.all(keys.filter(function(k){ return k !== CACHE; }).map(function(k){ return caches.delete(k); })); })
      .then(function(){ return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function(e){
  var req = e.request;
  var u = new URL(req.url);
  if(req.method !== 'GET' || u.origin !== self.location.origin || u.pathname.indexOf('/api/') === 0) return;   // API istekleri asla önbelleğe alınmaz
  if(req.mode === 'navigate'){
    e.respondWith(
      fetch(req, {cache:'no-cache'}).then(function(res){
        var copy = res.clone();
        caches.open(CACHE).then(function(c){ c.put('./index.html', copy); });
        return res;
      }).catch(function(){
        return caches.match('./index.html').then(function(r){ return r || caches.match('./'); });
      })
    );
    return;
  }
  if(u.pathname.endsWith('/manifest.webmanifest')){
    e.respondWith(fetch(req, {cache:'no-store'}).catch(function(){ return caches.match(req); }));
    return;
  }
  e.respondWith(
    caches.match(req).then(function(r){
      return r || fetch(req).then(function(res){
        var copy = res.clone();
        caches.open(CACHE).then(function(c){ c.put(req, copy); });
        return res;
      });
    })
  );
});
