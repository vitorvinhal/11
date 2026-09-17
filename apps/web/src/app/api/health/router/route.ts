import { NextResponse } from 'next/server';
import { loadRootEnv } from '../../../../lib/server-env';

loadRootEnv();

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

interface EndpointStatus {
  endpoint: string;
  ok: boolean;
  status?: number;
  error?: string;
}

async function probe(endpoint: string, model: string, apiKey: string): Promise<EndpointStatus> {
  try {
    const base = endpoint.endsWith('/v1') ? endpoint : `${endpoint}/v1`;
    const res = await fetch(`${base}/chat/completions`, {
      method: 'POST',
      headers: { 'content-type': 'application/json', ...(apiKey ? { authorization: `Bearer ${apiKey}` } : {}) },
      body: JSON.stringify({
        model,
        stream: false,
        messages: [{ role: 'user', content: 'ping' }],
        max_tokens: 1,
      }),
      signal: AbortSignal.timeout(15_000),
    });
    return { endpoint, ok: res.ok, status: res.status };
  } catch (err) {
    return { endpoint, ok: false, error: (err as Error).message };
  }
}

/**
 * GET /api/health/router
 * Diagnóstico do gateway 9Router: testa localhost + túnel público com todos
 * os combos configurados. Útil para saber se o 9Router está acessível de fora.
 */
export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const modelParam = url.searchParams.get('model');
    const apiKey = process.env['9ROUTER_TOKEN'] ?? '';
    const endpoints = [
      process.env['9ROUTER_ENDPOINT'],
      process.env['9ROUTER_TUNNEL'],
    ].filter((ep): ep is string => !!ep && ep.startsWith('http'));

    const models = modelParam
      ? [modelParam]
      : [
          process.env['9ROUTER_MODEL'],
          ...(process.env['9ROUTER_FALLBACK_MODELS'] ?? '').split(','),
          'kr/glm-5',
          'kr/claude-sonnet-4.5',
          'gemini/gemini-3.6-flash',
        ].filter((m): m is string => !!m && !!m.trim());

    const results = [];
    for (const model of models) {
      for (const endpoint of endpoints) {
        results.push({ model, ...(await probe(endpoint, model, apiKey)) });
      }
    }

    const reachable = results.filter((r) => r.ok);
    return NextResponse.json({
      ok: reachable.length > 0,
      endpointCount: endpoints.length,
      modelCount: models.length,
      configured: {
        endpoint: process.env['9ROUTER_ENDPOINT'] ?? null,
        tunnel: process.env['9ROUTER_TUNNEL'] ?? null,
        model: process.env['9ROUTER_MODEL'] ?? null,
      },
      cells: results,
    });
  } catch (err) {
    return NextResponse.json({ ok: false, error: (err as Error).message }, { status: 500 });
  }
}