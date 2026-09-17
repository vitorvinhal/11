"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.costBreaker = exports.CostBreaker = void 0;
const supabase_js_1 = require("@supabase/supabase-js");
/**
 * CostBreaker — circuit breaker por custo/tokens para PROVIDERS PAGOS.
 * - Orçamento por janela (padrão: 1h) em unidades de custo.
 * - Quando estourado, fallback automático para 9Router/gratuito + notificação.
 *
 * Estado mantido em memória por processo + persistido em Supabase (model_usage)
 * para uso distribuído (Vercel Functions).
 */
class CostBreaker {
    budget = Number(process.env.PAID_MODEL_DAILY_BUDGET ?? 1.0);
    spentPaid = 0;
    lastFlush = Date.now();
    _supabase = null;
    supa() {
        if (!this._supabase) {
            this._supabase = (0, supabase_js_1.createClient)(process.env.SUPABASE_URL ?? '', process.env.SUPABASE_SERVICE_ROLE_KEY ?? '');
        }
        return this._supabase;
    }
    async track(spent, provider, sessionId) {
        if (spent > 0)
            this.spentPaid += spent;
        if (Date.now() - this.lastFlush > 60_000) {
            this.lastFlush = Date.now();
            void this.persist(sessionId, provider, spent);
        }
    }
    canAfford(cost) {
        return this.spentPaid + cost <= this.budget;
    }
    status() {
        return { spent: this.spentPaid, budget: this.budget, open: this.spentPaid < this.budget };
    }
    /** Notificação de fallback (console + podem ser enviadas p/ Supabase). */
    notifyFallback(reason) {
        // TODO: canal de notificação (Push/email) quando orçamento estourar.
        console.warn(`[cost-breaker] fallback para 9Router: ${reason}`);
    }
    async persist(sessionId, provider, spent) {
        try {
            await this.supa().from('model_usage').insert({
                session_id: sessionId,
                provider,
                input_tokens: 0,
                output_tokens: 0,
                cost_units: spent,
            });
        }
        catch {
            /* persistência é best-effort */
        }
    }
}
exports.CostBreaker = CostBreaker;
exports.costBreaker = new CostBreaker();
