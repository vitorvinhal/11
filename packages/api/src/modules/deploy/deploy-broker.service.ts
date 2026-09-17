import { Injectable } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import * as crypto from 'crypto';

export type DeployAction = 'vercel' | 'supabase' | 'database' | 'web';

export interface DeployRequestInput {
  action: DeployAction;
  target?: string;
  metadata?: Record<string, unknown>;
}

const TOKEN_TTL_MS = Number(process.env.DEPLOY_TOKEN_TTL_MS ?? 5 * 60 * 1000); // 5 min
const CIRCUIT_MAX_PER_HOUR = Number(process.env.DEPLOY_CIRCUIT_MAX_PER_HOUR ?? 5);

/**
 * DeployBrokerService — substitui credenciais estáticas por tokens de curta duração
 * e escopo mínimo. Aprovação humana é obrigatória antes de qualquer release.
 * Inclui circuit breaker (máx. N deploys/hora) e rollback de um clique.
 */
@Injectable()
export class DeployBrokerService {
  private readonly supabase: SupabaseClient;
  private readonly circuit = new Map<string, number[]>();

  constructor() {
    this.supabase = createClient(
      process.env.SUPABASE_URL ?? '',
      process.env.SUPABASE_SERVICE_ROLE_KEY ?? ''
    );
  }

  /** 1) IA solicita deploy: cria request pendente. */
  async requestDeploy(userId: string, input: DeployRequestInput) {
    const { data, error } = await this.supabase
      .from('deploy_requests')
      .insert({ user_id: userId, action: input.action, target: input.target ?? null, metadata: input.metadata ?? {} })
      .select()
      .single();
    if (error) throw new Error(`Falha ao criar request: ${error.message}`);
    return { requestId: (data as { id: string }).id, status: 'pending', message: 'Aguardando aprovação humana' };
  }

  /** 2) Humano aprova: emite token curto, escopo mínimo, com hash armazenado. */
  async approveDeploy(requestId: string, approverId: string): Promise<{ token: string; expiresInMs: number }> {
    const { data: req, error: reqErr } = await this.supabase
      .from('deploy_requests')
      .select('*')
      .eq('id', requestId)
      .single();
    if (reqErr || !req) throw new Error('Request não encontrado');
    if ((req as { status: string }).status !== 'pending') throw new Error('Request já decidido');

    // Circuit breaker: ignora se já estourou o limite por hora.
    this.assertNotTripped();

    const token = crypto.randomBytes(32).toString('hex');
    const tokenHash = crypto.createHash('sha256').update(token).digest('hex');
    const expiresAt = new Date(Date.now() + TOKEN_TTL_MS).toISOString();
    const scope = (req as { action: DeployAction }).action;

    await this.supabase.from('deploy_tokens').insert({
      request_id: requestId,
      scope,
      token_hash: tokenHash,
      expires_at: expiresAt,
    });
    await this.supabase
      .from('deploy_requests')
      .update({ status: 'approved', decided_by: approverId, decided_at: new Date().toISOString() })
      .eq('id', requestId);

    this.recordDeploy(requestId);

    return { token, expiresInMs: TOKEN_TTL_MS };
  }

  /** 3) O token gerado permite 1 execução de release (bandeira `used`). */
  async executeWithToken(
    token: string,
    runner: (scope: DeployAction) => Promise<{ ok: boolean; revision?: string }>
  ): Promise<unknown> {
    const tokenHash = crypto.createHash('sha256').update(token).digest('hex');
    const { data, error } = await this.supabase
      .from('deploy_tokens')
      .select('*')
      .eq('token_hash', tokenHash)
      .single();
    if (error || !data) throw new Error('Token inválido');
    const row = data as { used: boolean; expires_at: string; request_id: string; scope: DeployAction };
    if (row.used) throw new Error('Token já utilizado');
    if (new Date(row.expires_at).getTime() < Date.now()) throw new Error('Token expirado');

    const result = await runner(row.scope);

    await this.supabase.from('deploy_tokens').update({ used: true }).eq('token_hash', tokenHash);
    await this.supabase.from('deploy_history').insert({
      request_id: row.request_id,
      action: row.scope,
      revision: result.revision ?? null,
      status: result.ok ? 'done' : 'failed',
      finished_at: new Date().toISOString(),
    });
    return result;
  }

  /** 4) Rollback de um clique: regrava deploy anterior (revision) no histórico. */
  async rollback(requestId: string): Promise<{ ok: boolean; revision: string | null }> {
    const { data, error } = await this.supabase
      .from('deploy_history')
      .select('*')
      .eq('request_id', requestId)
      .order('created_at', { ascending: false })
      .limit(2);
    if (error || !data || data.length < 2) {
      throw new Error('Sem revisão anterior para rollback');
    }
    const prev = data[1] as { revision: string | null; action: string };
    await this.supabase.from('deploy_history').insert({
      action: prev.action,
      target: 'production',
      revision: prev.revision ?? null,
      status: 'rollback',
      finished_at: new Date().toISOString(),
    });
    return { ok: true, revision: prev.revision };
  }

  /** Circuit breaker: máximo N deploys por janela de 1h. */
  private assertNotTripped(): void {
    const now = Date.now();
    const keys = Array.from(this.circuit.keys());
    for (const k of keys) {
      this.circuit.set(k, (this.circuit.get(k) ?? []).filter((t) => now - t < 3600_000));
    }
    const windowKey = new Date(Math.floor(now / 3600_000) * 3600_000).toISOString();
    const count = this.circuit.get(windowKey)?.length ?? 0;
    if (count >= CIRCUIT_MAX_PER_HOUR) {
      throw new Error(`Circuit breaker: limite de ${CIRCUIT_MAX_PER_HOUR} deploys/hora atingido`);
    }
  }

  private recordDeploy(requestId: string): void {
    const key = new Date().toISOString().slice(0, 13); // por hora
    const arr = this.circuit.get(key) ?? [];
    (arr as unknown as string[]).push(requestId);
    this.circuit.set(key, arr);
  }

  circuitStatus(): { maxPerHour: number; recent: Record<string, number> } {
    const recent: Record<string, number> = {};
    for (const [k, v] of this.circuit.entries()) recent[k] = v.length;
    return { maxPerHour: CIRCUIT_MAX_PER_HOUR, recent };
  }
}