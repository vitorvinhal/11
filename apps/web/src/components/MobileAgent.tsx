"use client";

import { useCallback, useEffect, useState } from "react";
import {
  Terminal,
  Play,
  Square,
  Loader2,
  CheckCircle,
  Clock,
  ShieldCheck,
  ShieldX,
  ShieldAlert,
  RefreshCw,
  Zap,
  Send,
  CheckCheck,
  XCircle,
  AlertTriangle,
} from "lucide-react";
import { useDeviceAgent, DeviceJobView } from "../lib/useDeviceAgent";
import { useAuth } from "../lib/auth";
import { getDeviceContext } from "../lib/device-client";

// ── Tool descriptions (human-readable) ──────────────────────────────────────

const TOOL_DESCRIPTIONS: Record<string, string> = {
  "device.exec": "Executa comando no terminal do dispositivo",
  "device.read_file": "Lê conteúdo de um arquivo",
  "device.write_file": "Escreve conteúdo em um arquivo",
  "device.list_dir": "Lista arquivos de um diretório",
  "device.delete_file": "Exclui um arquivo do dispositivo",
  "device.move_file": "Move ou renomeia um arquivo",
  "device.copy_file": "Copia um arquivo",
  "device.search_files": "Busca arquivos por nome/conteúdo",
  "device.get_system_info": "Obtém informações do sistema",
  "device.screenshot": "Captura tela do dispositivo",
  "device.list_apps": "Lista apps instalados",
  "device.open_app": "Abre um aplicativo",
  "device.close_app": "Fecha um aplicativo",
  "device.media_play": "Reproduz mídia (áudio/vídeo)",
  "device.media_pause": "Pausa mídia em reprodução",
  "device.media_stop": "Para reprodução de mídia",
  "device.volume_set": "Ajusta volume do sistema",
  "device.volume_up": "Aumenta volume",
  "device.volume_down": "Diminui volume",
  "device.brightness": "Ajusta brilho da tela",
  "device.clipboard_read": "Lê conteúdo da área de transferência",
  "device.clipboard_write": "Escreve na área de transferência",
  "device.notification": "Exibe notificação no dispositivo",
  "device.vibrate": "Vibra o dispositivo",
};

function getToolDescription(
  name: string,
  args: Record<string, unknown>,
): string {
  const base = TOOL_DESCRIPTIONS[name];
  if (!base) return name;
  // Enriquece com detalhes dos args
  if (args.command) return `${base}: ${args.command}`;
  if (args.path) return `${base}: ${args.path}`;
  if (args.file_path) return `${base}: ${args.file_path}`;
  return base;
}

// ── Risk badge ──────────────────────────────────────────────────────────────

function RiskBadge({ risk }: { risk: string | null }) {
  if (!risk || risk === "SAFE") {
    return (
      <span className="inline-flex items-center gap-0.5 rounded bg-emerald-500/15 px-1.5 py-0.5 text-[9px] font-semibold text-emerald-400">
        <ShieldCheck className="h-2.5 w-2.5" /> SEGURO
      </span>
    );
  }
  if (risk === "REVERSIBLE") {
    return (
      <span className="inline-flex items-center gap-0.5 rounded bg-yellow-500/15 px-1.5 py-0.5 text-[9px] font-semibold text-yellow-400">
        <AlertTriangle className="h-2.5 w-2.5" /> REVERSÍVEL
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-0.5 rounded bg-red-500/15 px-1.5 py-0.5 text-[9px] font-semibold text-red-400">
      <ShieldAlert className="h-2.5 w-2.5" /> DESTRUTIVO
    </span>
  );
}

// ── Helpers ─────────────────────────────────────────────────────────────────

function statusColor(status: string) {
  if (status === "completed") return "text-emerald-400";
  if (status === "failed" || status === "rejected") return "text-red-400";
  if (status === "running") return "text-blue-400";
  if (status === "awaiting_approval") return "text-yellow-400";
  return "text-text-dim";
}

function timeAgo(dateStr?: string): string {
  if (!dateStr) return "—";
  const diff = Date.now() - new Date(dateStr).getTime();
  const secs = Math.floor(diff / 1000);
  if (secs < 60) return `${secs}s`;
  const mins = Math.floor(secs / 60);
  if (mins < 60) return `${mins}m`;
  return `${Math.floor(mins / 60)}h`;
}

function timeUntilExpiry(expiresAt?: string | null): string | null {
  if (!expiresAt) return null;
  const diff = new Date(expiresAt).getTime() - Date.now();
  if (diff <= 0) return "expirado";
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "<1min";
  if (mins < 60) return `${mins}min`;
  return `${Math.floor(mins / 60)}h`;
}

// ── Component ───────────────────────────────────────────────────────────────

export function MobileAgent() {
  const agent = useDeviceAgent();
  const { getAccessToken } = useAuth();
  const [history, setHistory] = useState<DeviceJobView[]>([]);
  const [command, setCommand] = useState("");
  const [selectedApprovals, setSelectedApprovals] = useState<Set<string>>(
    new Set(),
  );
  const ctx = getDeviceContext();

  const fetchHistory = useCallback(async () => {
    const token = await getAccessToken();
    if (!token) return;
    try {
      const res = await fetch(
        `/api/devices/jobs?deviceId=${ctx.deviceId ?? ""}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      if (res.ok) {
        const data = (await res.json()) as { jobs: DeviceJobView[] };
        setHistory(data.jobs);
      }
    } catch {
      /* ignore */
    }
  }, [getAccessToken, ctx.deviceId]);

  useEffect(() => {
    fetchHistory();
    const t = setInterval(fetchHistory, 5000);
    return () => clearInterval(t);
  }, [fetchHistory]);

  const running = agent.status === "polling" || agent.status === "running";

  const sendCommand = useCallback(async () => {
    const token = await getAccessToken();
    if (!token || !ctx.deviceId || !command.trim()) return;
    try {
      await fetch("/api/devices/jobs", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          deviceId: ctx.deviceId,
          name: "device.exec",
          args: { command: command.trim() },
        }),
      });
      setCommand("");
      fetchHistory();
    } catch {
      /* ignore */
    }
  }, [command, ctx.deviceId, getAccessToken, fetchHistory]);

  // ── Bulk approval handlers ──

  const toggleSelectApproval = useCallback((id: string) => {
    setSelectedApprovals((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const selectAllApprovals = useCallback(() => {
    setSelectedApprovals(new Set(agent.pendingApprovals.map((j) => j.id)));
  }, [agent.pendingApprovals]);

  const clearSelection = useCallback(() => {
    setSelectedApprovals(new Set());
  }, []);

  const bulkApprove = useCallback(async () => {
    const token = await getAccessToken();
    if (!token || selectedApprovals.size === 0) return;
    const ids = Array.from(selectedApprovals);
    await Promise.all(ids.map((id) => agent.approveJob(id, true)));
    setSelectedApprovals(new Set());
    fetchHistory();
  }, [selectedApprovals, agent, getAccessToken, fetchHistory]);

  const bulkReject = useCallback(async () => {
    const token = await getAccessToken();
    if (!token || selectedApprovals.size === 0) return;
    const ids = Array.from(selectedApprovals);
    await Promise.all(ids.map((id) => agent.approveJob(id, false)));
    setSelectedApprovals(new Set());
    fetchHistory();
  }, [selectedApprovals, agent, getAccessToken, fetchHistory]);

  return (
    <div className="flex h-full flex-col">
      {/* Header */}
      <div className="border-b border-white/5 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500">
              <Terminal className="h-4 w-4 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-text-primary">
                Agente PC
              </h3>
              <p className="text-[10px] text-text-dim">
                {ctx.deviceId ? ctx.deviceId.slice(0, 8) : "não pareado"} ·{" "}
                {agent.localPaired ? (
                  <span className="text-emerald-400">servidor local OK</span>
                ) : (
                  <span
                    className={
                      running ? "text-emerald-400" : "text-text-dim/60"
                    }
                  >
                    {running ? "ativo" : "parado"}
                  </span>
                )}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => {
                void agent.refreshPending();
                fetchHistory();
              }}
              className="rounded-lg bg-white/5 p-1.5 text-text-dim hover:bg-white/10 hover:text-text-primary transition"
            >
              <RefreshCw className="h-3.5 w-3.5" />
            </button>
            {running ? (
              <button
                onClick={agent.stop}
                className="rounded-lg bg-red-500/10 p-1.5 text-red-400 hover:bg-red-500/20 transition"
              >
                <Square className="h-3.5 w-3.5" />
              </button>
            ) : (
              <button
                onClick={agent.start}
                className="rounded-lg bg-emerald-500/15 p-1.5 text-emerald-400 hover:bg-emerald-500/25 transition"
              >
                <Play className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Comando rápido */}
      <div className="border-b border-white/5 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <div className="flex min-w-0 flex-1 items-center rounded-lg bg-white/5 border border-white/10 px-3 py-1.5">
            <span className="mr-1.5 font-mono text-[11px] text-emerald-400">
              $
            </span>
            <input
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendCommand()}
              placeholder="Executar comando no PC (device.exec)…"
              className="min-w-0 flex-1 bg-transparent font-mono text-[12px] text-text-primary outline-none placeholder:text-text-dim/40"
            />
          </div>
          <button
            onClick={sendCommand}
            disabled={!command.trim()}
            className="rounded-lg bg-emerald-500/15 p-1.5 text-emerald-400 hover:bg-emerald-500/25 transition disabled:opacity-30"
          >
            <Send className="h-3.5 w-3.5" />
          </button>
        </div>
        <p className="mt-1 text-[10px] text-text-dim/50">
          A IA 11 também executa arquivos, media, apps, configurações e captura
          de tela aqui.
        </p>
      </div>

      <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto p-3">
        {/* Estado do agente */}
        {agent.status === "error" && agent.lastError && (
          <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-2.5 text-[11px] text-red-400">
            <p className="font-semibold">Erro</p>
            <p className="mt-0.5 break-words font-mono">{agent.lastError}</p>
          </div>
        )}

        {/* Job em execução */}
        {agent.currentJob && (
          <div className="rounded-lg border border-white/5 bg-white/[0.03] p-2.5">
            <div className="flex items-center gap-2">
              <Loader2 className="h-3.5 w-3.5 animate-spin text-blue-400" />
              <code className="font-mono text-[11px] text-text-primary">
                {agent.currentJob.name}
              </code>
            </div>
            <pre className="mt-2 overflow-x-auto rounded bg-black/30 p-2 font-mono text-[10px] text-text-dim">
              {JSON.stringify(agent.currentJob.args ?? {}, null, 2)}
            </pre>
          </div>
        )}

        {/* Último resultado */}
        {agent.lastResult != null && (
          <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-2.5">
            <p className="mb-1 flex items-center gap-1.5 text-[10px] font-semibold text-emerald-400">
              <CheckCircle className="h-3 w-3" /> Resultado
            </p>
            <pre className="max-h-48 overflow-auto whitespace-pre-wrap font-mono text-[10px] text-text-dim">
              {typeof agent.lastResult === "string"
                ? agent.lastResult
                : JSON.stringify(agent.lastResult, null, 2)}
            </pre>
          </div>
        )}

        {/* ── Aprovações pendentes (central de aprovação) ── */}
        <SectionTitle>
          <span className="flex items-center gap-2">
            Aprovações ({agent.pendingApprovals.length})
            {agent.pendingApprovals.length > 1 && (
              <span className="flex gap-1">
                <button
                  onClick={selectAllApprovals}
                  className="rounded bg-white/5 px-1.5 py-0.5 text-[9px] text-text-dim hover:bg-white/10"
                >
                  Todas
                </button>
                {selectedApprovals.size > 0 && (
                  <>
                    <button
                      onClick={bulkApprove}
                      className="rounded bg-emerald-500/15 px-1.5 py-0.5 text-[9px] text-emerald-400 hover:bg-emerald-500/25"
                    >
                      <CheckCheck className="inline h-2.5 w-2.5" /> Aprovar
                    </button>
                    <button
                      onClick={bulkReject}
                      className="rounded bg-red-500/10 px-1.5 py-0.5 text-[9px] text-red-400 hover:bg-red-500/20"
                    >
                      <XCircle className="inline h-2.5 w-2.5" /> Rejeitar
                    </button>
                    <button
                      onClick={clearSelection}
                      className="rounded bg-white/5 px-1.5 py-0.5 text-[9px] text-text-dim hover:bg-white/10"
                    >
                      Limpar
                    </button>
                  </>
                )}
              </span>
            )}
          </span>
        </SectionTitle>
        {agent.pendingApprovals.length === 0 ? (
          <p className="text-[11px] text-text-dim/50">
            Nenhuma ação aguardando.
          </p>
        ) : (
          <div className="space-y-2">
            {agent.pendingApprovals.map((job) => {
              const expiry = timeUntilExpiry(job.expiresAt);
              const isSelected = selectedApprovals.has(job.id);
              return (
                <div
                  key={job.id}
                  className={`rounded-lg border p-2.5 transition ${
                    isSelected
                      ? "border-blue-500/40 bg-blue-500/5"
                      : "border-yellow-500/20 bg-yellow-500/5"
                  }`}
                >
                  <div className="flex items-start gap-2">
                    {agent.pendingApprovals.length > 1 && (
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => toggleSelectApproval(job.id)}
                        className="mt-0.5 h-3 w-3 rounded border-white/20 bg-white/5"
                      />
                    )}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <Clock className="h-3.5 w-3.5 shrink-0 text-yellow-400" />
                        <code className="truncate font-mono text-[11px] text-text-primary">
                          {job.name}
                        </code>
                        <RiskBadge risk={job.risk} />
                        <span className="ml-auto text-[9px] text-text-dim/40">
                          {timeAgo(job.createdAt)}
                        </span>
                      </div>
                      <p className="mt-1 text-[10px] text-text-dim/70">
                        {getToolDescription(job.name, job.args)}
                      </p>
                      <pre className="mt-1.5 overflow-x-auto rounded bg-black/30 p-2 font-mono text-[10px] text-text-dim">
                        {JSON.stringify(job.args ?? {}, null, 2)}
                      </pre>
                      {expiry && (
                        <p className="mt-1 text-[9px] text-yellow-400/60">
                          Expira em {expiry}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mt-2 flex gap-2">
                    <button
                      onClick={() => void agent.approveJob(job.id, true)}
                      className="flex items-center gap-1 rounded-lg bg-emerald-500/15 px-2 py-1 text-[10px] text-emerald-400 hover:bg-emerald-500/25"
                    >
                      <ShieldCheck className="h-3 w-3" /> Aprovar
                    </button>
                    <button
                      onClick={() => void agent.approveJob(job.id, false)}
                      className="flex items-center gap-1 rounded-lg bg-red-500/10 px-2 py-1 text-[10px] text-red-400 hover:bg-red-500/20"
                    >
                      <ShieldX className="h-3 w-3" /> Rejeitar
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Histórico */}
        <SectionTitle>Histórico</SectionTitle>
        {history.length === 0 ? (
          <p className="text-[11px] text-text-dim/50">
            Nenhum job ainda. Peça algo no chat ou use o comando rápido acima.
          </p>
        ) : (
          <div className="space-y-1.5">
            {history.map((job) => (
              <div
                key={job.id}
                className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-2.5 py-1.5"
              >
                {job.status === "completed" ? (
                  <CheckCircle
                    className={`h-3 w-3 shrink-0 ${statusColor(job.status)}`}
                  />
                ) : job.status === "running" ? (
                  <Loader2 className="h-3 w-3 shrink-0 animate-spin text-blue-400" />
                ) : (
                  <Zap
                    className={`h-3 w-3 shrink-0 ${statusColor(job.status)}`}
                  />
                )}
                <code className="truncate font-mono text-[10px] text-text-primary">
                  {job.name}
                </code>
                <RiskBadge risk={job.risk} />
                <span
                  className={`ml-auto text-[9px] ${statusColor(job.status)}`}
                >
                  {job.status}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-text-dim">
      {children}
    </p>
  );
}
