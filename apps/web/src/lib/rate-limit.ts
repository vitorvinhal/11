/**
 * Rate limiting por endpoint — sliding window counter.
 *
 * Uso: import { checkRateLimit } from '@/lib/rate-limit';
 *      const result = await checkRateLimit(req, { windowMs: 60000, max: 100 });
 *      if (!result.ok) return new Response(..., { status: 429 });
 */

import { getServerClient } from "./server-supabase";

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

// Cache em memória (funciona bem para Vercel serverless functions)
const buckets = new Map<string, RateLimitEntry>();

// Cleanup a cada 5 minutos
let lastCleanup = Date.now();
function cleanup() {
  const now = Date.now();
  if (now - lastCleanup < 300_000) return;
  lastCleanup = now;
  for (const [key, entry] of Array.from(buckets.entries())) {
    if (now > entry.resetAt) buckets.delete(key);
  }
}

export interface RateLimitConfig {
  /** Janela de tempo em ms (default: 60s) */
  windowMs?: number;
  /** Máximo de requests por janela (default: 100) */
  max?: number;
  /** Chave customizada (default: IP + path) */
  keyPrefix?: string;
}

export interface RateLimitResult {
  ok: boolean;
  remaining: number;
  resetAt: number;
}

/**
 * Verifica rate limit para um request.
 * Retorna { ok: false, remaining: 0 } se excedido.
 */
export async function checkRateLimit(
  req: Request,
  config: RateLimitConfig = {},
): Promise<RateLimitResult> {
  cleanup();

  const windowMs = config.windowMs ?? 60_000;
  const max = config.max ?? 100;

  // Gera chave: IP + path (ou prefixo custom)
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const path = config.keyPrefix
    ? `${config.keyPrefix}:${ip}`
    : `${new URL(req.url).pathname}:${ip}`;

  const now = Date.now();
  const entry = buckets.get(path);

  if (!entry || now > entry.resetAt) {
    // Nova janela
    buckets.set(path, { count: 1, resetAt: now + windowMs });
    return { ok: true, remaining: max - 1, resetAt: now + windowMs };
  }

  entry.count++;

  if (entry.count > max) {
    return { ok: false, remaining: 0, resetAt: entry.resetAt };
  }

  return { ok: true, remaining: max - entry.count, resetAt: entry.resetAt };
}

/**
 * Rate limit presets para diferentes endpoints.
 */
export const RATE_LIMITS = {
  /** API geral: 100 req/min */
  default: { windowMs: 60_000, max: 100 },
  /** Chat/agent: 30 req/min (mais pesado) */
  chat: { windowMs: 60_000, max: 30 },
  /** Terminal exec: 30 req/min */
  terminal: { windowMs: 60_000, max: 30 },
  /** Auth endpoints: 10 req/min (anti-brute-force) */
  auth: { windowMs: 60_000, max: 10 },
  /** Upload: 10 req/min */
  upload: { windowMs: 60_000, max: 10 },
  /** Settings/test: 5 req/min (anti-SSRF) */
  settings: { windowMs: 60_000, max: 5 },
} as const;
