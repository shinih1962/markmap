const l = [
  "/_app/immutable/assets/_layout-c297bb37.css",
  "/_app/immutable/assets/_error-b20769a5.css",
  "/_app/immutable/assets/toolbar-88f661d3.css",
  "/_app/immutable/assets/codemirror-f9a2d0c7.css",
  "/_app/immutable/chunks/singletons-51641b4f.js",
  "/_app/immutable/chunks/footer-94d0e1c2.js",
  "/_app/immutable/chunks/ga-f2416bc8.js",
  "/_app/immutable/chunks/preload-helper-41c905a7.js",
  "/_app/immutable/chunks/_layout-da46b06b.js",
  "/_app/immutable/start-d2d0c686.js",
  "/_app/immutable/chunks/toast-483b9908.js",
  "/_app/immutable/chunks/index-1f49ef0e.js",
  "/_app/immutable/chunks/0-72b98990.js",
  "/_app/immutable/chunks/stores-13db4809.js",
  "/_app/immutable/chunks/navigation-bf1af2a6.js",
  "/_app/immutable/chunks/1-4e483c26.js",
  "/_app/immutable/chunks/4-35c8912d.js",
  "/_app/immutable/chunks/5-ee803b60.js",
  "/_app/immutable/chunks/6-d2d4e20b.js",
  "/_app/immutable/chunks/7-13b9651d.js",
  "/_app/immutable/chunks/8-f675b82c.js",
  "/_app/immutable/components/pages/_page.svelte-a5356ee6.js",
  "/_app/immutable/chunks/buttons.esm-399bf8fe.js",
  "/_app/immutable/chunks/faq-853276a1.js",
  "/_app/immutable/chunks/json-options-3b4ebdf8.js",
  "/_app/immutable/chunks/markmap-ef13e9c4.js",
  "/_app/immutable/chunks/packages--coc-markmap-10bd7856.js",
  "/_app/immutable/chunks/packages--markmap-cli-f1154d19.js",
  "/_app/immutable/chunks/2-c0681b7a.js",
  "/_app/immutable/chunks/3-44f703df.js",
  "/_app/immutable/components/pages/usage/_page.svelte-749d3dc2.js",
  "/_app/immutable/chunks/packages--markmap-lib-998051a3.js",
  "/_app/immutable/modules/pages/_layout.ts-9cbb603b.js",
  "/_app/immutable/modules/pages/docs/_id_/_page.ts-415cbb04.js",
  "/_app/immutable/chunks/packages--markmap-view-dd8bb7e3.js",
  "/_app/immutable/components/pages/_error.svelte-6e55fb5c.js",
  "/_app/immutable/components/pages/docs/_page.svelte-e1cb6434.js",
  "/_app/immutable/components/pages/docs/_id_/_page.svelte-77e008e6.js",
  "/_app/immutable/chunks/_page-f1640077.js",
  "/_app/immutable/components/pages/full/_page.svelte-3051bda7.js",
  "/_app/immutable/chunks/loader-cf56d7d4.js",
  "/_app/immutable/chunks/markmap-d7dea953.js",
  "/_app/immutable/components/pages/_layout.svelte-0ebcde6d.js",
  "/_app/immutable/components/pages/repl/_page.svelte-32726826.js",
  "/_app/immutable/components/pages/inner/_page.svelte-a2d10a06.js",
  "/_app/immutable/chunks/codemirror-c16b028a.js",
  "/_app/immutable/chunks/toolbar-6a1f433f.js",
  "/_app/immutable/chunks/debounce-8863b0ac.js"
], u = [
  "/.nojekyll",
  "/.well-known/brave-rewards-verification.txt",
  "/favicon.png",
  "/lib/d3.js",
  "/lib/markmap-toolbar.css",
  "/lib/markmap-toolbar.js",
  "/lib/markmap-view.js",
  "/logo-192.png",
  "/logo-512.png",
  "/manifest.json"
], m = "1676294206225", c = `cache${m}`, n = l.concat(u), i = new Set(n);
self.addEventListener("install", (a) => {
  a.waitUntil(
    caches.open(c).then((e) => e.addAll(n)).then(() => {
      self.skipWaiting();
    })
  );
});
self.addEventListener("activate", (a) => {
  a.waitUntil(
    caches.keys().then(async (e) => {
      for (const s of e)
        s !== c && await caches.delete(s);
      self.clients.claim();
    })
  );
});
self.addEventListener("fetch", (a) => {
  if (a.request.method !== "GET" || a.request.headers.has("range"))
    return;
  const e = new URL(a.request.url);
  if (e.protocol.startsWith("http") && !(e.hostname === self.location.hostname && e.port !== self.location.port)) {
    if (e.host === self.location.host && i.has(e.pathname)) {
      a.respondWith(caches.match(a.request, { ignoreSearch: !0 }));
      return;
    }
    a.request.cache !== "only-if-cached" && a.respondWith(
      caches.open(`offline${m}`).then(async (s) => {
        try {
          const t = await fetch(a.request);
          return s.put(a.request, t.clone()), t;
        } catch (t) {
          const p = await s.match(a.request);
          if (p)
            return p;
          throw t;
        }
      })
    );
  }
});
