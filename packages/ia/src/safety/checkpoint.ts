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

import { createClient, SupabaseClient } from '@supabase/supabase-js';

// ─── Tipos ──────────────────────────────────────────────────────────────────

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

// ─── Configuração ───────────────────────────────────────────────────────────

const DEFAULT_TTL_MS = 60 * 60 * 1000; // 1 hora
const MAX_CHECKPOINTS_PER_USER = 100;

// ─── Funções ────────────────────────────────────────────────────────────────

/**
 * Cria um Supabase client com service role (para operações server-side).
 */
function createServiceClient(): SupabaseClient {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
    process.env.SUPABASE_SERVICE_ROLE_KEY ?? ''
  );
}

/**
 * Cria um checkpoint antes de uma ação modificadora.
 * Salva o estado ANTES da modificação para permitir rollback.
 */
export async function createCheckpoint(
  input: CreateCheckpointInput,
  sb?: SupabaseClient
): Promise<Checkpoint> {
  const client = sb ?? createServiceClient();
  const ttlMs = input.ttlMs ?? DEFAULT_TTL_MS;

  const checkpoint = {
    action_id: input.actionId,
    tenant_id: input.tenantId ?? null,
    user_id: input.userId,
    target_type: input.targetType,
    target_id: input.targetId,
    before_state: JSON.stringify(input.beforeState),
    storage_path: input.storagePath ?? null,
    status: 'active' as const,
    expires_at: new Date(Date.now() + ttlMs).toISOString(),
  };

  const { data, error } = await client
    .from('checkpoints')
    .insert(checkpoint)
    .select()
    .single();

  if (error) throw new Error(`Falha ao criar checkpoint: ${error.message}`);

  // Limpar checkpoints expirados do usuário (lazy cleanup)
  cleanupExpiredCheckpoints(input.userId, client).catch(() => {});

  return {
    id: data.id,
    actionId: data.action_id,
    tenantId: data.tenant_id,
    userId: data.user_id,
    targetType: data.target_type,
    targetId: data.target_id,
    beforeState: JSON.parse(data.before_state),
    storagePath: data.storage_path,
    status: data.status,
    expiresAt: new Date(data.expires_at),
    createdAt: new Date(data.created_at),
  };
}

/**
 * Restaura o estado de um checkpoint (rollback).
 * Marca o checkpoint como 'restored' e retorna o estado anterior.
 */
export async function restoreCheckpoint(
  checkpointId: string,
  userId: string,
  sb?: SupabaseClient
): Promise<{ restored: boolean; beforeState?: unknown; error?: string }> {
  const client = sb ?? createServiceClient();

  // Buscar checkpoint
  const { data: cp, error: fetchError } = await client
    .from('checkpoints')
    .select('*')
    .eq('id', checkpointId)
    .eq('user_id', userId) // ownership check
    .single();

  if (fetchError || !cp) {
    return { restored: false, error: 'Checkpoint não encontrado' };
  }

  if (cp.status !== 'active') {
    return { restored: false, error: `Checkpoint já está em status: ${cp.status}` };
  }

  if (new Date(cp.expires_at) < new Date()) {
    return { restored: false, error: 'Checkpoint expirado' };
  }

  // Marcar como restored
  const { error: updateError } = await client
    .from('checkpoints')
    .update({ status: 'restored' })
    .eq('id', checkpointId);

  if (updateError) {
    return { restored: false, error: `Falha ao atualizar checkpoint: ${updateError.message}` };
  }

  return {
    restored: true,
    beforeState: JSON.parse(cp.before_state),
  };
}

/**
 * Registra uma ação pendente de aprovação.
 */
export async function createPendingAction(
  action: string,
  riskLevel: string,
  userId: string,
  params: Record<string, unknown>,
  tenantId?: string,
  checkpointId?: string,
  sb?: SupabaseClient
): Promise<PendingAction> {
  const client = sb ?? createServiceClient();

  const pending = {
    action,
    risk_level: riskLevel,
    user_id: userId,
    tenant_id: tenantId ?? null,
    status: 'pending' as const,
    checkpoint_id: checkpointId ?? null,
    params: JSON.stringify(params),
  };

  const { data, error } = await client
    .from('pending_actions')
    .insert(pending)
    .select()
    .single();

  if (error) throw new Error(`Falha ao criar ação pendente: ${error.message}`);

  return {
    id: data.id,
    action: data.action,
    riskLevel: data.risk_level,
    userId: data.user_id,
    tenantId: data.tenant_id,
    status: data.status,
    checkpointId: data.checkpoint_id,
    params: JSON.parse(data.params),
    createdAt: new Date(data.created_at),
  };
}

/**
 * Aprova uma ação pendente.
 */
export async function approveAction(
  actionId: string,
  approvedBy: string,
  sb?: SupabaseClient
): Promise<{ approved: boolean; error?: string }> {
  const client = sb ?? createServiceClient();

  const { error } = await client
    .from('pending_actions')
    .update({
      status: 'approved',
      approved_at: new Date().toISOString(),
      approved_by: approvedBy,
    })
    .eq('id', actionId)
    .eq('status', 'pending');

  if (error) return { approved: false, error: error.message };
  return { approved: true };
}

/**
 * Rejeita uma ação pendente.
 */
export async function rejectAction(
  actionId: string,
  rejectedBy: string,
  sb?: SupabaseClient
): Promise<{ rejected: boolean; error?: string }> {
  const client = sb ?? createServiceClient();

  const { error } = await client
    .from('pending_actions')
    .update({
      status: 'rejected',
      approved_at: new Date().toISOString(),
      approved_by: rejectedBy,
    })
    .eq('id', actionId)
    .eq('status', 'pending');

  if (error) return { rejected: false, error: error.message };
  return { rejected: true };
}

/**
 * Marca uma ação pendente como executada.
 */
export async function markExecuted(
  actionId: string,
  sb?: SupabaseClient
): Promise<void> {
  const client = sb ?? createServiceClient();
  await client
    .from('pending_actions')
    .update({ status: 'executed' })
    .eq('id', actionId);
}

/**
 * Limpa checkpoints expirados de um usuário.
 */
async function cleanupExpiredCheckpoints(
  userId: string,
  sb: SupabaseClient
): Promise<void> {
  await sb
    .from('checkpoints')
    .update({ status: 'expired' })
    .eq('user_id', userId)
    .eq('status', 'active')
    .lt('expires_at', new Date().toISOString());
}
