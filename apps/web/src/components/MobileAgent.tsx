'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { Wifi, WifiOff, Terminal, Play, Square, CheckCircle, XCircle, Clock, Loader2 } from 'lucide-react';
import { useMobileAgent, MobileSession } from '../lib/useMobileAgent';

function statusColor(status: string) {
  if (status === 'completed') return 'text-emerald-400';
  if (status === 'failed' || status === 'rejected') return 'text-red-400';
  if (status === 'running') return 'text-blue-400';
  if (status === 'pending') return 'text-yellow-400';
  return 'text-muted-foreground';
}

function statusIcon(status: string) {
  if (status === 'completed') return CheckCircle;
  if (status === 'failed' || status === 'rejected') return XCircle;
  if (status === 'running') return Loader2;
  if (status === 'pending') return Clock;
  return Square;
}

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const secs = Math.floor(diff / 1000);
  if (secs < 60) return `${secs}s`;
  const mins = Math.floor(secs / 60);
  if (mins < 60) return `${mins}m`;
  return `${Math.floor(mins / 60)}h`;
}

export function MobileAgent() {
  const [wsUrl, setWsUrl] = useState('ws://localhost:4500');
  const { connected, connecting, sessions, connect, disconnect, createSession, approveSession, cancelSession } = useMobileAgent({ wsUrl });
  const [command, setCommand] = useState('');
  const [args, setArgs] = useState('');
  const [selectedSession, setSelectedSession] = useState<MobileSession | null>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [selectedSession?.output]);

  const handleCreate = useCallback(() => {
    if (!command.trim()) return;
    const argsList = args.trim() ? args.split(/\s+/) : [];
    const session = createSession(command.trim(), argsList);
    if (session) {
      setSelectedSession(session);
      setCommand('');
      setArgs('');
    }
  }, [command, args, createSession]);

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="px-4 pt-4 pb-3 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
            <Terminal className="h-4 w-4 text-white" />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Agente PC</h3>
            <p className="text-[10px] text-muted-foreground">
              {connected ? 'Conectado' : connecting ? 'Conectando...' : 'Desconectado'}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {connected ? (
            <button onClick={disconnect}
              className="flex items-center gap-1.5 rounded-lg bg-red-500/10 px-2.5 py-1.5 text-[11px] text-red-400 hover:bg-red-500/20 transition">
              <WifiOff className="h-3 w-3" /> Desconectar
            </button>
          ) : (
            <button onClick={connect} disabled={connecting}
              className="flex items-center gap-1.5 rounded-lg bg-emerald-500/10 px-2.5 py-1.5 text-[11px] text-emerald-400 hover:bg-emerald-500/20 transition disabled:opacity-50">
              {connecting ? <Loader2 className="h-3 w-3 animate-spin" /> : <Wifi className="h-3 w-3" />}
              Conectar
            </button>
          )}
        </div>
      </div>

      {/* Connection config */}
      {!connected && (
        <div className="px-4 py-3 border-b border-border">
          <label className="text-[10px] text-muted-foreground mb-1 block">WebSocket URL</label>
          <div className="flex gap-2">
            <input value={wsUrl} onChange={(e) => setWsUrl(e.target.value)}
              className="flex-1 rounded-lg bg-white/[0.05] px-3 py-2 text-xs text-text-primary outline-none"
              placeholder="ws://localhost:4500" />
          </div>
        </div>
      )}

      {/* Command input */}
      {connected && (
        <div className="px-4 py-3 border-b border-border">
          <div className="flex gap-2">
            <input value={command} onChange={(e) => setCommand(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleCreate()}
              className="flex-1 rounded-lg bg-white/[0.05] px-3 py-2 text-xs text-text-primary outline-none"
              placeholder="Comando (ex: ls, git status, npm run dev)" />
            <input value={args} onChange={(e) => setArgs(e.target.value)}
              className="w-32 rounded-lg bg-white/[0.05] px-3 py-2 text-xs text-text-primary outline-none"
              placeholder="Args" />
            <button onClick={handleCreate}
              className="rounded-lg bg-primary/20 px-3 py-2 text-xs text-primary hover:bg-primary/30 transition">
              <Play className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Sessions list */}
      <div className="flex-1 overflow-y-auto">
        {sessions.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
            <Terminal className="h-8 w-8 mb-2 opacity-30" />
            <span className="text-xs">Nenhuma sessão</span>
          </div>
        ) : (
          <div className="divide-y divide-border">
            {sessions.map((session) => {
              const StatusIcon = statusIcon(session.status);
              return (
                <div key={session.id}
                  onClick={() => setSelectedSession(session)}
                  className={`px-4 py-3 cursor-pointer hover:bg-white/[0.02] transition ${
                    selectedSession?.id === session.id ? 'bg-white/[0.04]' : ''
                  }`}>
                  <div className="flex items-center gap-2">
                    <StatusIcon className={`h-3.5 w-3.5 ${statusColor(session.status)} ${session.status === 'running' ? 'animate-spin' : ''}`} />
                    <span className="text-xs font-mono text-text-primary truncate flex-1">
                      {session.command} {session.args.join(' ')}
                    </span>
                    <span className="text-[10px] text-muted-foreground">{timeAgo(session.created_at)}</span>
                  </div>
                  {session.output && (
                    <div className="mt-1.5 text-[10px] text-muted-foreground font-mono truncate">
                      {session.output.split('\n').slice(-1)[0]?.slice(0, 80)}
                    </div>
                  )}
                  {session.status === 'pending' && (
                    <div className="mt-2 flex gap-1.5">
                      <button onClick={(e) => { e.stopPropagation(); approveSession(session.id); }}
                        className="rounded-md bg-emerald-500/10 px-2 py-1 text-[10px] text-emerald-400 hover:bg-emerald-500/20 transition">
                        Aprovar
                      </button>
                      <button onClick={(e) => { e.stopPropagation(); cancelSession(session.id); }}
                        className="rounded-md bg-red-500/10 px-2 py-1 text-[10px] text-red-400 hover:bg-red-500/20 transition">
                        Cancelar
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Output panel */}
      {selectedSession && (
        <div className="border-t border-border">
          <div className="flex items-center justify-between px-4 py-2">
            <span className="text-[10px] text-muted-foreground font-mono">
              {selectedSession.command} {selectedSession.args.join(' ')}
            </span>
            <button onClick={() => setSelectedSession(null)} className="text-muted-foreground hover:text-foreground text-xs">✕</button>
          </div>
          <div ref={outputRef} className="h-40 overflow-y-auto bg-black/40 px-4 py-2 font-mono text-[11px] text-white/80 whitespace-pre-wrap">
            {selectedSession.output ?? (selectedSession.status === 'running' ? 'Executando...' : 'Sem saída')}
            {selectedSession.error && <div className="text-red-400 mt-1">{selectedSession.error}</div>}
          </div>
        </div>
      )}
    </div>
  );
}
