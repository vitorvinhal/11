"use client";

/**
 * Fila offline — mensagens enviadas sem conexão ficam com status pending_sync
 * e são reenviadas automaticamente ao detectar retorno da rede (Background
 * Sync ou flush manual via fetch).
 */

export function isNetworkError(err: unknown): boolean {
  return (
    err instanceof TypeError &&
    /network|load failed|failed to fetch/i.test(err.message)
  );
}

/**
 * Enfileira um chat offline no Service Worker (IndexedDB).
 * Retorna true se enfileirado; false se sem SW.
 */
export async function enqueueChatOffline(
  payload: unknown,
  headers?: Record<string, string>,
): Promise<boolean> {
  if (!("serviceWorker" in navigator)) return false;
  const reg = await navigator.serviceWorker.getRegistration().catch(() => null);
  if (!reg?.active) return false;
  reg.active.postMessage({ type: "queue-chat", payload, headers });
  return true;
}

/**
 * Registra a tag de Background Sync que o SW usa para reenviar a fila.
 */
export async function registerChatSync(): Promise<void> {
  if (!("serviceWorker" in navigator) || !("SyncManager" in window)) return;
  const reg = await navigator.serviceWorker.ready;
  try {
    await (
      reg as unknown as { sync: { register: (t: string) => Promise<unknown> } }
    ).sync.register("chat-sync");
  } catch {
    /* sem suporte — ignora */
  }
}

/**
 * Instala o hook de flush exposto para o SW (postMessage queue-flushed).
 */
export function setupOfflineFlushHook(): () => void {
  window.__flushOfflineQueue = async () => {
    await registerChatSync();
  };
  return () => {
    delete (window as unknown as { __flushOfflineQueue?: () => Promise<void> })
      .__flushOfflineQueue;
  };
}
