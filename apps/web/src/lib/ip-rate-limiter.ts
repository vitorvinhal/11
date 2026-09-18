/**
 * FASE 23 — Global IP Rate Limiter
 *
 * Rate limiting global por IP, além do rate limiting por endpoint.
 * Protege contra ataques DDoS e brute force.
 */

import { RateLimiter, RateLimitResult } from "./rate-limiter";

export interface IpRateLimitConfig {
  /** Máximo de requests por IP por janela */
  maxRequests: number;
  /** Janela de tempo em milissegundos */
  windowMs: number;
  /** IPs que ignoram o rate limit (whitelist) */
  whitelist: string[];
  /** Se deve bloquear o IP após exceder o limite */
  blockOnExceed: boolean;
  /** Duração do bloqueio em ms (0 = indefinido) */
  blockDurationMs: number;
}

const defaultConfig: IpRateLimitConfig = {
  maxRequests: parseInt(process.env.IP_RATE_LIMIT_MAX ?? "100", 10),
  windowMs: parseInt(process.env.IP_RATE_LIMIT_WINDOW_MS ?? "60000", 10),
  whitelist: (process.env.IP_RATE_LIMIT_WHITELIST ?? "")
    .split(",")
    .filter(Boolean),
  blockOnExceed: process.env.IP_RATE_LIMIT_BLOCK === "true",
  blockDurationMs: parseInt(
    process.env.IP_RATE_LIMIT_BLOCK_DURATION ?? "300000",
    10,
  ),
};

export class GlobalIpRateLimiter {
  private config: IpRateLimitConfig;
  private limiter: RateLimiter;
  private blocked: Map<string, number> = new Map();

  constructor(config: IpRateLimitConfig) {
    this.config = config;
    this.limiter = new RateLimiter({
      maxRequests: config.maxRequests,
      windowMs: config.windowMs,
      message: "Rate limit excedido. Tente novamente mais tarde.",
    });
  }

  /**
   * Extrai o IP real do request (considera proxies).
   */
  extractIp(request: Request): string {
    const forwarded = request.headers.get("x-forwarded-for");
    if (forwarded) {
      return forwarded.split(",")[0].trim();
    }
    const realIp = request.headers.get("x-real-ip");
    if (realIp) return realIp;
    return "127.0.0.1";
  }

  /**
   * Verifica se o IP está na whitelist.
   */
  isWhitelisted(ip: string): boolean {
    return this.config.whitelist.includes(ip);
  }

  /**
   * Verifica se o IP está bloqueado.
   */
  isBlocked(ip: string): boolean {
    const blockedAt = this.blocked.get(ip);
    if (!blockedAt) return false;
    if (Date.now() - blockedAt > this.config.blockDurationMs) {
      this.blocked.delete(ip);
      return false;
    }
    return true;
  }

  /**
   * Bloqueia um IP.
   */
  blockIp(ip: string): void {
    this.blocked.set(ip, Date.now());
  }

  /**
   * Verifica se o request é permitido.
   */
  check(request: Request): {
    allowed: boolean;
    ip: string;
    result: RateLimitResult;
    blocked: boolean;
  } {
    const ip = this.extractIp(request);

    if (this.isWhitelisted(ip)) {
      return {
        allowed: true,
        ip,
        result: { allowed: true, remaining: 999, resetAt: Date.now() + 60000 },
        blocked: false,
      };
    }

    if (this.isBlocked(ip)) {
      return {
        allowed: false,
        ip,
        result: {
          allowed: false,
          remaining: 0,
          resetAt: 0,
          retryAfterMs: this.config.blockDurationMs,
        },
        blocked: true,
      };
    }

    const result = this.limiter.check(ip);

    if (!result.allowed && this.config.blockOnExceed) {
      this.blockIp(ip);
    }

    return { allowed: result.allowed, ip, result, blocked: this.isBlocked(ip) };
  }

  /**
   * Retorna headers HTTP para rate limiting global.
   */
  getHeaders(request: Request): Record<string, string> {
    const ip = this.extractIp(request);
    return this.limiter.getHeaders(`global:${ip}`);
  }

  /**
   * Limpa dados expirados.
   */
  cleanup(): void {
    this.limiter.cleanup();
    const now = Date.now();
    for (const [ip, blockedAt] of Array.from(this.blocked.entries())) {
      if (now - blockedAt > this.config.blockDurationMs) {
        this.blocked.delete(ip);
      }
    }
  }

  /**
   * Retorna estatísticas.
   */
  get stats() {
    return {
      activeIps: this.limiter.size,
      blockedIps: this.blocked.size,
    };
  }
}

export const globalIpLimiter = new GlobalIpRateLimiter(defaultConfig);
