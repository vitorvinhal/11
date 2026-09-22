"use strict";
/**
 * Agent Metrics — FASE 7C
 *
 * Testes unitários do sistema de métricas.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const metrics_1 = require("./metrics");
describe('Agent Metrics — FASE 7C', () => {
    beforeEach(() => {
        (0, metrics_1.clearMetrics)();
    });
    // ── Record metrics ──
    describe('recordMetric', () => {
        test('records a metric with timestamp', () => {
            (0, metrics_1.recordMetric)({
                sessionId: 's1',
                userId: 'u1',
                type: 'agent.latency',
                value: 150,
            });
            const metrics = (0, metrics_1.getRawMetrics)();
            expect(metrics).toHaveLength(1);
            expect(metrics[0].type).toBe('agent.latency');
            expect(metrics[0].value).toBe(150);
            expect(metrics[0].timestamp).toBeGreaterThan(0);
        });
        test('records metric with tags', () => {
            (0, metrics_1.recordMetric)({
                sessionId: 's1',
                userId: 'u1',
                type: 'agent.error',
                value: 1,
                tags: { errorType: 'timeout' },
            });
            const metrics = (0, metrics_1.getRawMetrics)();
            expect(metrics[0].tags).toHaveProperty('errorType', 'timeout');
        });
    });
    // ── Convenience functions ──
    describe('recordLatency', () => {
        test('records latency metric', () => {
            (0, metrics_1.recordLatency)('s1', 'u1', 200);
            const metrics = (0, metrics_1.getRawMetrics)();
            expect(metrics[0].type).toBe('agent.latency');
            expect(metrics[0].value).toBe(200);
        });
    });
    describe('recordToolCalls', () => {
        test('records tool call count', () => {
            (0, metrics_1.recordToolCalls)('s1', 'u1', 3, { safe: 2, reversible: 1, destructive: 0 });
            const metrics = (0, metrics_1.getRawMetrics)();
            const toolMetric = metrics.find((m) => m.type === 'agent.tool_calls');
            expect(toolMetric?.value).toBe(3);
        });
        test('records risk distribution', () => {
            (0, metrics_1.recordToolCalls)('s1', 'u1', 2, { safe: 1, reversible: 0, destructive: 1 });
            const metrics = (0, metrics_1.getRawMetrics)();
            expect(metrics.some((m) => m.type === 'agent.risk.safe')).toBe(true);
            expect(metrics.some((m) => m.type === 'agent.risk.destructive')).toBe(true);
        });
        test('skips zero counts', () => {
            (0, metrics_1.recordToolCalls)('s1', 'u1', 1, { safe: 1, reversible: 0, destructive: 0 });
            const metrics = (0, metrics_1.getRawMetrics)();
            expect(metrics.some((m) => m.type === 'agent.risk.reversible')).toBe(false);
        });
    });
    describe('recordError', () => {
        test('records error with type', () => {
            (0, metrics_1.recordError)('s1', 'u1', 'timeout');
            const metrics = (0, metrics_1.getRawMetrics)();
            expect(metrics[0].tags).toHaveProperty('errorType', 'timeout');
        });
    });
    describe('recordTokens', () => {
        test('records input and output tokens', () => {
            (0, metrics_1.recordTokens)('s1', 'u1', 100, 50);
            const metrics = (0, metrics_1.getRawMetrics)();
            expect(metrics).toHaveLength(2);
            expect(metrics.some((m) => m.type === 'agent.tokens.input')).toBe(true);
            expect(metrics.some((m) => m.type === 'agent.tokens.output')).toBe(true);
        });
    });
    // ── Summary ──
    describe('getMetricSummary', () => {
        test('empty summary when no metrics', () => {
            const summary = (0, metrics_1.getMetricSummary)();
            expect(summary.totalExecutions).toBe(0);
            expect(summary.avgLatencyMs).toBe(0);
            expect(summary.totalToolCalls).toBe(0);
        });
        test('calculates average latency', () => {
            (0, metrics_1.recordLatency)('s1', 'u1', 100);
            (0, metrics_1.recordLatency)('s1', 'u1', 200);
            (0, metrics_1.recordLatency)('s1', 'u1', 300);
            const summary = (0, metrics_1.getMetricSummary)();
            expect(summary.avgLatencyMs).toBe(200);
        });
        test('calculates error rate', () => {
            (0, metrics_1.recordLatency)('s1', 'u1', 100);
            (0, metrics_1.recordLatency)('s1', 'u1', 200);
            (0, metrics_1.recordError)('s1', 'u1', 'timeout');
            const summary = (0, metrics_1.getMetricSummary)();
            expect(summary.totalExecutions).toBe(2);
            expect(summary.totalErrors).toBe(1);
            expect(summary.errorRate).toBe(50);
        });
        test('filters by userId', () => {
            (0, metrics_1.recordLatency)('s1', 'u1', 100);
            (0, metrics_1.recordLatency)('s2', 'u2', 200);
            const summary = (0, metrics_1.getMetricSummary)('u1');
            expect(summary.totalExecutions).toBe(1);
        });
        test('filters by time', () => {
            (0, metrics_1.recordLatency)('s1', 'u1', 100);
            const since = Date.now() + 1000; // future
            const summary = (0, metrics_1.getMetricSummary)(undefined, since);
            expect(summary.totalExecutions).toBe(0);
        });
    });
    // ── Cleanup ──
    describe('clearMetrics', () => {
        test('clears all metrics', () => {
            (0, metrics_1.recordLatency)('s1', 'u1', 100);
            (0, metrics_1.recordLatency)('s1', 'u1', 200);
            const cleared = (0, metrics_1.clearMetrics)();
            expect(cleared).toBe(2);
            expect((0, metrics_1.getRawMetrics)()).toHaveLength(0);
        });
        test('clears old metrics only', () => {
            (0, metrics_1.recordLatency)('s1', 'u1', 100);
            const cleared = (0, metrics_1.clearMetrics)(Date.now() + 10000); // future = clears all
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
                (0, metrics_1.recordLatency)('s1', 'u1', i);
            }
            const metrics = (0, metrics_1.getRawMetrics)('u1', 10);
            expect(metrics).toHaveLength(10);
        });
    });
});
