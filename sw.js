const CACHE_NAME = 'kalori-pro-v2';
const assets = [
  './',
  './index.html',
  './manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Dosyalar önbelleğe alınıyor...');
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // Önbellekte varsa onu ver, yoksa internetten çek
      return response || fetch(event.request);
    })
  );
});
