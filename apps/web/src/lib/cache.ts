/**
 * FASE 18A — In-memory Cache with TTL
 *
 * Cache genérico com suporte a TTL e invalidação por prefixo.
 */

interface CacheEntry<T> {
  value: T;
  expiresAt: number;
}

export class Cache<T = unknown> {
  private store = new Map<string, CacheEntry<T>>();
  private defaultTTL: number;
  private name: string;

  constructor(name: string, defaultTTLMs: number = 60_000) {
    this.name = name;
    this.defaultTTL = defaultTTLMs;
  }

  /**
   * Obter valor do cache
   */
  get(key: string): T | null {
    const entry = this.store.get(key);
    if (!entry) return null;

    if (Date.now() > entry.expiresAt) {
      this.store.delete(key);
      return null;
    }

    return entry.value;
  }

  /**
   * Armazenar valor no cache
   */
  set(key: string, value: T, ttlMs?: number): void {
    const expiresAt = Date.now() + (ttlMs ?? this.defaultTTL);
    this.store.set(key, { value, expiresAt });
  }

  /**
   * Obter ou setar (lazy evaluation)
   */
  getOrSet(
    key: string,
    factory: () => T | Promise<T>,
    ttlMs?: number,
  ): T | Promise<T> {
    const cached = this.get(key);
    if (cached !== null) return cached;

    const value = factory();
    if (value instanceof Promise) {
      return value.then((v) => {
        this.set(key, v, ttlMs);
        return v;
      });
    }

    this.set(key, value, ttlMs);
    return value;
  }

  /**
   * Invalidar por prefixo
   */
  invalidatePrefix(prefix: string): number {
    let count = 0;
    const keys = Array.from(this.store.keys());
    for (const key of keys) {
      if (key.startsWith(prefix)) {
        this.store.delete(key);
        count++;
      }
    }
    return count;
  }

  /**
   * Invalidar chave específica
   */
  invalidate(key: string): boolean {
    return this.store.delete(key);
  }

  /**
   * Limpar cache expirado
   */
  cleanup(): number {
    const now = Date.now();
    let count = 0;
    const entries = Array.from(this.store.entries());
    for (const [key, entry] of entries) {
      if (now > entry.expiresAt) {
        this.store.delete(key);
        count++;
      }
    }
    return count;
  }

  /**
   * Limpar todo o cache
   */
  clear(): void {
    this.store.clear();
  }

  /**
   * Tamanho do cache
   */
  get size(): number {
    return this.store.size;
  }

  /**
   * Estatísticas do cache
   */
  stats(): { name: string; size: number; keys: string[] } {
    return {
      name: this.name,
      size: this.store.size,
      keys: Array.from(this.store.keys()),
    };
  }
}

// Caches pré-configurados
export const healthCache = new Cache("health", 30_000); // 30s para health checks
export const metricsCache = new Cache("metrics", 10_000); // 10s para métricas
export const pluginsCache = new Cache("plugins", 60_000); // 60s para plugins
export const skillsCache = new Cache("skills", 60_000); // 60s para skills
