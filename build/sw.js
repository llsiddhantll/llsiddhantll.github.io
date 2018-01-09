var cacheName = 'v1',
    cacheFiles = [
      './static/js/bundle.js'
    ];

self.addEventListener('install', function (e) {
  console.log('[SW] Installed');

  e.waitUntil(
    caches.open(cacheName)
      .then(function (cache) {
        console.log('[SW] Adding files to cache')
        return cache.addAll(cacheFiles)
      })
  );
});

self.addEventListener('activate', function (e) {
  console.log('[SW] Activated');

  e.waitUntil(
    caches.keys()
      .then(function (cacheNames) {
        return Promise.all(cacheNames.map(function (thisCacheName) {
          if (thisCacheName !== cacheName) {
            console.log('[SW] Cache ' + thisCacheName + ' is out of date, deleting')
            return caches.delete(thisCacheName)
          }
        }))
      })
  )
})

self.addEventListener('fetch', function (e) {
  // console.log('[SW] Fetch', e.request.url)

  e.respondWith(
    caches.match(e.request)
      .then(function (response) {
        if (response) {
          console.log("[SW] Resource found in cache, using that instead");
          return response;
        }

        fetch(e.request)
          .then(function (fetchResponse) {
            if (!fetchResponse) {
              console.log('[SW] No response from fetch')
              return fetchResponse
            }

            caches.open(cacheName)
              .then(function (cache) {
                cache.put(e.request, fetchResponse)

                return fetchResponse
              })
              .catch(function () {
                console.log('[SW] Error fetching and caching')
              })
          })
          .catch(function (err) {
            console.log('[SW] Fetch failed; returning offline page instead.', err);
            return caches.match(e.request);
          })
      })
  )
})