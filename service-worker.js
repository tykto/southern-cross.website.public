!function(){"use strict";const e=1606943588763,t=`cache${e}`,s=["/client/client.a4f6f4c7.js","/client/inject_styles.5607aec6.js","/client/index.5a1cbe0c.js"].concat(["/service-worker-index.html","/favicon.ico","/global.css","/images/before-after.jpg","/images/bobcat.jpg","/images/hero-cropped.jpg","/images/hero.jpg","/images/logo.jpg","/images/map.png","/images/trucks-front-1.jpg","/images/trucks-front-2.jpg","/images/trucks.jpg","/images/under-house-rubbish-1.jpg","/images/under-house-rubbish-2.jpg","/logo-192.png","/logo-512.png","/manifest.json","/styles/bootstrap.min.css"]),a=new Set(s);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(s))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const s of e)s!==t&&await caches.delete(s);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const s=new URL(t.request.url),n=s.protocol.startsWith("http"),c=s.hostname===self.location.hostname&&s.port!==self.location.port,i=s.host===self.location.host&&a.has(s.pathname),o="only-if-cached"===t.request.cache&&!i;!n||c||o||t.respondWith((async()=>i&&await caches.match(t.request)||async function(t){const s=await caches.open(`offline${e}`);try{const e=await fetch(t);return s.put(t,e.clone()),e}catch(e){const a=await s.match(t);if(a)return a;throw e}}(t.request))())}))}();
