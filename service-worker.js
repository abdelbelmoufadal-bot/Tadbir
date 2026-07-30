const CACHE_NAME = 'tadbir-v4.2.7';
const APP_SHELL = [
  './',
  './index.html',
  './offline.html',
  './manifest.json',
  './css/style.css',
  './js/app.js',
  './icons/tadbir.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then(response => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put('./index.html', copy));
          return response;
        })
        .catch(() => caches.match('./index.html').then(response => response || caches.match('./offline.html')))
    );
    return;
  }

  const url = new URL(request.url);
  const cacheableExternal = ['script', 'style', 'font', 'image'].includes(request.destination);
  if (url.origin !== self.location.origin && !cacheableExternal) return;

  event.respondWith(
    caches.match(request).then(cached => {
      const network = fetch(request).then(response => {
        if (response && (response.ok || response.type === 'opaque')) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
        }
        return response;
      });
      return cached || network.catch(() => cached);
    })
  );
});
