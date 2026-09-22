/* Service Worker — 11 (offline-first lite).
 * - Navegação: NETWORK-FIRST (sempre tentar a versão nova; fallback p/ cache offline).
 * - Assets estáticos: cache-first com atualização (nunca quebra o shell novo).
 * - Fila de mensagens offline (IndexedDB) + Background Sync.
 */
'use strict';

const SHELL_CACHE = '11-shell-v2';
const SHELL_URLS = ['/', '/manifest.json', '/icon.svg', '/favicon.ico'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(SHELL_CACHE)
      .then((cache) => cache.addAll(SHELL_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((k) => k !== SHELL_CACHE).map((k) => caches.delete(k)))
      )
      .then(() => self.clients.claim())
  );
});

function isNavigate(request) {
  return (
    request.method === 'GET' &&
    (request.mode === 'navigate' || request.destination === 'document')
  );
}

function putInCache(request, response) {
  const copy = response.clone();
  caches.open(SHELL_CACHE).then((cache) => cache.put(request, copy)).catch(() => undefined);
  return response;
}

function openQueue() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open('offline-queue', 1);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains('pending')) {
        db.createObjectStore('pending', { keyPath: 'id', autoIncrement: true });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function enqueueChat(payload) {
  const db = await openQueue();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('pending', 'readwrite');
    tx.objectStore('pending').add({ url: '/api/chat', payload, status: 'pending_sync', ts: Date.now() });
    tx.oncomplete = () => resolve(true);
    tx.onerror = () => reject(tx.error);
  });
}

async function getPending() {
  const db = await openQueue();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('pending', 'readonly');
    const req = tx.objectStore('pending').getAll();
    req.onsuccess = () => resolve(req.result ?? []);
    req.onerror = () => reject(req.error);
  });
}

async function removePending(id) {
  const db = await openQueue();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('pending', 'readwrite');
    tx.objectStore('pending').delete(id);
    tx.oncomplete = () => resolve(true);
    tx.onerror = () => reject(tx.error);
  });
}

async function replayQueue() {
  const items = await getPending();
  let flushed = 0;
  for (const item of items) {
    try {
      const res = await fetch(item.url, {
        method: 'POST',
        headers: { 'content-type': 'application/json', ...(item.headers ?? {}) },
        body: JSON.stringify(item.payload),
      });
      if (res.ok) {
        await removePending(item.id);
        flushed += 1;
      }
    } catch {
      // mantém na fila (sem rede)
    }
  }
  if (flushed > 0) {
    const clients = await self.clients.matchAll({ includeUncontrolled: true });
    for (const c of clients) c.postMessage({ type: 'queue-flushed', count: flushed });
  }
}

self.addEventListener('message', (event) => {
  const msg = event.data;
  if (!msg) return;
  if (msg.type === 'queue-chat') {
    event.waitUntil(enqueueChat(msg.payload));
  }
});

self.addEventListener('sync', (event) => {
  if (event.tag === 'chat-sync') {
    event.waitUntil(replayQueue());
  }
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // Navegação: sempre a versão NOVA (rede primeiro), cache só como fallback offline.
  if (isNavigate(request)) {
    event.respondWith(
      fetch(request)
        .then((res) => putInCache(request, res))
        .catch(() =>
          caches
            .match(request)
            .then((cached) => cached || caches.match('/'))
        )
    );
    return;
  }

  // Assets estáticos: cache-first + atualiza em background (consistente com o HTML novo).
  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) {
        fetch(request)
          .then((res) => putInCache(request, res))
          .catch(() => undefined);
        return cached;
      }
      return fetch(request)
        .then((res) => putInCache(request, res))
        .catch(() => Response.error());
    })
  );
});

// Ordena instalar/ativar o SW novo o quanto antes (sem esperar reload do usuário).
self.addEventListener('updatefound', () => undefined);