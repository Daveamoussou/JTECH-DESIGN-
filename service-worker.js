// Incrémente ce numéro si tu veux forcer le nettoyage de tous les anciens caches
const CACHE_NAME = "jtech-design-v10";
const ASSETS = ["./", "./index.html", "./produits.js", "./manifest.json"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      // add() un par un : un fichier absent ne bloque pas l'installation
      Promise.all(ASSETS.map((url) => cache.add(new Request(url, { cache: "reload" })).catch(() => {})))
    )
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n)))
    ).then(() => self.clients.claim())
  );
});

// Réseau d'abord : la version la plus récente s'affiche toujours quand il y a du réseau.
// Le cache ne sert qu'en secours hors-ligne.
self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;

  event.respondWith(
    fetch(req, { cache: "no-cache" })
      .then((res) => {
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
        }
        return res;
      })
      .catch(() => caches.match(req).then((cached) => cached || caches.match("./index.html")))
  );
});
