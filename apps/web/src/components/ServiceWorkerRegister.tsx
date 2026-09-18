"use client";

import { useEffect } from "react";

/**
 * Registra o Service Worker (offline-first + Background Sync)
 * e emite eventos de conectividade globais consumidos pela UI.
 */
export function ServiceWorkerRegister() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    navigator.serviceWorker.register("/sw.js").catch(() => {
      /* best-effort */
    });

    const onOnline = () => {
      window.dispatchEvent(new CustomEvent("gateway_online"));
      flushOfflineQueue();
    };
    const onOffline = () => {
      window.dispatchEvent(new CustomEvent("gateway_unavailable"));
    };

    window.addEventListener("online", onOnline);
    window.addEventListener("offline", onOffline);
    navigator.serviceWorker.addEventListener?.("message", onSwMessage);
    return () => {
      window.removeEventListener("online", onOnline);
      window.removeEventListener("offline", onOffline);
      navigator.serviceWorker.removeEventListener?.("message", onSwMessage);
    };
  }, []);

  return null;
}

declare global {
  interface Window {
    __flushOfflineQueue?: () => Promise<void>;
  }
}

function onSwMessage(event: MessageEvent) {
  const msg = event.data as { type?: string } | undefined;
  if (msg?.type === "queue-flushed") {
    window.dispatchEvent(new CustomEvent("queue_flushed", { detail: msg }));
  }
}

async function flushOfflineQueue() {
  if (typeof window.__flushOfflineQueue === "function") {
    await window.__flushOfflineQueue();
  } else {
    // sem hook instalado ainda — confia no Background Sync (tag chat-sync)
    if (navigator.serviceWorker?.ready && "SyncManager" in window) {
      const reg = await navigator.serviceWorker.ready;
      try {
        await (
          reg as unknown as {
            sync: { register: (t: string) => Promise<unknown> };
          }
        ).sync.register("chat-sync");
      } catch {
        /* sem suporte */
      }
    }
  }
}
