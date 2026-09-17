import { NextResponse } from 'next/server';

/**
 * GET /api/keep-alive — ping leve no Supabase (RPC `select_one` = SELECT 1).
 * Usado pelo KeepAliveBanner e pelo workflow de keep-alive (GitHub Actions).
 */
export async function GET() {
  const started = Date.now();
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';

  try {
    if (!url || !key) throw new Error('Supabase env ausente');

    const res = await fetch(`${url}/rest/v1/rpc/select_one`, {
      method: 'POST',
      headers: { 'content-type': 'application/json', apikey: key, authorization: `Bearer ${key}` },
      body: '{}',
      signal: AbortSignal.timeout(10_000),
    });

    if (!res.ok) throw new Error(`supabase ${res.status}`);

    return NextResponse.json({ status: 'ok', db: true, latencyMs: Date.now() - started });
  } catch {
    return NextResponse.json({ status: 'ok', db: false, latencyMs: Date.now() - started });
  }
}