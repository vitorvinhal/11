import { createClient, SupabaseClient } from '@supabase/supabase-js';
import * as crypto from 'crypto';

/**
 * UUID determinístico (v4-like) a partir do sessionId, para caber na coluna
 * `model_sessions.session_id uuid` — antes usava md5-hex (32 chars) que o
 * Postgres rejeitava e a pinagem nunca persistia.
 */
function toUuid(sessionId: string): string {
  const h = crypto.createHash('md5').update(sessionId).digest('hex');
  return `${h.slice(0, 8)}-${h.slice(8, 12)}-4${h.slice(13, 16)}-a${h.slice(17, 20)}-${h.slice(20, 32)}`;
}

/**
 * ProviderPinning — pinagem do provedor por sessão de conversa.
 * No Modo Auto o provedor só troca no fim da sessão OU em falha explícita
 * (timeout / 5xx / rate-limit), registrando o motivo.
 */
export class ProviderPinning {
  private pinMemory = new Map<string, { provider: string; reason?: string }>();

  private _supabase: SupabaseClient | null = null;
  private supa() {
    if (!this._supabase) {
      this._supabase = createClient(
        process.env.SUPABASE_URL ?? '',
        process.env.SUPABASE_SERVICE_ROLE_KEY ?? ''
      );
    }
    return this._supabase;
  }

  currentProvider(sessionId: string): string {
    return this.pinMemory.get(sessionId)?.provider ?? '9router';
  }

  /** Define o provider para a sessão (persistido). */
  async pin(sessionId: string, provider: string, reason: string): Promise<void> {
    this.pinMemory.set(sessionId, { provider, reason });
    const sessionKey = toUuid(sessionId);
    try {
      await this.supa().from('model_sessions').upsert(
        {
          session_id: sessionKey,
          provider,
          reason,
          pinned_until: new Date(Date.now() + 30 * 60_000).toISOString(),
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'session_id' }
      );
    } catch {
      // best-effort
    }
  }

  /** Releitura da persistência ao iniciar processo (Vercel serverless). */
  async hydrate(sessionId: string): Promise<void> {
    if (this.pinMemory.has(sessionId)) return;
    const sessionKey = toUuid(sessionId);
    const { data } = await this.supa()
      .from('model_sessions')
      .select('provider')
      .eq('session_id', sessionKey)
      .single();
    if (data) this.pinMemory.set(sessionId, { provider: (data as { provider: string }).provider });
  }

  resetSession(sessionId: string): void {
    this.pinMemory.delete(sessionId);
  }
}

export const providerPinning = new ProviderPinning();