/**
 * FASE 4B — Dry-Run Engine
 *
 * Simula ações antes de executá-las de verdade.
 * Regra: quando não for possível simular → simulation_status = 'unavailable'.
 * NUNCA fingir que simulou.
 *
 * Tipos de simulação:
 *   SQL      → BEGIN + SELECT + ROLLBACK (transação real, sem commit)
 *   CLI      → --dry-run quando suportado (git, docker, etc.)
 *   Filesystem → verificação de permissão + path (sem escrita real)
 *   Network  → HEAD request ou validação de URL
 */
export type SimulationStatus = 'simulated' | 'unavailable' | 'partial' | 'error';
export interface DryRunResult {
    /** Ação que foi simulada */
    action: string;
    /** Status da simulação */
    status: SimulationStatus;
    /** Se a ação real seria bem-sucedida */
    wouldSucceed: boolean;
    /** Resultado da simulação (quando disponível) */
    simulationResult?: unknown;
    /** Erro durante simulação */
    error?: string;
    /** Se a simulação é completa ou parcial */
    coverage: 'full' | 'partial' | 'none';
    /** Tempo da simulação em ms */
    durationMs: number;
}
export interface DryRunContext {
    /** Usuário que solicitou a ação */
    userId: string;
    /** Tenant */
    tenantId?: string;
    /** Diretório de trabalho */
    cwd?: string;
    /** Parâmetros da ação */
    params: Record<string, unknown>;
}
/**
 * Executa dry-run de uma ação.
 * Determina o tipo de simulação baseado no prefixo da ação.
 */
export declare function dryRun(action: string, ctx: DryRunContext): Promise<DryRunResult>;
