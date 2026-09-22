/**
 * FASE 7C — Agent Metrics
 *
 * Coleta e expõe métricas de execução do agente.
 * Métricas: latência, tool calls, risco, erros, tokens.
 */
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
export type MetricType = 'agent.latency' | 'agent.tool_calls' | 'agent.risk.safe' | 'agent.risk.reversible' | 'agent.risk.destructive' | 'agent.error' | 'agent.tokens.input' | 'agent.tokens.output' | 'agent.iterations' | 'agent.checkpoint.created' | 'agent.checkpoint.restored' | 'agent.approval.pending' | 'agent.approval.approved' | 'agent.approval.rejected';
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
/**
 * Registra uma métrica.
 */
export declare function recordMetric(metric: Omit<AgentMetric, 'timestamp'>): void;
/**
 * Registra latência de execução.
 */
export declare function recordLatency(sessionId: string, userId: string, latencyMs: number): void;
/**
 * Registra tool calls executados.
 */
export declare function recordToolCalls(sessionId: string, userId: string, count: number, riskSummary: {
    safe: number;
    reversible: number;
    destructive: number;
}): void;
/**
 * Registra erro.
 */
export declare function recordError(sessionId: string, userId: string, errorType: string): void;
/**
 * Registra tokens usados.
 */
export declare function recordTokens(sessionId: string, userId: string, input: number, output: number): void;
/**
 * Retorna resumo das métricas.
 */
export declare function getMetricSummary(userId?: string, sinceMs?: number): MetricSummary;
/**
 * Retorna métricas brutas (para export).
 */
export declare function getRawMetrics(userId?: string, limit?: number): AgentMetric[];
/**
 * Limpa métricas.
 * Se olderThanMs for omitido, limpa TODAS as métricas.
 * Se olderThanMs for fornecido, limpa métricas mais antigas que o threshold.
 */
export declare function clearMetrics(olderThanMs?: number): number;
