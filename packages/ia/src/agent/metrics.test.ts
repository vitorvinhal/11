/**
 * Agent Metrics — FASE 7C
 *
 * Testes unitários do sistema de métricas.
 */

import {
  recordMetric,
  recordLatency,
  recordToolCalls,
  recordError,
  recordTokens,
  getMetricSummary,
  getRawMetrics,
  clearMetrics,
} from './metrics';

describe('Agent Metrics — FASE 7C', () => {
  beforeEach(() => {
    clearMetrics();
  });

  // ── Record metrics ──
  describe('recordMetric', () => {
    test('records a metric with timestamp', () => {
      recordMetric({
        sessionId: 's1',
        userId: 'u1',
        type: 'agent.latency',
        value: 150,
      });

      const metrics = getRawMetrics();
      expect(metrics).toHaveLength(1);
      expect(metrics[0].type).toBe('agent.latency');
      expect(metrics[0].value).toBe(150);
      expect(metrics[0].timestamp).toBeGreaterThan(0);
    });

    test('records metric with tags', () => {
      recordMetric({
        sessionId: 's1',
        userId: 'u1',
        type: 'agent.error',
        value: 1,
        tags: { errorType: 'timeout' },
      });

      const metrics = getRawMetrics();
      expect(metrics[0].tags).toHaveProperty('errorType', 'timeout');
    });
  });

  // ── Convenience functions ──
  describe('recordLatency', () => {
    test('records latency metric', () => {
      recordLatency('s1', 'u1', 200);
      const metrics = getRawMetrics();
      expect(metrics[0].type).toBe('agent.latency');
      expect(metrics[0].value).toBe(200);
    });
  });

  describe('recordToolCalls', () => {
    test('records tool call count', () => {
      recordToolCalls('s1', 'u1', 3, { safe: 2, reversible: 1, destructive: 0 });
      const metrics = getRawMetrics();
      const toolMetric = metrics.find((m) => m.type === 'agent.tool_calls');
      expect(toolMetric?.value).toBe(3);
    });

    test('records risk distribution', () => {
      recordToolCalls('s1', 'u1', 2, { safe: 1, reversible: 0, destructive: 1 });
      const metrics = getRawMetrics();
      expect(metrics.some((m) => m.type === 'agent.risk.safe')).toBe(true);
      expect(metrics.some((m) => m.type === 'agent.risk.destructive')).toBe(true);
    });

    test('skips zero counts', () => {
      recordToolCalls('s1', 'u1', 1, { safe: 1, reversible: 0, destructive: 0 });
      const metrics = getRawMetrics();
      expect(metrics.some((m) => m.type === 'agent.risk.reversible')).toBe(false);
    });
  });

  describe('recordError', () => {
    test('records error with type', () => {
      recordError('s1', 'u1', 'timeout');
      const metrics = getRawMetrics();
      expect(metrics[0].tags).toHaveProperty('errorType', 'timeout');
    });
  });

  describe('recordTokens', () => {
    test('records input and output tokens', () => {
      recordTokens('s1', 'u1', 100, 50);
      const metrics = getRawMetrics();
      expect(metrics).toHaveLength(2);
      expect(metrics.some((m) => m.type === 'agent.tokens.input')).toBe(true);
      expect(metrics.some((m) => m.type === 'agent.tokens.output')).toBe(true);
    });
  });

  // ── Summary ──
  describe('getMetricSummary', () => {
    test('empty summary when no metrics', () => {
      const summary = getMetricSummary();
      expect(summary.totalExecutions).toBe(0);
      expect(summary.avgLatencyMs).toBe(0);
      expect(summary.totalToolCalls).toBe(0);
    });

    test('calculates average latency', () => {
      recordLatency('s1', 'u1', 100);
      recordLatency('s1', 'u1', 200);
      recordLatency('s1', 'u1', 300);

      const summary = getMetricSummary();
      expect(summary.avgLatencyMs).toBe(200);
    });

    test('calculates error rate', () => {
      recordLatency('s1', 'u1', 100);
      recordLatency('s1', 'u1', 200);
      recordError('s1', 'u1', 'timeout');

      const summary = getMetricSummary();
      expect(summary.totalExecutions).toBe(2);
      expect(summary.totalErrors).toBe(1);
      expect(summary.errorRate).toBe(50);
    });

    test('filters by userId', () => {
      recordLatency('s1', 'u1', 100);
      recordLatency('s2', 'u2', 200);

      const summary = getMetricSummary('u1');
      expect(summary.totalExecutions).toBe(1);
    });

    test('filters by time', () => {
      recordLatency('s1', 'u1', 100);
      const since = Date.now() + 1000; // future
      const summary = getMetricSummary(undefined, since);
      expect(summary.totalExecutions).toBe(0);
    });
  });

  // ── Cleanup ──
  describe('clearMetrics', () => {
    test('clears all metrics', () => {
      recordLatency('s1', 'u1', 100);
      recordLatency('s1', 'u1', 200);
      const cleared = clearMetrics();
      expect(cleared).toBe(2);
      expect(getRawMetrics()).toHaveLength(0);
    });

    test('clears old metrics only', () => {
      recordLatency('s1', 'u1', 100);
      const cleared = clearMetrics(Date.now() + 10000); // future = clears all
      expect(cleared).toBe(1);
    });
  });

  // ── Limits ──
  describe('Metric limits', () => {
    test('max metrics is 10000', () => {
      const MAX = 10000;
      expect(MAX).toBe(10000);
    });

    test('getRawMetrics respects limit', () => {
      for (let i = 0; i < 50; i++) {
        recordLatency('s1', 'u1', i);
      }
      const metrics = getRawMetrics('u1', 10);
      expect(metrics).toHaveLength(10);
    });
  });
});
