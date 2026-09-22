"use strict";
/**
 * FASE 7C — Agent Metrics
 *
 * Coleta e expõe métricas de execução do agente.
 * Métricas: latência, tool calls, risco, erros, tokens.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.recordMetric = recordMetric;
exports.recordLatency = recordLatency;
exports.recordToolCalls = recordToolCalls;
exports.recordError = recordError;
exports.recordTokens = recordTokens;
exports.getMetricSummary = getMetricSummary;
exports.getRawMetrics = getRawMetrics;
exports.clearMetrics = clearMetrics;
// ─── In-Memory Store ────────────────────────────────────────────────────────
const metrics = [];
const MAX_METRICS = 10000;
// ─── Funções ────────────────────────────────────────────────────────────────
/**
 * Registra uma métrica.
 */
function recordMetric(metric) {
    metrics.push({
        ...metric,
        timestamp: Date.now(),
    });
    // Cleanup lazy
    if (metrics.length > MAX_METRICS) {
        metrics.splice(0, metrics.length - MAX_METRICS);
    }
}
/**
 * Registra latência de execução.
 */
function recordLatency(sessionId, userId, latencyMs) {
    recordMetric({
        sessionId,
        userId,
        type: 'agent.latency',
        value: latencyMs,
    });
}
/**
 * Registra tool calls executados.
 */
function recordToolCalls(sessionId, userId, count, riskSummary) {
    recordMetric({
        sessionId,
        userId,
        type: 'agent.tool_calls',
        value: count,
    });
    if (riskSummary.safe > 0) {
        recordMetric({ sessionId, userId, type: 'agent.risk.safe', value: riskSummary.safe });
    }
    if (riskSummary.reversible > 0) {
        recordMetric({ sessionId, userId, type: 'agent.risk.reversible', value: riskSummary.reversible });
    }
    if (riskSummary.destructive > 0) {
        recordMetric({ sessionId, userId, type: 'agent.risk.destructive', value: riskSummary.destructive });
    }
}
/**
 * Registra erro.
 */
function recordError(sessionId, userId, errorType) {
    recordMetric({
        sessionId,
        userId,
        type: 'agent.error',
        value: 1,
        tags: { errorType },
    });
}
/**
 * Registra tokens usados.
 */
function recordTokens(sessionId, userId, input, output) {
    recordMetric({ sessionId, userId, type: 'agent.tokens.input', value: input });
    recordMetric({ sessionId, userId, type: 'agent.tokens.output', value: output });
}
/**
 * Retorna resumo das métricas.
 */
function getMetricSummary(userId, sinceMs) {
    const filtered = metrics.filter((m) => {
        if (userId && m.userId !== userId)
            return false;
        if (sinceMs && m.timestamp < sinceMs)
            return false;
        return true;
    });
    const latencies = filtered
        .filter((m) => m.type === 'agent.latency')
        .map((m) => m.value);
    const toolCalls = filtered
        .filter((m) => m.type === 'agent.tool_calls')
        .reduce((sum, m) => sum + m.value, 0);
    const safe = filtered.filter((m) => m.type === 'agent.risk.safe').length;
    const reversible = filtered.filter((m) => m.type === 'agent.risk.reversible').length;
    const destructive = filtered.filter((m) => m.type === 'agent.risk.destructive').length;
    const errors = filtered.filter((m) => m.type === 'agent.error').length;
    const executions = latencies.length;
    const inputTokens = filtered
        .filter((m) => m.type === 'agent.tokens.input')
        .reduce((sum, m) => sum + m.value, 0);
    const outputTokens = filtered
        .filter((m) => m.type === 'agent.tokens.output')
        .reduce((sum, m) => sum + m.value, 0);
    return {
        totalExecutions: executions,
        avgLatencyMs: executions > 0
            ? latencies.reduce((a, b) => a + b, 0) / executions
            : 0,
        totalToolCalls: toolCalls,
        riskDistribution: { safe, reversible, destructive },
        totalErrors: errors,
        errorRate: executions > 0 ? (errors / executions) * 100 : 0,
        totalTokens: {
            input: inputTokens,
            output: outputTokens,
            total: inputTokens + outputTokens,
        },
    };
}
/**
 * Retorna métricas brutas (para export).
 */
function getRawMetrics(userId, limit = 100) {
    return metrics
        .filter((m) => (userId ? m.userId === userId : true))
        .slice(-limit);
}
/**
 * Limpa métricas.
 * Se olderThanMs for omitido, limpa TODAS as métricas.
 * Se olderThanMs for fornecido, limpa métricas mais antigas que o threshold.
 */
function clearMetrics(olderThanMs) {
    const before = metrics.length;
    if (olderThanMs === undefined) {
        metrics.length = 0;
        return before;
    }
    const idx = metrics.findIndex((m) => m.timestamp > olderThanMs);
    if (idx >= 0) {
        metrics.splice(0, idx);
    }
    else {
        metrics.length = 0;
    }
    return before - metrics.length;
}
