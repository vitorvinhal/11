"use client";

/**
 * agent-bus — pub/sub leve entre componentes (device-agent → chat).
 * Permite que um job de dispositivo aprovado+executado "continue" a conversa
 * no ChatPanel com o resultado em mãos.
 */

export interface AgentJobResumeEvent {
  job: {
    id: string;
    name: string;
    args: Record<string, unknown>;
    result: unknown;
    status: string;
  };
  deviceId: string;
}

type Listener<T> = (payload: T) => void;

const listeners = new Map<string, Set<Listener<any>>>();

export function onAgentEvent<T>(name: string, cb: Listener<T>): () => void {
  if (!listeners.has(name)) listeners.set(name, new Set());
  const set = listeners.get(name)!;
  set.add(cb);
  return () => {
    set.delete(cb);
  };
}

export function emitAgentEvent<T>(name: string, payload: T): void {
  listeners.get(name)?.forEach((cb) => {
    try {
      cb(payload);
    } catch {
      /* listener ignorado */
    }
  });
}
