const CACHE_NAME = 'caronas-v1';
const ASSETS_TO_CACHE = [
  '/caronas/',
  '/caronas/index.html',
  '/caronas/manifest.json',
  '/caronas/icon-192.png',
  '/caronas/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(ASSETS_TO_CACHE);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});