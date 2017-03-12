var cacheName = 'haehnchenbruststreifenbaguetten-v00000003';
var urlsToCache = [
  '/',
  '/index.html',
  '/nominativ.js',
  '/akkusativ.js',
  '/genitiv.js',
  '/nominativ.js',
  '/html.js',
  '/lib.js',
  '/index.css',
  '/index.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(Promise.all([
    self.skipWaiting()
  ]));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(Promise.all([
    self.clients.claim().then(() => {
      console.log('claimed client');
      return caches.open(cacheName).then((cache) => {
        console.log('opened cache');
        return cache.addAll(urlsToCache);
      }).then(() => {
        return caches.keys().then((cacheNames) => {
          return Promise.all(cacheNames.map((currentCacheName) => {
            if (cacheName !== currentCacheName) {
              console.log('deleted cache:', currentCacheName);
              return caches.delete(currentCacheName);
            }
          }));
        });
      })
    })
  ]));
});

self.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request).then((response) => {
    var fetchRequest = event.request.clone();
    console.log('fetching:', fetchRequest.url);
    return fetch(fetchRequest).catch((fetchErr) => {
      console.log('fetch error:', fetchErr, fetchRequest.url);
    }).then((newResponse) => {
      if (!newResponse || newResponse.status !== 200 || newResponse.type !== 'basic') {
        console.log('returning cached response for:', fetchRequest.url);
        return response;
      }

      var responseToCache = newResponse.clone();
      caches.open(cacheName).then((cache) => {
        console.log('adding cached response for:', fetchRequest.url, cacheName);
        cache.put(event.request, responseToCache);
      });
      console.log('returning fresh response for:', fetchRequest.url);
      return newResponse;
    });
  }));
});
