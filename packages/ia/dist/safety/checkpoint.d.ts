/**
 * FASE 4C — Checkpoint & Rollback Engine
 *
 * Cria checkpoints antes de ações modificadoras e permite rollback.
 * Fluxo: createCheckpoint → execute → (se falhar) restoreCheckpoint
 *
 * Tabelas Supabase necessárias:
 *   checkpoints: id, action_id, tenant_id, user_id, target_type, target_id,
 *                before_state, storage_path, status, expires_at, created_at
 *   pending_actions: id, action, risk_level, user_id, tenant_id, status,
 *                    checkpoint_id, params, created_at, approved_at, approved_by
 */
import { SupabaseClient } from '@supabase/supabase-js';
export type CheckpointStatus = 'active' | 'restored' | 'expired' | 'committed';
export type PendingActionStatus = 'pending' | 'approved' | 'rejected' | 'executed' | 'expired';
export interface Checkpoint {
    id: string;
    actionId: string;
    tenantId?: string;
    userId: string;
    targetType: string;
    targetId: string;
    beforeState: unknown;
    storagePath?: string;
    status: CheckpointStatus;
    expiresAt: Date;
    createdAt: Date;
}
export interface PendingAction {
    id: string;
    action: string;
    riskLevel: string;
    userId: string;
    tenantId?: string;
    status: PendingActionStatus;
    checkpointId?: string;
    params: Record<string, unknown>;
    createdAt: Date;
    approvedAt?: Date;
    approvedBy?: string;
}
export interface CreateCheckpointInput {
    actionId: string;
    tenantId?: string;
    userId: string;
    targetType: string;
    targetId: string;
    beforeState: unknown;
    storagePath?: string;
    /** TTL em milissegundos (padrão: 1 hora) */
    ttlMs?: number;
}
/**
 * Cria um checkpoint antes de uma ação modificadora.
 * Salva o estado ANTES da modificação para permitir rollback.
 */
export declare function createCheckpoint(input: CreateCheckpointInput, sb?: SupabaseClient): Promise<Checkpoint>;
/**
 * Restaura o estado de um checkpoint (rollback).
 * Marca o checkpoint como 'restored' e retorna o estado anterior.
 */
export declare function restoreCheckpoint(checkpointId: string, userId: string, sb?: SupabaseClient): Promise<{
    restored: boolean;
    beforeState?: unknown;
    error?: string;
}>;
/**
 * Registra uma ação pendente de aprovação.
 */
export declare function createPendingAction(action: string, riskLevel: string, userId: string, params: Record<string, unknown>, tenantId?: string, checkpointId?: string, sb?: SupabaseClient): Promise<PendingAction>;
/**
 * Aprova uma ação pendente.
 */
export declare function approveAction(actionId: string, approvedBy: string, sb?: SupabaseClient): Promise<{
    approved: boolean;
    error?: string;
}>;
/**
 * Rejeita uma ação pendente.
 */
export declare function rejectAction(actionId: string, rejectedBy: string, sb?: SupabaseClient): Promise<{
    rejected: boolean;
    error?: string;
}>;
/**
 * Marca uma ação pendente como executada.
 */
export declare function markExecuted(actionId: string, sb?: SupabaseClient): Promise<void>;
