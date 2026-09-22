/**
 * Dashboard de custo 9Router — métricas de uso e custo.
 *
 * GET /api/health/cost — retorna métricas agregadas de custo
 */

import { NextResponse } from "next/server";
import { getServerClient } from "../../../../lib/server-supabase";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface CostEntry {
  model: string;
  input_tokens: number;
  output_tokens: number;
  latency_ms: number;
  created_at: string;
}

interface ModelStats {
  model: string;
  requests: number;
  inputTokens: number;
  outputTokens: number;
  avgLatencyMs: number;
  estimatedCostUsd: number;
}

// Custo estimado por 1K tokens (valores aproximados)
const MODEL_COST_PER_1K: Record<string, { input: number; output: number }> = {
  // Arcenal / default
  default: { input: 0.0002, output: 0.0006 },
  // Modelos conocidos
  "gpt-4o": { input: 0.0025, output: 0.01 },
  "gpt-4o-mini": { input: 0.00015, output: 0.0006 },
  "claude-sonnet-4-5": { input: 0.003, output: 0.015 },
  "claude-haiku-3-5": { input: 0.00025, output: 0.00125 },
  "gemini-2.5-flash": { input: 0.000075, output: 0.0003 },
};

function getModelCost(model: string) {
  const lower = model.toLowerCase();
  for (const [key, cost] of Object.entries(MODEL_COST_PER_1K)) {
    if (lower.includes(key)) return cost;
  }
  return MODEL_COST_PER_1K.default;
}

export async function GET(req: Request) {
  try {
    const sb = getServerClient();
    const url = new URL(req.url);
    const days = Math.min(parseInt(url.searchParams.get("days") ?? "7"), 90);
    const since = new Date(
      Date.now() - days * 24 * 60 * 60 * 1000,
    ).toISOString();

    // Busca métricas do chat (agent_metrics se existir, senão estimation)
    const { data: metrics } = await sb
      .from("agent_metrics")
      .select("model, input_tokens, output_tokens, latency_ms, created_at")
      .gte("created_at", since)
      .order("created_at", { ascending: false })
      .limit(10000);

    if (!metrics || metrics.length === 0) {
      return NextResponse.json({
        period: { days, since },
        totalRequests: 0,
        totalCostUsd: 0,
        models: [],
        daily: [],
      });
    }

    // Agrupa por modelo
    const modelMap = new Map<string, ModelStats>();
    const dailyMap = new Map<string, { requests: number; costUsd: number }>();

    for (const m of metrics) {
      const entry = m as unknown as CostEntry;
      const cost = getModelCost(entry.model);

      // Stats por modelo
      const existing = modelMap.get(entry.model) ?? {
        model: entry.model,
        requests: 0,
        inputTokens: 0,
        outputTokens: 0,
        avgLatencyMs: 0,
        estimatedCostUsd: 0,
      };
      existing.requests++;
      existing.inputTokens += entry.input_tokens ?? 0;
      existing.outputTokens += entry.output_tokens ?? 0;
      existing.avgLatencyMs =
        (existing.avgLatencyMs * (existing.requests - 1) +
          (entry.latency_ms ?? 0)) /
        existing.requests;
      existing.estimatedCostUsd +=
        ((entry.input_tokens ?? 0) / 1000) * cost.input +
        ((entry.output_tokens ?? 0) / 1000) * cost.output;
      modelMap.set(entry.model, existing);

      // Stats diários
      const day = entry.created_at.slice(0, 10);
      const daily = dailyMap.get(day) ?? { requests: 0, costUsd: 0 };
      daily.requests++;
      daily.costUsd +=
        ((entry.input_tokens ?? 0) / 1000) * cost.input +
        ((entry.output_tokens ?? 0) / 1000) * cost.output;
      dailyMap.set(day, daily);
    }

    const models = Array.from(modelMap.values()).sort(
      (a, b) => b.estimatedCostUsd - a.estimatedCostUsd,
    );
    const daily = Array.from(dailyMap.entries())
      .map(([date, data]) => ({ date, ...data }))
      .sort((a, b) => a.date.localeCompare(b.date));

    const totalRequests = models.reduce((s, m) => s + m.requests, 0);
    const totalCostUsd = models.reduce((s, m) => s + m.estimatedCostUsd, 0);

    return NextResponse.json({
      period: { days, since },
      totalRequests,
      totalCostUsd: Math.round(totalCostUsd * 10000) / 10000,
      models,
      daily,
    });
  } catch (err) {
    return NextResponse.json(
      { error: (err as Error).message },
      { status: 500 },
    );
  }
}
