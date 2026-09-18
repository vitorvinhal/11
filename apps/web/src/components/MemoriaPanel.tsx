"use client";

import { useCallback, useEffect, useState } from "react";
import { useAuth } from "../lib/auth";
import {
  Loader2,
  RotateCcw,
  History,
  AlertTriangle,
  BrainCircuit,
  Check,
} from "lucide-react";

interface MemoriaData {
  events: Array<Record<string, unknown>>;
  checkpoints: {
    data: Array<Record<string, unknown>>;
    error?: { message?: string };
  };
  pending: {
    data: Array<Record<string, unknown>>;
    error?: { message?: string };
  };
  memories: {
    data: Array<Record<string, unknown>>;
    error?: { message?: string };
  };
}

type Tab = "memorias" | "eventos" | "checkpoints" | "pendentes";

/**
 * /memoria — trilha de auditoria da memória: checkpoints restauráveis,
 * fila de aprovação e consolidação (supersede) de memórias.
 */
export function MemoriaPanel() {
  const { getAccessToken } = useAuth();
  const [data, setData] = useState<MemoriaData | null>(null);
  const [tab, setTab] = useState<Tab>("memorias");
  const [busy, setBusy] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [msg, setMsg] = useState<{ kind: "ok" | "err"; text: string } | null>(
    null,
  );

  const load = useCallback(async () => {
    setBusy(true);
    try {
      const token = await getAccessToken();
      const res = await fetch("/api/memoria", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const body = await res.json();
      if (!res.ok) throw new Error(body.error ?? "Erro");
      setData(body);
    } catch (err) {
      setMsg({ kind: "err", text: (err as Error).message });
    } finally {
      setBusy(false);
    }
  }, [getAccessToken]);

  useEffect(() => {
    void load();
  }, [load]);

  const restore = async (id: string) => {
    if (!confirm("Restaurar este checkpoint? O estado salvo será reaplicado."))
      return;
    try {
      const token = await getAccessToken();
      const res = await fetch("/api/reverter", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ checkpointId: id }),
      });
      const body = await res.json();
      if (!res.ok) throw new Error(body.error ?? "Erro");
      setMsg({ kind: "ok", text: "Checkpoint restaurado." });
      void load();
    } catch (err) {
      setMsg({ kind: "err", text: (err as Error).message });
    }
  };

  const consolidate = async () => {
    if (!selected.length || !title.trim() || !content.trim()) return;
    try {
      const token = await getAccessToken();
      const res = await fetch("/api/memoria", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title, content, supersedingIds: selected }),
      });
      const body = await res.json();
      if (!res.ok) throw new Error(body.error ?? "Erro");
      setMsg({
        kind: "ok",
        text: "Memórias consolidadas (originais superseded).",
      });
      setSelected([]);
      setTitle("");
      setContent("");
      void load();
    } catch (err) {
      setMsg({ kind: "err", text: (err as Error).message });
    }
  };

  if (busy && !data) {
    return (
      <div className="flex items-center justify-center py-24">
        <Loader2 className="h-5 w-5 animate-spin text-primary" />
      </div>
    );
  }

  const memories = data?.memories.data ?? [];
  const events = data?.events ?? [];

  return (
    <div className="space-y-4">
      {msg && (
        <div
          className={`rounded-xl px-4 py-3 text-sm ${msg.kind === "ok" ? "bg-emerald-500/10 text-emerald-300" : "bg-rose-500/10 text-rose-300"}`}
        >
          {msg.text}
        </div>
      )}

      <div className="glassmorph flex flex-wrap items-center gap-2 p-3">
        {(["memorias", "eventos", "checkpoints", "pendentes"] as Tab[]).map(
          (t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`rounded-lg px-3 py-1.5 text-[11px] uppercase tracking-wide transition ${tab === t ? "bg-white/10 text-text-primary" : "text-text-dim hover:text-text-muted"}`}
            >
              {t}
            </button>
          ),
        )}
        <button
          onClick={() => void load()}
          className="ml-auto grid h-8 w-8 place-items-center rounded-lg text-text-dim hover:bg-white/5 hover:text-text-primary transition"
        >
          <Loader2 className={`h-3.5 w-3.5 ${busy ? "animate-spin" : ""}`} />
        </button>
      </div>

      {tab === "memorias" && (
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="glassmorph p-4">
            <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-text-primary">
              <BrainCircuit className="h-4 w-4 text-primary" /> Consolidar
              memórias
            </h3>
            <p className="mb-3 text-xs text-text-dim">
              Selecione memórias para unificar. As originais viram{" "}
              <code>superseded</code> (nunca apagadas) — trilha auditável em{" "}
              <code>memory_events</code>.
            </p>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Título da memória consolidada"
              className="mb-2 w-full rounded-lg bg-white/[0.05] px-3 py-2 text-sm text-text-primary placeholder:text-text-dim outline-none"
            />
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={4}
              placeholder="Conteúdo consolidado…"
              className="mb-3 w-full resize-none rounded-lg bg-white/[0.05] px-3 py-2 text-sm text-text-primary placeholder:text-text-dim outline-none"
            />
            <button
              onClick={consolidate}
              disabled={!selected.length || !title.trim() || !content.trim()}
              className="inline-flex items-center gap-1.5 rounded-lg bg-primary/20 px-3 py-2 text-xs text-primary transition enabled:hover:bg-primary/30 disabled:opacity-40"
            >
              <Check className="h-3 w-3" /> Consolidar ({selected.length})
            </button>
          </div>

          <div className="glassmorph max-h-[520px] overflow-y-auto p-4">
            <h3 className="mb-3 text-sm font-semibold text-text-primary">
              Memórias
            </h3>
            {memories.length === 0 && (
              <p className="text-xs text-text-dim">Nenhuma memória ainda.</p>
            )}
            <div className="space-y-2">
              {memories.map((m) => {
                const id = String(m.id);
                const active = m.status === "active";
                return (
                  <label
                    key={id}
                    className={`flex items-start gap-3 rounded-xl border p-3 transition ${active ? "border-white/[0.06] hover:border-white/[0.12]" : "border-white/[0.04] opacity-55"}`}
                  >
                    <input
                      type="checkbox"
                      disabled={!active}
                      checked={selected.includes(id)}
                      onChange={(e) =>
                        setSelected((prev) =>
                          e.target.checked
                            ? [...prev, id]
                            : prev.filter((x) => x !== id),
                        )
                      }
                      className="mt-0.5 accent-cyan-400"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`rounded px-1.5 py-0.5 text-[10px] uppercase tracking-wide ${active ? "bg-emerald-500/15 text-emerald-300" : "bg-amber-500/15 text-amber-300"}`}
                        >
                          {String(m.status)}
                        </span>
                        <span className="rounded bg-white/[0.05] px-1.5 py-0.5 text-[10px] text-text-dim">
                          {String(m.origin)}
                        </span>
                      </div>
                      <div className="mt-1 text-[13px] text-text-primary">
                        {String(m.title)}
                      </div>
                      <div className="text-[11px] text-text-dim">
                        {String(m.kind)} ·{" "}
                        {String(m.created_at ?? "").slice(0, 16)}
                      </div>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {tab === "eventos" && (
        <div className="glassmorph overflow-x-auto p-4">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/[0.05] text-[10px] uppercase tracking-wider text-text-dim">
                <th className="py-2 pr-4">Quando</th>
                <th className="py-2 pr-4">Evento</th>
                <th className="py-2 pr-4">Origem</th>
                <th className="py-2">Ator</th>
              </tr>
            </thead>
            <tbody>
              {events.map((e) => (
                <tr key={String(e.id)} className="border-b border-white/[0.03]">
                  <td className="py-2 pr-4 text-text-dim">
                    {String(e.created_at ?? "").slice(0, 19)}
                  </td>
                  <td className="py-2 pr-4 text-text-primary">
                    {String(e.event_type)}
                  </td>
                  <td className="py-2 pr-4 text-text-dim">
                    {String(e.origin)}
                  </td>
                  <td className="py-2 text-text-dim">{String(e.actor)}</td>
                </tr>
              ))}
              {events.length === 0 && (
                <tr>
                  <td
                    colSpan={4}
                    className="py-4 text-center text-xs text-text-dim"
                  >
                    Sem eventos.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {tab === "checkpoints" && (
        <div className="glassmorph p-4">
          <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-text-primary">
            <History className="h-4 w-4 text-primary" /> Checkpoints &#40;antes
            do estado&#41;
          </h3>
          <div className="space-y-2">
            {(data?.checkpoints.data ?? []).map((c) => (
              <div
                key={String(c.id)}
                className="flex flex-wrap items-center gap-3 rounded-xl border border-white/[0.06] p-3"
              >
                <div className="min-w-0 flex-1">
                  <div className="text-[13px] text-text-primary">
                    {String(c.action_id)}
                  </div>
                  <div className="text-[11px] text-text-dim">
                    {String(c.target_type)}:{String(c.target_id)} ·{" "}
                    {String(c.status)} ·{" "}
                    {String(c.created_at ?? "").slice(0, 16)}
                  </div>
                </div>
                {c.status === "active" && !c.expired && (
                  <button
                    onClick={() => void restore(String(c.id))}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-amber-500/15 px-3 py-1.5 text-xs text-amber-300 hover:bg-amber-500/25 transition"
                  >
                    <RotateCcw className="h-3 w-3" /> Reverter
                  </button>
                )}
              </div>
            ))}
            {(data?.checkpoints.data ?? []).length === 0 && (
              <p className="text-xs text-text-dim">Nenhum checkpoint ativo.</p>
            )}
          </div>
        </div>
      )}

      {tab === "pendentes" && (
        <div className="glassmorph p-4">
          <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-text-primary">
            <AlertTriangle className="h-4 w-4 text-primary" /> Ações pendentes
            de aprovação
          </h3>
          <div className="space-y-2">
            {(data?.pending.data ?? []).map((p) => (
              <div
                key={String(p.id)}
                className="flex flex-wrap items-center gap-3 rounded-xl border border-white/[0.06] p-3"
              >
                <span
                  className={`rounded px-2 py-0.5 text-[10px] uppercase ${String(p.risk_level) === "destructive" ? "bg-rose-500/15 text-rose-300" : String(p.risk_level) === "reversible" ? "bg-amber-500/15 text-amber-300" : "bg-emerald-500/15 text-emerald-300"}`}
                >
                  {String(p.risk_level)}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="text-[13px] text-text-primary">
                    {String(p.action)}
                  </div>
                  <div className="text-[11px] text-text-dim">
                    {String(p.status)} ·{" "}
                    {String(p.created_at ?? "").slice(0, 16)}
                  </div>
                </div>
              </div>
            ))}
            {(data?.pending.data ?? []).length === 0 && (
              <p className="text-xs text-text-dim">Sem pendências.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
