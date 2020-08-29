self.addEventListener("install", (event) => {
  console.log("[Service Worker] installing Service Worker ....", event);
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  console.log("[Service Worker] Activating Service Worker ....", event);
});
