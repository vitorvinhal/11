/**
 * Rate Limiter — FASE 8B
 *
 * Testes unitários do rate limiter.
 */

import { RateLimiter, chatLimiter, agentLimiter } from './rate-limiter';

describe('Rate Limiter — FASE 8B', () => {
  beforeEach(() => {
    chatLimiter.reset('test-user');
    agentLimiter.reset('test-user');
  });

  // ── Basic functionality ──
  describe('check()', () => {
    test('allows requests under limit', () => {
      const limiter = new RateLimiter({ maxRequests: 5, windowMs: 60000 });
      const result = limiter.check('user-1');
      expect(result.allowed).toBe(true);
      expect(result.remaining).toBe(4);
    });

    test('blocks requests over limit', () => {
      const limiter = new RateLimiter({ maxRequests: 3, windowMs: 60000 });
      limiter.check('user-1');
      limiter.check('user-1');
      limiter.check('user-1');
      const result = limiter.check('user-1');
      expect(result.allowed).toBe(false);
      expect(result.remaining).toBe(0);
      expect(result.retryAfterMs).toBeGreaterThan(0);
    });

    test('different keys are independent', () => {
      const limiter = new RateLimiter({ maxRequests: 2, windowMs: 60000 });
      limiter.check('user-1');
      limiter.check('user-1');
      const result = limiter.check('user-2');
      expect(result.allowed).toBe(true);
    });

    test('window resets after time', () => {
      const limiter = new RateLimiter({ maxRequests: 2, windowMs: 100 });
      limiter.check('user-1');
      limiter.check('user-1');
      expect(limiter.check('user-1').allowed).toBe(false);
      // Wait for window to expire
      return new Promise((r) => setTimeout(r, 150)).then(() => {
        expect(limiter.check('user-1').allowed).toBe(true);
      });
    });
  });

  // ── Headers ──
  describe('getHeaders()', () => {
    test('returns rate limit headers', () => {
      const limiter = new RateLimiter({ maxRequests: 10, windowMs: 60000 });
      const headers = limiter.getHeaders('user-1');
      expect(headers).toHaveProperty('X-RateLimit-Limit', '10');
      expect(headers).toHaveProperty('X-RateLimit-Remaining');
      expect(headers).toHaveProperty('X-RateLimit-Reset');
    });

    test('includes Retry-After when blocked', () => {
      const limiter = new RateLimiter({ maxRequests: 1, windowMs: 60000 });
      limiter.check('user-1');
      const headers = limiter.getHeaders('user-1');
      expect(headers).toHaveProperty('Retry-After');
    });
  });

  // ── Cleanup ──
  describe('cleanup()', () => {
    test('removes expired entries', () => {
      const limiter = new RateLimiter({ maxRequests: 10, windowMs: 100 });
      limiter.check('user-1');
      limiter.check('user-2');
      return new Promise((r) => setTimeout(r, 150)).then(() => {
        const cleaned = limiter.cleanup();
        expect(cleaned).toBe(2);
        expect(limiter.size).toBe(0);
      });
    });
  });

  // ── Reset ──
  describe('reset()', () => {
    test('resets counter for key', () => {
      const limiter = new RateLimiter({ maxRequests: 2, windowMs: 60000 });
      limiter.check('user-1');
      limiter.check('user-1');
      expect(limiter.check('user-1').allowed).toBe(false);
      limiter.reset('user-1');
      expect(limiter.check('user-1').allowed).toBe(true);
    });
  });

  // ── Presets ──
  describe('Preset limiters', () => {
    test('chatLimiter: 30 req/min', () => {
      const result = chatLimiter.check('test-preset');
      expect(result.allowed).toBe(true);
      chatLimiter.reset('test-preset');
    });

    test('agentLimiter: 10 req/min', () => {
      const result = agentLimiter.check('test-preset');
      expect(result.allowed).toBe(true);
      agentLimiter.reset('test-preset');
    });
  });

  // ── Edge cases ──
  describe('Edge cases', () => {
    test('zero max requests blocks immediately', () => {
      const limiter = new RateLimiter({ maxRequests: 0, windowMs: 60000 });
      expect(limiter.check('user-1').allowed).toBe(false);
    });

    test('single request allowed with max=1', () => {
      const limiter = new RateLimiter({ maxRequests: 1, windowMs: 60000 });
      expect(limiter.check('user-1').allowed).toBe(true);
      expect(limiter.check('user-1').allowed).toBe(false);
    });

    test('size tracks active keys', () => {
      const limiter = new RateLimiter({ maxRequests: 10, windowMs: 60000 });
      limiter.check('a');
      limiter.check('b');
      limiter.check('c');
      expect(limiter.size).toBe(3);
    });
  });
});
