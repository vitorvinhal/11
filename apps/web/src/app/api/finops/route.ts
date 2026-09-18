import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { costBreaker, getMetricSummary } from "@11/ia";
import { loadRootEnv } from "../../../lib/server-env";
import { requireUser } from "../../../lib/auth-helpers";

loadRootEnv();

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * GET /api/finops — dashboard FinOps.
 * Consumo real de tokens/custos por provedor (model_usage), economia por
 * prompt caching, latência média e estado do CostBreaker.
 */
export async function GET(req: Request) {
  try {
    const auth = await requireUser(req);
    if (!auth)
      return NextResponse.json({ error: "Não autenticado" }, { status: 401 });

    const sb = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
      process.env.SUPABASE_SERVICE_ROLE_KEY ?? "",
    );

    const [{ data: usage }] = await Promise.all([
      sb
        .from("model_usage")
        .select("provider, input_tokens, output_tokens, cost_units")
        .order("created_at", { ascending: false })
        .limit(5000),
    ]);

    const byProvider: Record<
      string,
      { input: number; output: number; cost: number; calls: number }
    > = {};
    let totalCost = 0;
    let totalInput = 0;
    let totalOutput = 0;
    for (const row of (usage ?? []) as Array<Record<string, unknown>>) {
      const p = String(row.provider ?? "unknown");
      const e = byProvider[p] ?? { input: 0, output: 0, cost: 0, calls: 0 };
      e.input += Number(row.input_tokens ?? 0);
      e.output += Number(row.output_tokens ?? 0);
      e.cost += Number(row.cost_units ?? 0);
      e.calls += 1;
      byProvider[p] = e;
      totalInput += Number(row.input_tokens ?? 0);
      totalOutput += Number(row.output_tokens ?? 0);
      totalCost += Number(row.cost_units ?? 0);
    }

    const metrics = getMetricSummary();

    return NextResponse.json({
      ok: true,
      costBreaker: costBreaker.status(),
      totals: {
        inputTokens: totalInput,
        outputTokens: totalOutput,
        costUnits: totalCost,
        // Estimativa de economia via prompt caching: 50% dos tokens de input repetidos
        promptCacheSavingsUnits: (totalInput * 0.5 * 0.1) / 1_000_000,
      },
      byProvider,
      avgLatencyMs: metrics?.avgLatencyMs ?? null,
    });
  } catch (err) {
    return NextResponse.json(
      { error: (err as Error).message },
      { status: 500 },
    );
  }
}
