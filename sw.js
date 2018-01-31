var cacheName = 'v1.0.1',
    cacheFiles = [
      // Main JS bundle
      './static/js/bundle.js',

      // Assets
      './static/media/angellist.7e5a01b9.svg',
      './static/media/background.671873aa.png',
      './static/media/behance.5f3abfda.svg',
      './static/media/dribbble.28d0d3e9.svg',
      './static/media/github.fd8239f7.svg',
      './static/media/green-shape-1.bbc55126.svg',
      './static/media/linkedin.35320ef3.svg',
      './static/media/logo.8943792d.svg',
      './static/media/parallelogram.490ae689.svg',
      './static/media/purple-shape-1.03d2dbe0.svg',
      './static/media/twitter.60ac241e.svg'
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