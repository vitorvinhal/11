/**
 * FASE 8B — Rate Limiter
 *
 * Rate limiting simples baseado em memória para APIs.
 * Protege contra abuso: spam de requests, brute force, etc.
 *
 * Uso: const limiter = new RateLimiter({ maxRequests: 10, windowMs: 60000 });
 *      if (!limiter.check(userId)) return 429;
 */

// ─── Tipos ──────────────────────────────────────────────────────────────────

export interface RateLimitConfig {
  /** Máximo de requests por janela */
  maxRequests: number;
  /** Janela de tempo em milissegundos */
  windowMs: number;
  /** Mensagem de erro personalizada */
  message?: string;
}

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetAt: number;
  retryAfterMs?: number;
}

// ─── Rate Limiter ───────────────────────────────────────────────────────────

export class RateLimiter {
  private config: RateLimitConfig;
  private hits: Map<string, number[]> = new Map();

  constructor(config: RateLimitConfig) {
    this.config = config;
  }

  /**
   * Verifica se o request é permitido.
   * Retorna true se permitido, false se deve retornar 429.
   */
  check(key: string): RateLimitResult {
    const now = Date.now();
    const windowStart = now - this.config.windowMs;

    // Limpar entries antigos
    let timestamps = this.hits.get(key) ?? [];
    timestamps = timestamps.filter((t) => t > windowStart);
    this.hits.set(key, timestamps);

    if (timestamps.length >= this.config.maxRequests) {
      const oldest = timestamps[0];
      const retryAfterMs = oldest + this.config.windowMs - now;
      return {
        allowed: false,
        remaining: 0,
        resetAt: oldest + this.config.windowMs,
        retryAfterMs,
      };
    }

    // Registrar hit
    timestamps.push(now);
    this.hits.set(key, timestamps);

    return {
      allowed: true,
      remaining: this.config.maxRequests - timestamps.length,
      resetAt: now + this.config.windowMs,
    };
  }

  /**
   * Retorna headers HTTP para rate limiting.
   */
  getHeaders(key: string): Record<string, string> {
    const result = this.check(key);
    const headers: Record<string, string> = {
      'X-RateLimit-Limit': String(this.config.maxRequests),
      'X-RateLimit-Remaining': String(result.remaining),
      'X-RateLimit-Reset': String(Math.ceil(result.resetAt / 1000)),
    };
    if (!result.allowed) {
      headers['Retry-After'] = String(Math.ceil((result.retryAfterMs ?? 1000) / 1000));
    }
    return headers;
  }

  /**
   * Limpa entries antigos (chamar periodicamente).
   */
  cleanup(): number {
    const now = Date.now();
    let cleaned = 0;
    for (const [key, timestamps] of this.hits.entries()) {
      const valid = timestamps.filter((t) => t > now - this.config.windowMs);
      if (valid.length === 0) {
        this.hits.delete(key);
        cleaned++;
      } else {
        this.hits.set(key, valid);
      }
    }
    return cleaned;
  }

  /**
   * Reseta o contador para uma key específica.
   */
  reset(key: string): void {
    this.hits.delete(key);
  }

  /**
   * Retorna o número de keys ativas.
   */
  get size(): number {
    return this.hits.size;
  }
}

// ─── Presets ────────────────────────────────────────────────────────────────

/** Chat: 30 requests/minuto */
export const chatLimiter = new RateLimiter({
  maxRequests: 30,
  windowMs: 60 * 1000,
  message: 'Muitas mensagens. Aguarde um momento.',
});

/** Agent: 10 requests/minuto (mais pesado) */
export const agentLimiter = new RateLimiter({
  maxRequests: 10,
  windowMs: 60 * 1000,
  message: 'Muitas requisições ao agente. Aguarde.',
});

/** Auth: 5 tentativas/minuto */
export const authLimiter = new RateLimiter({
  maxRequests: 5,
  windowMs: 60 * 1000,
  message: 'Muitas tentativas de autenticação.',
});

/** Upload: 20 requests/minuto */
export const uploadLimiter = new RateLimiter({
  maxRequests: 20,
  windowMs: 60 * 1000,
  message: 'Muitos uploads. Aguarde.',
});

// ─── Cleanup automático ─────────────────────────────────────────────────────

let cleanupInterval: ReturnType<typeof setInterval> | null = null;

/**
 * Inicia cleanup automático a cada 5 minutos.
 */
export function startRateLimitCleanup(): void {
  if (cleanupInterval) return;
  cleanupInterval = setInterval(() => {
    chatLimiter.cleanup();
    agentLimiter.cleanup();
    authLimiter.cleanup();
    uploadLimiter.cleanup();
  }, 5 * 60 * 1000);
}

/**
 * Para o cleanup automático.
 */
export function stopRateLimitCleanup(): void {
  if (cleanupInterval) {
    clearInterval(cleanupInterval);
    cleanupInterval = null;
  }
}
