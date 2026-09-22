/**
 * FASE 5B — ToolExecutor
 *
 * Pipeline completo de execução de tools com safety integrado.
 * Diferente do agent-core (que é leve), aqui temos:
 *   - Checkpoint/rollback automático para ações REVERSIBLE
 *   - Pending actions para ações DESTRUCTIVE
 *   - Audit log em tempo real
 *   - Retry com backoff
 */
import type { RiskLevel } from '../safety/risk-engine';
import type { DryRunResult } from '../safety/dry-run';
import type { Checkpoint } from '../safety/checkpoint';
import { SupabaseClient } from '@supabase/supabase-js';
export type ExecutionStatus = 'pending' | 'simulating' | 'checkpointed' | 'executing' | 'completed' | 'failed' | 'rolled_back' | 'awaiting_approval';
export interface ExecutionContext {
    userId: string;
    tenantId?: string;
    sessionId: string;
    /** Se true, cria checkpoint antes de ações reversíveis */
    enableCheckpoints?: boolean;
    /** Se true, ações destrutivas ficam pendentes de aprovação */
    enablePendingActions?: boolean;
}
export interface ExecutionResult {
    status: ExecutionStatus;
    toolName: string;
    arguments: Record<string, unknown>;
    result?: unknown;
    error?: string;
    checkpoint?: Checkpoint;
    dryRun?: DryRunResult;
    riskLevel: RiskLevel;
    durationMs: number;
}
/**
 * Executa uma tool com pipeline completo de segurança.
 *
 * Pipeline:
 *   1. Classificar risco
 *   2. Dry-run (se DESTRUCTIVE ou REVERSIBLE)
 *   3. Checkpoint (se REVERSIBLE e enableCheckpoints)
 *   4. Executar com retry
 *   5. Rollback (se falhar e checkpoint existe)
 */
export declare function executeTool(toolName: string, args: Record<string, unknown>, ctx: ExecutionContext, sb?: SupabaseClient): Promise<ExecutionResult>;
