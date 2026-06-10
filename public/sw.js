const CACHE_VERSION = 'v2';
const STATIC_CACHE = `altayibate-static-${CACHE_VERSION}`;
const DYNAMIC_CACHE = `altayibate-dynamic-${CACHE_VERSION}`;

const STATIC_ASSETS = [
  '/Altayibate-/',
  '/Altayibate-/foods/',
  '/Altayibate-/articles/',
  '/Altayibate-/videos/',
  '/Altayibate-/about/',
  '/Altayibate-/tips/',
  '/Altayibate-/contact/',
  '/Altayibate-/manifest.json',
  '/Altayibate-/icons/icon-192.svg',
  '/Altayibate-/icons/icon-512.svg',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch(() => {});
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => k !== STATIC_CACHE && k !== DYNAMIC_CACHE)
          .map((k) => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // Skip cross-origin except YouTube thumbnails
  if (url.origin !== location.origin) {
    if (url.hostname === 'img.youtube.com') {
      event.respondWith(
        caches.match(request).then((cached) => {
          if (cached) return cached;
          return fetch(request).then((res) => {
            if (res && res.status === 200) {
              const clone = res.clone();
              caches.open(DYNAMIC_CACHE).then((c) => c.put(request, clone));
            }
            return res;
          }).catch(() => new Response('', { status: 503 }));
        })
      );
    }
    return;
  }

  // HTML pages: network first, fallback to cache
  if (request.destination === 'document' || request.headers.get('Accept')?.includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then((res) => {
          const clone = res.clone();
          caches.open(DYNAMIC_CACHE).then((c) => c.put(request, clone));
          return res;
        })
        .catch(() =>
          caches.match(request).then((cached) => cached || caches.match('/Altayibate-/'))
        )
    );
    return;
  }

  // Static assets: cache first
  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request).then((res) => {
        if (res && res.status === 200 && res.type === 'basic') {
          const clone = res.clone();
          caches.open(DYNAMIC_CACHE).then((c) => c.put(request, clone));
        }
        return res;
      }).catch(() => new Response('', { status: 503 }));
    })
  );
});

// Background sync notification
self.addEventListener('message', (event) => {
  if (event.data?.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
