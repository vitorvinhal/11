/**
 * Capacitor Bridge — WebSocket bridge for mobile ↔ PC agent communication
 * 
 * This module is injected into the WebView to provide native WebSocket
 * capabilities and direct communication with the PC agent server.
 * 
 * Usage in React Native / Capacitor:
 *   import { CapacitorBridge } from './bridge';
 *   const bridge = new CapacitorBridge('ws://pc-ip:4500');
 *   await bridge.connect();
 *   const session = await bridge.createSession('ls', ['-la']);
 */

export interface BridgeSession {
  id: string;
  command: string;
  args: string[];
  status: 'pending' | 'running' | 'completed' | 'failed' | 'cancelled' | 'rejected';
  output: string;
  error?: string;
  exitCode?: number;
  approved?: boolean;
  created_at: string;
}

export type BridgeEvent =
  | { type: 'connected' }
  | { type: 'disconnected' }
  | { type: 'session_update'; session: BridgeSession }
  | { type: 'session_output'; sessionId: string; data: string }
  | { type: 'error'; message: string };

export class CapacitorBridge {
  private ws: WebSocket | null = null;
  private url: string;
  private token?: string;
  private listeners: Map<string, Set<(event: BridgeEvent) => void>> = new Map();
  private reconnectTimer: ReturnType<typeof setTimeout> | null = null;
  private sessions: Map<string, BridgeSession> = new Map();

  constructor(url: string, token?: string) {
    this.url = url;
    this.token = token;
  }

  on(event: string, callback: (event: BridgeEvent) => void): () => void {
    if (!this.listeners.has(event)) this.listeners.set(event, new Set());
    this.listeners.get(event)!.add(callback);
    return () => this.listeners.get(event)?.delete(callback);
  }

  private emit(event: BridgeEvent) {
    this.listeners.get(event.type)?.forEach((cb) => cb(event));
    this.listeners.get('*')?.forEach((cb) => cb(event));
  }

  async connect(): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        const url = this.token ? `${this.url}?token=${this.token}` : this.url;
        this.ws = new WebSocket(url);

        this.ws.onopen = () => {
          if (this.token) {
            this.ws!.send(JSON.stringify({ type: 'auth', token: this.token }));
          }
          this.emit({ type: 'connected' });
          resolve();
        };

        this.ws.onmessage = (event) => {
          try {
            const msg = JSON.parse(event.data);
            if (msg.type === 'session_update') {
              const session = msg.session as BridgeSession;
              this.sessions.set(session.id, session);
              this.emit({ type: 'session_update', session });
            }
            if (msg.type === 'session_output') {
              const session = this.sessions.get(msg.sessionId);
              if (session) {
                session.output += msg.data;
                this.emit({ type: 'session_output', sessionId: msg.sessionId, data: msg.data });
              }
            }
          } catch { /* ignore */ }
        };

        this.ws.onclose = () => {
          this.emit({ type: 'disconnected' });
          this.scheduleReconnect();
        };

        this.ws.onerror = () => {
          this.emit({ type: 'error', message: 'WebSocket error' });
          reject(new Error('WebSocket connection failed'));
        };
      } catch (err) {
        reject(err);
      }
    });
  }

  private scheduleReconnect() {
    if (this.reconnectTimer) clearTimeout(this.reconnectTimer);
    this.reconnectTimer = setTimeout(() => this.connect().catch(() => {}), 3000);
  }

  disconnect() {
    if (this.reconnectTimer) clearTimeout(this.reconnectTimer);
    this.ws?.close();
    this.ws = null;
  }

  private send(msg: Record<string, unknown>) {
    if (this.ws?.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(msg));
      return true;
    }
    return false;
  }

  async createSession(command: string, args: string[] = []): Promise<BridgeSession> {
    const id = `cap_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    const session: BridgeSession = {
      id,
      command,
      args,
      status: 'pending',
      output: '',
      created_at: new Date().toISOString(),
    };
    this.sessions.set(id, session);
    this.send({ type: 'session_create', session });
    return session;
  }

  approveSession(sessionId: string): boolean {
    return this.send({ type: 'session_approve', sessionId });
  }

  cancelSession(sessionId: string): boolean {
    return this.send({ type: 'session_cancel', sessionId });
  }

  getSessions(): BridgeSession[] {
    return Array.from(this.sessions.values());
  }

  getSession(id: string): BridgeSession | undefined {
    return this.sessions.get(id);
  }

  get connected(): boolean {
    return this.ws?.readyState === WebSocket.OPEN;
  }
}

// Singleton for WebView injection
let instance: CapacitorBridge | null = null;

export function getBridge(url?: string, token?: string): CapacitorBridge {
  if (!instance) {
    instance = new CapacitorBridge(url ?? 'ws://localhost:4500', token);
  }
  return instance;
}
