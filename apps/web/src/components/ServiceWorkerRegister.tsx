"use client";

import { useEffect } from "react";

/**
 * Registra o Service Worker (offline-first + Background Sync)
 * e emite eventos de conectividade globais consumidos pela UI.
 */
export function ServiceWorkerRegister() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    navigator.serviceWorker
      .register("/sw.js")
      .then((reg) => {
        // Checa SW novo já no boot (propaga updates sem esperar 24h/50 tabs).
        reg.update().catch(() => undefined);
        if (typeof reg.active !== "undefined") {
          void reg.update();
        }
      })
      .catch(() => {
        /* best-effort */
      });

    // Aplica SW novo (instalado + claim) recarregando uma única vez.
    let reloaded = false;
    const onControllerChange = () => {
      if (reloaded) return;
      reloaded = true;
      try {
        if (sessionStorage.getItem("sw_controller_reloaded")) return;
        sessionStorage.setItem("sw_controller_reloaded", "1");
      } catch {
        /* ignore */
      }
      window.location.reload();
    };
    navigator.serviceWorker.addEventListener(
      "controllerchange",
      onControllerChange,
    );

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
      navigator.serviceWorker.removeEventListener?.(
        "controllerchange",
        onControllerChange,
      );
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
