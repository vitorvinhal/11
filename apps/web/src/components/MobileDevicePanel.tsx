"use client";

import { useCallback, useEffect, useState } from "react";
import {
  Smartphone,
  Play,
  Square,
  Loader2,
  CheckCircle,
  Clock,
  ShieldCheck,
  ShieldX,
  RefreshCw,
  Zap,
} from "lucide-react";
import { useDeviceAgent, DeviceJobView } from "../lib/useDeviceAgent";
import { getDeviceContext } from "../lib/device-client";
import { useAuth } from "../lib/auth";

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

export function MobileDevicePanel() {
  const agent = useDeviceAgent();
  const { getAccessToken } = useAuth();
  const [history, setHistory] = useState<DeviceJobView[]>([]);
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

  return (
    <div className="flex h-full flex-col">
      {/* Header */}
      <div className="border-b border-white/5 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-pink-500">
              <Smartphone className="h-4 w-4 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-text-primary">
                Agente Mobile
              </h3>
              <p className="text-[10px] text-text-dim">
                {ctx.deviceId ? ctx.deviceId.slice(0, 8) : "não pareado"} ·{" "}
                <span
                  className={running ? "text-emerald-400" : "text-text-dim/60"}
                >
                  {running ? "ativo" : "parado"}
                </span>
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

        {/* Aprovações pendentes */}
        <SectionTitle>
          Aprovações ({agent.pendingApprovals.length})
        </SectionTitle>
        {agent.pendingApprovals.length === 0 ? (
          <p className="text-[11px] text-text-dim/50">
            Nenhuma ação aguardando.
          </p>
        ) : (
          <div className="space-y-2">
            {agent.pendingApprovals.map((job) => (
              <div
                key={job.id}
                className="rounded-lg border border-yellow-500/20 bg-yellow-500/5 p-2.5"
              >
                <div className="flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5 text-yellow-400" />
                  <code className="font-mono text-[11px] text-text-primary">
                    {job.name}
                  </code>
                  <span className="ml-auto text-[9px] text-text-dim/40">
                    {timeAgo(job.createdAt)}
                  </span>
                </div>
                <pre className="mt-1.5 overflow-x-auto rounded bg-black/30 p-2 font-mono text-[10px] text-text-dim">
                  {JSON.stringify(job.args ?? {}, null, 2)}
                </pre>
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
            ))}
          </div>
        )}

        {/* Histórico */}
        <SectionTitle>Histórico</SectionTitle>
        {history.length === 0 ? (
          <p className="text-[11px] text-text-dim/50">
            Nenhum job ainda. A IA 11 executa ações aqui quando você pedir pelo
            chat.
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
