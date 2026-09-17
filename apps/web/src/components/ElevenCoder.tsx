'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import {
  Terminal as TerminalIcon,
  Wifi,
  WifiOff,
  Trash2,
  RotateCw,
  Copy,
  Clipboard,
  Plus,
  X,
  Zap,
  Activity,
} from 'lucide-react';
import { useAuth } from '../lib/auth';

const OLED_BG = '#05050A';
const CYAN = '#00e5ff';
const FONT = 'JetBrains Mono, ui-monospace, SFMono-Regular, monospace';

interface TerminalSession {
  id: string;
  name: string;
  connected: boolean;
  processName: string;
  cwd: string;
}

let ioModule: any = null;
let TerminalClass: any = null;
let FitAddonClass: any = null;
let WebLinksAddonClass: any = null;

async function loadDeps() {
  if (!ioModule) {
    ioModule = await import('socket.io-client');
  }
  if (!TerminalClass) {
    const xterm = await import('@xterm/xterm');
    TerminalClass = xterm.Terminal;
    const fit = await import('@xterm/addon-fit');
    FitAddonClass = fit.FitAddon;
    try {
      const wl = await import('@xterm/addon-web-links');
      WebLinksAddonClass = wl.WebLinksAddon;
    } catch { /* optional */ }
  }
}

function uid() { return Math.random().toString(36).slice(2, 9) + Date.now().toString(36); }

export default function ElevenCoder() {
  const { getAccessToken } = useAuth();
  const hostRef = useRef<HTMLDivElement>(null);
  const socketRef = useRef<any>(null);
  const terminalsRef = useRef<Map<string, any>>(new Map());
  const fitAddonsRef = useRef<Map<string, any>>(new Map());
  const containersRef = useRef<Map<string, HTMLElement>>(new Map());

  const [sessions, setSessions] = useState<TerminalSession[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [connectionStatus, setConnectionStatus] = useState<'connecting' | 'connected' | 'disconnected'>('disconnected');
  const [, setLoading] = useState(true);
  const activeRef = useRef<string>('');
  const sessionsRef = useRef<TerminalSession[]>([]);

  useEffect(() => { activeRef.current = activeId; }, [activeId]);
  useEffect(() => { sessionsRef.current = sessions; }, [sessions]);

  const connectSocket = useCallback(async () => {
    if (socketRef.current?.connected) return;
    await loadDeps();
    const token = await getAccessToken();
    if (!token) return;

    const apiUrl = process.env.NEXT_PUBLIC_API_URL || window.location.origin;
    const socket = ioModule.io(apiUrl, {
      path: '/api/socketio',
      auth: { token },
      query: { token },
      transports: ['websocket', 'polling'],
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionAttempts: 10,
    });

    socket.on('connect', () => {
      setConnectionStatus('connected');
      setLoading(false);
    });
    socket.on('disconnect', () => setConnectionStatus('disconnected'));
    socket.on('connect_error', () => setConnectionStatus('disconnected'));

    socket.on('connected', (_data: { userId: string }) => {
      setConnectionStatus('connected');
    });

    socket.on('session-created', (data: { sessionId: string; cwd: string; command: string }) => {
      setSessions((prev) => prev.map((s) =>
        s.id === data.sessionId ? { ...s, connected: true, cwd: data.cwd, processName: data.command } : s
      ));
    });

    socket.on('output', (data: { sessionId: string; data: string }) => {
      const term = terminalsRef.current.get(data.sessionId);
      if (term) term.write(data.data);
    });

    socket.on('session-exit', (data: { sessionId: string; exitCode: number }) => {
      const term = terminalsRef.current.get(data.sessionId);
      if (term) {
        term.write(`\r\n\x1b[38;5;208m[Processo encerrado: code=${data.exitCode}]\x1b[0m\r\n`);
      }
      setSessions((prev) => prev.map((s) =>
        s.id === data.sessionId ? { ...s, connected: false } : s
      ));
    });

    socket.on('error', (data: { message: string }) => {
      console.error('[ElevenCoder] WS error:', data.message);
    });

    socketRef.current = socket;
  }, [getAccessToken]);

  useEffect(() => {
    void connectSocket();
    return () => {
      socketRef.current?.disconnect();
      const terms = terminalsRef.current;
      terms.forEach((t) => { try { t.dispose(); } catch { /* */ } });
      terms.clear();
    };
  }, [connectSocket]);

  useEffect(() => {
    if (!hostRef.current || !activeId) return;
    const host = hostRef.current;

    const setup = async () => {
      await loadDeps();

      if (!terminalsRef.current.has(activeId)) {
        const container = document.createElement('div');
        container.style.position = 'absolute';
        container.style.inset = '0';
        container.style.display = 'none';
        host.appendChild(container);
        containersRef.current.set(activeId, container);

        const term = new TerminalClass({
          cursorBlink: true,
          cursorStyle: 'bar',
          fontFamily: FONT,
          fontSize: 13,
          lineHeight: 1.3,
          scrollback: 10000,
          allowProposedApi: true,
          theme: {
            background: OLED_BG,
            foreground: '#e6e6e6',
            cursor: CYAN,
            cursorAccent: OLED_BG,
            selectionBackground: 'rgba(0,229,255,0.25)',
            selectionForeground: '#ffffff',
            black: '#1b1e26',
            red: '#f87171',
            green: '#34d399',
            yellow: '#fbbf24',
            blue: '#60a5fa',
            magenta: '#c084fc',
            cyan: '#22d3ee',
            white: '#e6e6e6',
            brightBlack: '#6b7280',
            brightRed: '#fb7185',
            brightGreen: '#4ade80',
            brightYellow: '#fcd34d',
            brightBlue: '#93c5fd',
            brightMagenta: '#d8b4fe',
            brightCyan: '#67e8f9',
            brightWhite: '#ffffff',
          },
        });

        const fitAddon = new FitAddonClass();
        term.loadAddon(fitAddon);
        try { if (WebLinksAddonClass) term.loadAddon(new WebLinksAddonClass()); } catch { /* */ }
        term.open(container);
        terminalsRef.current.set(activeId, term);
        fitAddonsRef.current.set(activeId, fitAddon);

        setTimeout(() => {
          try {
            const dims = fitAddon.proposeDimensions();
            if (dims) {
              term.resize(dims.cols, dims.rows);
              socketRef.current?.emit('create-session', {
                sessionId: activeId,
                cols: dims.cols,
                rows: dims.rows,
              });
            }
          } catch { /* */ }
        }, 50);

        term.onData((data: string) => {
          if (!socketRef.current?.connected) return;
          socketRef.current.emit('input', { sessionId: activeId, data });
        });

        term.onResize(({ cols, rows }: { cols: number; rows: number }) => {
          if (!socketRef.current?.connected) return;
          socketRef.current.emit('resize', { sessionId: activeId, cols, rows });
        });

        term.write('\x1b[38;5;80m');
        term.write('\r\n');
        term.write('  ╔══════════════════════════════════════╗\r\n');
        term.write('  ║                                      ║\r\n');
        term.write('  ║    \x1b[1;38;5;114m⚡ Eleven Coder\x1b[0m\x1b[38;5;80m              ║\r\n');
        term.write('  ║    Terminal interativo PTY            ║\r\n');
        term.write('  ║                                      ║\r\n');
        term.write('  ╚══════════════════════════════════════╝\r\n');
        term.write('\x1b[0m\r\n');
      }

      // Show active, hide others
      terminalsRef.current.forEach((_, id) => {
        const c = containersRef.current.get(id);
        if (c) c.style.display = id === activeId ? '' : 'none';
      });

      setTimeout(() => {
        const fit = fitAddonsRef.current.get(activeId);
        const term = terminalsRef.current.get(activeId);
        if (fit && term) {
          try {
            fit.fit();
            const dims = fit.proposeDimensions();
            if (dims) term.resize(dims.cols, dims.rows);
          } catch { /* */ }
        }
        try { terminalsRef.current.get(activeId)?.focus(); } catch { /* */ }
      }, 30);
    };

    void setup();
  }, [activeId]);

  useEffect(() => {
    const onResize = () => {
      const fit = fitAddonsRef.current.get(activeRef.current);
      const term = terminalsRef.current.get(activeRef.current);
      if (fit && term) {
        try {
          fit.fit();
          const dims = fit.proposeDimensions();
          if (dims) term.resize(dims.cols, dims.rows);
        } catch { /* */ }
      }
    };
    window.addEventListener('resize', onResize);
    const ro = new ResizeObserver(onResize);
    if (hostRef.current) ro.observe(hostRef.current);
    return () => {
      window.removeEventListener('resize', onResize);
      ro.disconnect();
    };
  }, []);

  const createSession = useCallback(() => {
    const id = uid();
    const num = sessionsRef.current.length + 1;
    const newSession: TerminalSession = {
      id, name: `Coder ${num}`, connected: false,
      processName: 'bash', cwd: '~',
    };
    setSessions((prev) => [...prev, newSession]);
    setActiveId(id);
  }, []);

  const closeSession = useCallback((id: string) => {
    socketRef.current?.emit('kill-session', { sessionId: id });
    terminalsRef.current.get(id)?.dispose();
    terminalsRef.current.delete(id);
    fitAddonsRef.current.delete(id);
    containersRef.current.get(id)?.remove();
    containersRef.current.delete(id);

    setSessions((prev) => {
      const next = prev.filter((s) => s.id !== id);
      if (next.length === 0) {
        const s: TerminalSession = { id: uid(), name: 'Coder 1', connected: false, processName: 'bash', cwd: '~' };
        setActiveId(s.id);
        return [s];
      }
      if (activeRef.current === id) setActiveId(next[next.length - 1].id);
      return next;
    });
  }, []);

  const clearTerminal = useCallback(() => {
    const term = terminalsRef.current.get(activeId);
    if (term) {
      term.clear();
      term.write('\x1b[2J\x1b[H');
    }
  }, [activeId]);

  const reconnect = useCallback(() => {
    const id = activeId;
    socketRef.current?.emit('kill-session', { sessionId: id });
    terminalsRef.current.get(id)?.dispose();
    terminalsRef.current.delete(id);
    fitAddonsRef.current.delete(id);
    const container = containersRef.current.get(id);
    if (container) container.innerHTML = '';
    setActiveId('');
    setTimeout(() => setActiveId(id), 50);
  }, [activeId]);

  const copyBuffer = useCallback(async () => {
    const term = terminalsRef.current.get(activeId);
    if (!term) return;
    const selection = term.getSelection();
    if (selection) {
      try { await navigator.clipboard.writeText(selection); } catch { /* */ }
    }
  }, [activeId]);

  const pasteBuffer = useCallback(async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text && socketRef.current?.connected) {
        socketRef.current.emit('input', { sessionId: activeId, data: text });
      }
    } catch { /* */ }
  }, [activeId]);

  const activeSession = sessions.find((s) => s.id === activeId);

  return (
    <div className="flex h-full flex-col" style={{ background: OLED_BG }}>
      {/* IDE Header */}
      <div
        className="flex items-center gap-2 px-3 py-2"
        style={{ borderBottom: '1px solid #ffffff10', background: '#ffffff04' }}
      >
        {/* Connection Status */}
        <div className="flex items-center gap-1.5 rounded-lg px-2 py-1" style={{ background: '#ffffff08' }}>
          {connectionStatus === 'connected' ? (
            <Wifi className="h-3.5 w-3.5" style={{ color: '#34d399' }} />
          ) : connectionStatus === 'connecting' ? (
            <RotateCw className="h-3.5 w-3.5 animate-spin" style={{ color: '#fbbf24' }} />
          ) : (
            <WifiOff className="h-3.5 w-3.5" style={{ color: '#f87171' }} />
          )}
          <span className="text-[10px] font-medium" style={{ color: '#8f8f8f', fontFamily: FONT }}>
            {connectionStatus === 'connected' ? 'Conectado' : connectionStatus === 'connecting' ? 'Conectando...' : 'Desconectado'}
          </span>
        </div>

        {/* Active Process */}
        {activeSession && (
          <div className="flex items-center gap-1.5 rounded-lg px-2 py-1" style={{ background: '#ffffff08' }}>
            <Activity className="h-3 w-3" style={{ color: activeSession.connected ? CYAN : '#f87171' }} />
            <span className="text-[10px]" style={{ color: '#b4b4b4', fontFamily: FONT }}>
              {activeSession.processName}
            </span>
          </div>
        )}

        {/* CWD */}
        {activeSession && activeSession.cwd && (
          <div className="hidden sm:flex items-center gap-1.5 rounded-lg px-2 py-1 truncate max-w-[200px]" style={{ background: '#ffffff08' }}>
            <span className="text-[10px] truncate" style={{ color: '#8f8f8f', fontFamily: FONT }}>
              {activeSession.cwd}
            </span>
          </div>
        )}

        <div className="flex-1" />

        {/* Action Buttons */}
        <div className="flex items-center gap-1">
          <button onClick={copyBuffer} title="Copiar selecao"
            className="h-7 w-7 grid place-items-center rounded-lg transition" style={{ background: '#ffffff08' }}>
            <Copy className="h-3.5 w-3.5" style={{ color: '#8f8f8f' }} />
          </button>
          <button onClick={pasteBuffer} title="Colar"
            className="h-7 w-7 grid place-items-center rounded-lg transition" style={{ background: '#ffffff08' }}>
            <Clipboard className="h-3.5 w-3.5" style={{ color: '#8f8f8f' }} />
          </button>
          <button onClick={clearTerminal} title="Limpar"
            className="h-7 w-7 grid place-items-center rounded-lg transition" style={{ background: '#ffffff08' }}>
            <Trash2 className="h-3.5 w-3.5" style={{ color: '#8f8f8f' }} />
          </button>
          <button onClick={reconnect} title="Reconectar"
            className="h-7 w-7 grid place-items-center rounded-lg transition" style={{ background: '#ffffff08' }}>
            <RotateCw className="h-3.5 w-3.5" style={{ color: '#8f8f8f' }} />
          </button>
        </div>
      </div>

      {/* Tab Bar */}
      <div className="flex items-center gap-0.5 px-2 py-1" style={{ borderBottom: '1px solid #ffffff08' }}>
        {sessions.map((s) => (
          <button key={s.id} onClick={() => setActiveId(s.id)}
            className="group flex items-center gap-1.5 rounded-t-md px-3 py-1 text-[11px] font-medium transition"
            style={{
              background: activeId === s.id ? '#ffffff0a' : 'transparent',
              color: activeId === s.id ? CYAN : '#8f8f8f',
              fontFamily: FONT,
            }}>
            <TerminalIcon className="h-3 w-3" />
            <span>{s.name}</span>
            <span className={`h-1.5 w-1.5 rounded-full ${s.connected ? '' : ''}`}
              style={{ backgroundColor: s.connected ? '#34d399' : '#f87171' }} />
            {sessions.length > 1 && (
              <span onClick={(e) => { e.stopPropagation(); closeSession(s.id); }}
                className="opacity-0 group-hover:opacity-100 transition ml-1"
                style={{ color: '#f87171' }}>
                <X className="h-3 w-3" />
              </span>
            )}
          </button>
        ))}
        <button onClick={createSession}
          className="ml-1 grid h-6 w-6 place-items-center rounded-md transition"
          style={{ color: '#8f8f8f' }}
          title="Novo terminal">
          <Plus className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Terminal Container */}
      <div ref={hostRef} className="min-h-0 flex-1 overflow-hidden relative" />

      {/* HUD Footer */}
      <div className="flex items-center justify-between px-3 py-1.5"
        style={{ borderTop: '1px solid #ffffff08', background: '#ffffff02' }}>
        <div className="flex items-center gap-3 text-[10px]" style={{ color: '#8f8f8f', fontFamily: FONT }}>
          <span className="flex items-center gap-1">
            <Zap className="h-3 w-3" style={{ color: CYAN }} />
            PTY
          </span>
          <span>{sessions.length} sessao{sessions.length !== 1 ? 'es' : ''}</span>
        </div>
        <div className="text-[10px]" style={{ color: '#8f8f8f', fontFamily: FONT }}>
          Eleven Coder v1.0
        </div>
      </div>
    </div>
  );
}
