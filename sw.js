self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            cache.addAll(['./', './src/styles.css', './images/logo192.png'])
        })
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
        )
});

self.addEventListener("push", () => {
    self.registration.sendNotification('test mesage', {}) // se puede poner iconos
});