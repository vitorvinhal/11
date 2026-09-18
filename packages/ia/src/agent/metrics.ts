/**
 * FASE 7C — Agent Metrics
 *
 * Coleta e expõe métricas de execução do agente.
 * Métricas: latência, tool calls, risco, erros, tokens.
 */

// ─── Tipos ──────────────────────────────────────────────────────────────────

export interface AgentMetric {
  /** Timestamp da métrica */
  timestamp: number;
  /** ID da sessão */
  sessionId: string;
  /** ID do usuário */
  userId: string;
  /** Tipo de métrica */
  type: MetricType;
  /** Valor numérico */
  value: number;
  /** Tags adicionais */
  tags?: Record<string, string>;
}

export type MetricType =
  | 'agent.latency'
  | 'agent.tool_calls'
  | 'agent.risk.safe'
  | 'agent.risk.reversible'
  | 'agent.risk.destructive'
  | 'agent.error'
  | 'agent.tokens.input'
  | 'agent.tokens.output'
  | 'agent.iterations'
  | 'agent.checkpoint.created'
  | 'agent.checkpoint.restored'
  | 'agent.approval.pending'
  | 'agent.approval.approved'
  | 'agent.approval.rejected';

export interface MetricSummary {
  /** Total de execuções */
  totalExecutions: number;
  /** Latência média (ms) */
  avgLatencyMs: number;
  /** Total de tool calls */
  totalToolCalls: number;
  /** Distribuição de risco */
  riskDistribution: {
    safe: number;
    reversible: number;
    destructive: number;
  };
  /** Total de erros */
  totalErrors: number;
  /** Taxa de erro (%) */
  errorRate: number;
  /** Total de tokens */
  totalTokens: {
    input: number;
    output: number;
    total: number;
  };
}

// ─── In-Memory Store ────────────────────────────────────────────────────────

const metrics: AgentMetric[] = [];
const MAX_METRICS = 10000;

// ─── Funções ────────────────────────────────────────────────────────────────

/**
 * Registra uma métrica.
 */
export function recordMetric(metric: Omit<AgentMetric, 'timestamp'>): void {
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
export function recordLatency(
  sessionId: string,
  userId: string,
  latencyMs: number
): void {
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
export function recordToolCalls(
  sessionId: string,
  userId: string,
  count: number,
  riskSummary: { safe: number; reversible: number; destructive: number }
): void {
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
export function recordError(
  sessionId: string,
  userId: string,
  errorType: string
): void {
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
export function recordTokens(
  sessionId: string,
  userId: string,
  input: number,
  output: number
): void {
  recordMetric({ sessionId, userId, type: 'agent.tokens.input', value: input });
  recordMetric({ sessionId, userId, type: 'agent.tokens.output', value: output });
}

/**
 * Retorna resumo das métricas.
 */
export function getMetricSummary(
  userId?: string,
  sinceMs?: number
): MetricSummary {
  const filtered = metrics.filter((m) => {
    if (userId && m.userId !== userId) return false;
    if (sinceMs && m.timestamp < sinceMs) return false;
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
export function getRawMetrics(
  userId?: string,
  limit = 100
): AgentMetric[] {
  return metrics
    .filter((m) => (userId ? m.userId === userId : true))
    .slice(-limit);
}

/**
 * Limpa métricas.
 * Se olderThanMs for omitido, limpa TODAS as métricas.
 * Se olderThanMs for fornecido, limpa métricas mais antigas que o threshold.
 */
export function clearMetrics(olderThanMs?: number): number {
  const before = metrics.length;
  if (olderThanMs === undefined) {
    metrics.length = 0;
    return before;
  }
  const idx = metrics.findIndex((m) => m.timestamp > olderThanMs);
  if (idx >= 0) {
    metrics.splice(0, idx);
  } else {
    metrics.length = 0;
  }
  return before - metrics.length;
}
