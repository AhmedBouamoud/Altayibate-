const CACHE='rihla-jihawi-v5-cache';
const ASSETS=['./','./index.html','./lessons.html','./quiz.html','./speed.html','./clinic.html','./flashcards.html','./achievements.html','./report.html','./about.html','./css/style.css','./js/data.js','./js/app.js','./assets/logo.svg','./manifest.webmanifest'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));