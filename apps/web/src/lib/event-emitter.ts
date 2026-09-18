/**
 * FASE 18B — Event Emitter (pub/sub real-time)
 *
 * Sistema de eventos in-memory para atualizações real-time.
 * Pode ser estendido para WebSocket/SSE no futuro.
 */

type EventHandler<T = unknown> = (data: T) => void;

interface EventEntry<T = unknown> {
  handler: EventHandler<T>;
  once: boolean;
}

export class EventEmitter<
  Events extends Record<string, unknown> = Record<string, unknown>,
> {
  private listeners = new Map<string, EventEntry[]>();

  /**
   * Escutar evento
   */
  on<K extends keyof Events>(
    event: K,
    handler: EventHandler<Events[K]>,
  ): () => void {
    const key = event as string;
    const entry: EventEntry<Events[K]> = { handler, once: false };

    if (!this.listeners.has(key)) {
      this.listeners.set(key, []);
    }
    this.listeners.get(key)!.push(entry);

    // Retornar função de cleanup
    return () => {
      const entries = this.listeners.get(key);
      if (entries) {
        const idx = entries.indexOf(entry);
        if (idx >= 0) entries.splice(idx, 1);
      }
    };
  }

  /**
   * Escutar evento uma única vez
   */
  once<K extends keyof Events>(
    event: K,
    handler: EventHandler<Events[K]>,
  ): () => void {
    const key = event as string;
    const entry: EventEntry<Events[K]> = { handler, once: true };

    if (!this.listeners.has(key)) {
      this.listeners.set(key, []);
    }
    this.listeners.get(key)!.push(entry);

    return () => {
      const entries = this.listeners.get(key);
      if (entries) {
        const idx = entries.indexOf(entry);
        if (idx >= 0) entries.splice(idx, 1);
      }
    };
  }

  /**
   * Emitir evento
   */
  emit<K extends keyof Events>(event: K, data: Events[K]): void {
    const key = event as string;
    const entries = this.listeners.get(key);
    if (!entries) return;

    const toRemove: EventEntry[] = [];

    for (const entry of entries) {
      try {
        entry.handler(data);
        if (entry.once) {
          toRemove.push(entry);
        }
      } catch {
        // Handler error — silently ignore
      }
    }

    // Remover once handlers
    for (const entry of toRemove) {
      const idx = entries.indexOf(entry);
      if (idx >= 0) entries.splice(idx, 1);
    }
  }

  /**
   * Remover todos os listeners de um evento
   */
  removeAllListeners(event?: keyof Events): void {
    if (event) {
      this.listeners.delete(event as string);
    } else {
      this.listeners.clear();
    }
  }

  /**
   * Número de listeners
   */
  listenerCount(event: keyof Events): number {
    return this.listeners.get(event as string)?.length ?? 0;
  }
}

// Eventos do sistema
export interface SystemEvents {
  "agent:status": { userId: string; status: string; timestamp: string };
  "agent:message": { userId: string; role: string; content: string };
  "health:update": { service: string; ok: boolean; timestamp: string };
  "plugin:installed": { pluginId: string; userId: string };
  "plugin:uninstalled": { pluginId: string; userId: string };
  "skill:enabled": { skillId: string; userId: string };
  "skill:disabled": { skillId: string; userId: string };
}

// Singleton global
export const systemEvents = new EventEmitter<SystemEvents>();
