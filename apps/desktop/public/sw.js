/** @type {ServiceWorkerGlobalScope} */
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open("11-desktop-v1")
      .then((cache) =>
        cache.addAll([
          self.registration.scope,
          self.registration.scope + "index.html",
          self.registration.scope + "manifest.json",
        ]),
      )
      .catch(() => {}),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => k.startsWith("11-desktop-") && k !== "11-desktop-v1")
          .map((k) => caches.delete(k)),
      ),
    ),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then(
      (cached) =>
        cached ||
        fetch(e.request)
          .then((resp) => {
            const clone = resp.clone();
            caches.open("11-desktop-v1").then((cache) => cache.put(e.request, clone));
            return resp;
          })
          .catch(() => cached), // shell local já renderiza offline sem depender desta camada
    ),
  );
});