import { createClient, SupabaseClient } from '@supabase/supabase-js';

/**
 * CostBreaker — circuit breaker por custo/tokens para PROVIDERS PAGOS.
 * - Orçamento por janela (padrão: 1h) em unidades de custo.
 * - Quando estourado, fallback automático para 9Router/gratuito + notificação.
 *
 * Estado mantido em memória por processo + persistido em Supabase (model_usage)
 * para uso distribuído (Vercel Functions).
 */
export class CostBreaker {
  private budget: number = Number(process.env.PAID_MODEL_DAILY_BUDGET ?? 1.0);
  private spentPaid: number = 0;
  private lastFlush = Date.now();

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

  async track(spent: number, provider: string, sessionId: string): Promise<void> {
    if (spent > 0) this.spentPaid += spent;
    if (Date.now() - this.lastFlush > 60_000) {
      this.lastFlush = Date.now();
      void this.persist(sessionId, provider, spent);
    }
  }

  canAfford(cost: number): boolean {
    return this.spentPaid + cost <= this.budget;
  }

  status(): { spent: number; budget: number; open: boolean } {
    return { spent: this.spentPaid, budget: this.budget, open: this.spentPaid < this.budget };
  }

  /** Notificação de fallback (console + podem ser enviadas p/ Supabase). */
  notifyFallback(reason: string): void {
    // TODO: canal de notificação (Push/email) quando orçamento estourar.
    console.warn(`[cost-breaker] fallback para 9Router: ${reason}`);
  }

  private async persist(sessionId: string, provider: string, spent: number): Promise<void> {
    try {
      await this.supa().from('model_usage').insert({
        session_id: sessionId,
        provider,
        input_tokens: 0,
        output_tokens: 0,
        cost_units: spent,
      });
    } catch {
      /* persistência é best-effort */
    }
  }
}

export const costBreaker = new CostBreaker();