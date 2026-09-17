'use client';

import { useState, useCallback, useRef, useEffect } from 'react';

export interface MobileSession {
  id: string;
  command: string;
  args: string[];
  status: 'pending' | 'running' | 'completed' | 'failed' | 'cancelled' | 'rejected';
  output?: string;
  error?: string;
  exitCode?: number;
  approved?: boolean;
  created_at: string;
}

interface UseMobileAgentOptions {
  wsUrl?: string;
  token?: string;
  onSessionUpdate?: (session: MobileSession) => void;
  onOutput?: (sessionId: string, data: string) => void;
}

export function useMobileAgent(options: UseMobileAgentOptions = {}) {
  const { wsUrl = 'ws://localhost:4500', token, onSessionUpdate, onOutput } = options;
  const [connected, setConnected] = useState(false);
  const [sessions, setSessions] = useState<MobileSession[]>([]);
  const [connecting, setConnecting] = useState(false);
  const wsRef = useRef<WebSocket | null>(null);
  const reconnectRef = useRef<ReturnType<typeof setTimeout>>();

  const connect = useCallback(() => {
    if (wsRef.current?.readyState === WebSocket.OPEN) return;
    setConnecting(true);

    try {
      const url = token ? `${wsUrl}?token=${token}` : wsUrl;
      const ws = new WebSocket(url);

      ws.onopen = () => {
        setConnected(true);
        setConnecting(false);
        // Auth
        if (token) {
          ws.send(JSON.stringify({ type: 'auth', token }));
        }
      };

      ws.onmessage = (event) => {
        try {
          const msg = JSON.parse(event.data);
          if (msg.type === 'session_update') {
            const session = msg.session as MobileSession;
            setSessions((prev) => {
              const idx = prev.findIndex((s) => s.id === session.id);
              if (idx >= 0) {
                const next = [...prev];
                next[idx] = session;
                return next;
              }
              return [session, ...prev];
            });
            onSessionUpdate?.(session);
          }
          if (msg.type === 'session_output') {
            onOutput?.(msg.sessionId, msg.data);
            setSessions((prev) => prev.map((s) =>
              s.id === msg.sessionId
                ? { ...s, output: (s.output ?? '') + msg.data }
                : s
            ));
          }
        } catch { /* ignore parse errors */ }
      };

      ws.onclose = () => {
        setConnected(false);
        setConnecting(false);
        // Auto-reconnect after 3s
        reconnectRef.current = setTimeout(connect, 3000);
      };

      ws.onerror = () => {
        ws.close();
      };

      wsRef.current = ws;
    } catch {
      setConnecting(false);
    }
  }, [wsUrl, token, onSessionUpdate, onOutput]);

  const disconnect = useCallback(() => {
    if (reconnectRef.current) clearTimeout(reconnectRef.current);
    wsRef.current?.close();
    wsRef.current = null;
    setConnected(false);
  }, []);

  useEffect(() => {
    return () => {
      if (reconnectRef.current) clearTimeout(reconnectRef.current);
      wsRef.current?.close();
    };
  }, []);

  const createSession = useCallback((command: string, args: string[] = []) => {
    if (!wsRef.current || wsRef.current.readyState !== WebSocket.OPEN) return null;
    const id = `mobile_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    const session: MobileSession = {
      id,
      command,
      args,
      status: 'pending',
      created_at: new Date().toISOString(),
    };
    wsRef.current.send(JSON.stringify({ type: 'session_create', session }));
    setSessions((prev) => [session, ...prev]);
    return session;
  }, []);

  const approveSession = useCallback((sessionId: string) => {
    if (!wsRef.current || wsRef.current.readyState !== WebSocket.OPEN) return;
    wsRef.current.send(JSON.stringify({ type: 'session_approve', sessionId }));
  }, []);

  const cancelSession = useCallback((sessionId: string) => {
    if (!wsRef.current || wsRef.current.readyState !== WebSocket.OPEN) return;
    wsRef.current.send(JSON.stringify({ type: 'session_cancel', sessionId }));
  }, []);

  const sendCommand = useCallback((type: string, payload: Record<string, unknown> = {}) => {
    if (!wsRef.current || wsRef.current.readyState !== WebSocket.OPEN) return false;
    wsRef.current.send(JSON.stringify({ type, ...payload }));
    return true;
  }, []);

  return {
    connected,
    connecting,
    sessions,
    connect,
    disconnect,
    createSession,
    approveSession,
    cancelSession,
    sendCommand,
  };
}
