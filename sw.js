const CACHE_NAME = 'japan-scam-checker-v1';
const ASSETS = [
  '/japan-scam-checker/',
  '/japan-scam-checker/index.html',
  '/japan-scam-checker/favicon.svg',
  '/japan-scam-checker/manifest.json',
  '/japan-scam-checker/data/scams.json'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
