"use client";

import { useCallback, useEffect, useState } from "react";
import { useAuth } from "../lib/auth";
import { Loader2, Wallet, Zap, Database, TrendingDown } from "lucide-react";

interface FinOpsData {
  ok: boolean;
  costBreaker: { spent: number; budget: number; open: boolean };
  totals: {
    inputTokens: number;
    outputTokens: number;
    costUnits: number;
    promptCacheSavingsUnits: number;
  };
  byProvider: Record<
    string,
    { input: number; output: number; cost: number; calls: number }
  >;
  avgLatencyMs: number | null;
}

/**
 * FinOps — dashboard de consumo real de tokens/custos por provedor,
 * economia de prompt caching, latência e estado do CostBreaker.
 */
export function FinOpsPanel() {
  const { getAccessToken } = useAuth();
  const [data, setData] = useState<FinOpsData | null>(null);
  const [err, setErr] = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      const token = await getAccessToken();
      const res = await fetch("/api/finops", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const body = await res.json();
      if (!res.ok) throw new Error(body.error ?? "Erro");
      setData(body);
    } catch (e) {
      setErr((e as Error).message);
    }
  }, [getAccessToken]);

  useEffect(() => {
    void load();
  }, [load]);

  if (err)
    return <div className="glassmorph p-4 text-sm text-rose-300">{err}</div>;
  if (!data)
    return (
      <div className="flex items-center justify-center py-24">
        <Loader2 className="h-5 w-5 animate-spin text-primary" />
      </div>
    );

  const ok = data.ok !== false;
  void ok;
  const cb = data.costBreaker;
  const pct = cb.budget > 0 ? Math.min(100, (cb.spent / cb.budget) * 100) : 0;
  const providers = Object.entries(data.byProvider);

  return (
    <div className="space-y-4">
      <div className="glassmorph p-5">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            <Wallet className="h-4 w-4 text-primary" />
            <h2 className="text-sm font-semibold text-text-primary">FinOps</h2>
          </div>
          <span
            className={`rounded-full px-2.5 py-1 text-[10px] uppercase ${cb.open ? "bg-emerald-500/15 text-emerald-300" : "bg-rose-500/15 text-rose-300"}`}
          >
            {cb.open ? "circuito aberto" : "circuito fechado"}
          </span>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
          <Stat label="Gasto (USD)" value={cb.spent.toFixed(4)} />
          <Stat label="Orçamento/dia (USD)" value={cb.budget.toFixed(2)} />
          <Stat label="Tokens in" value={fmt(data.totals.inputTokens)} />
          <Stat label="Tokens out" value={fmt(data.totals.outputTokens)} />
        </div>
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/[0.06]">
          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400 transition-all"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Mini
          icon={<Database className="h-4 w-4 text-primary" />}
          label="Economia prompt caching (USD)"
          value={`~${data.totals.promptCacheSavingsUnits.toFixed(6)}`}
        />
        <Mini
          icon={<Zap className="h-4 w-4 text-primary" />}
          label="Latência média"
          value={
            data.avgLatencyMs != null
              ? `${data.avgLatencyMs.toFixed(0)}ms`
              : "n/a"
          }
        />
        <Mini
          icon={<TrendingDown className="h-4 w-4 text-primary" />}
          label="Custo total (USD)"
          value={data.totals.costUnits.toFixed(6)}
        />
      </div>

      <div className="glassmorph overflow-x-auto p-4">
        <h3 className="mb-3 text-sm font-semibold text-text-primary">
          Por provedor
        </h3>
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-white/[0.05] text-[10px] uppercase tracking-wider text-text-dim">
              <th className="py-2 pr-4">Provedor</th>
              <th className="py-2 pr-4">Chamadas</th>
              <th className="py-2 pr-4">Tokens in</th>
              <th className="py-2 pr-4">Tokens out</th>
              <th className="py-2">Custo (USD)</th>
            </tr>
          </thead>
          <tbody>
            {providers.map(([p, e]) => (
              <tr key={p} className="border-b border-white/[0.03]">
                <td className="py-2 pr-4 text-text-primary">{p}</td>
                <td className="py-2 pr-4 text-text-dim">{e.calls}</td>
                <td className="py-2 pr-4 text-text-dim">{fmt(e.input)}</td>
                <td className="py-2 pr-4 text-text-dim">{fmt(e.output)}</td>
                <td className="py-2 text-text-dim">{e.cost.toFixed(6)}</td>
              </tr>
            ))}
            {providers.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="py-4 text-center text-xs text-text-dim"
                >
                  Sem dados de uso ainda — envie mensagens pelos provedores
                  pagos para popular.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-wider text-text-dim">
        {label}
      </div>
      <div className="mt-1 text-lg font-semibold text-text-primary">
        {value}
      </div>
    </div>
  );
}

function Mini({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="glassmorph flex items-center gap-3 p-4">
      {icon}
      <div>
        <div className="text-[10px] uppercase tracking-wider text-text-dim">
          {label}
        </div>
        <div className="text-sm font-medium text-text-primary">{value}</div>
      </div>
    </div>
  );
}

function fmt(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}k`;
  return String(Math.round(n));
}
