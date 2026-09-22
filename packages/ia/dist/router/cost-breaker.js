"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.costBreaker = exports.CostBreaker = void 0;
const supabase_js_1 = require("@supabase/supabase-js");
/**
 * Converte string arbitária em UUID para uso em colunas uuid.
 */
function toUuid(input) {
    let h = 0;
    for (let i = 0; i < input.length; i++) {
        h = ((h << 5) - h + input.charCodeAt(i)) | 0;
    }
    const hex = Math.abs(h).toString(16).padStart(8, "0").slice(0, 8);
    const r = () => Math.floor(Math.random() * 0x10000)
        .toString(16)
        .padStart(4, "0");
    return `${hex}-${r()}-5${r().slice(1)}-${(Math.floor(Math.random() * 64) | 0x80).toString(16)}${r().slice(1)}-${r()}${r()}`;
}
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
            this._supabase = (0, supabase_js_1.createClient)(process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL ?? "", process.env.SUPABASE_SERVICE_ROLE_KEY ?? "");
        }
        return this._supabase;
    }
    async track(spent, provider, sessionId, inputTokens = 0, outputTokens = 0) {
        if (spent > 0)
            this.spentPaid += spent;
        // Sempre persistir (não limitar a 60s — serverless = processo novo a cada request).
        void this.persist(sessionId, provider, spent, inputTokens, outputTokens);
    }
    canAfford(cost) {
        return this.spentPaid + cost <= this.budget;
    }
    status() {
        return {
            spent: this.spentPaid,
            budget: this.budget,
            open: this.spentPaid < this.budget,
        };
    }
    /** Notificação de fallback (console + podem ser enviadas p/ Supabase). */
    notifyFallback(reason) {
        // TODO: canal de notificação (Push/email) quando orçamento estourar.
        console.warn(`[cost-breaker] fallback para 9Router: ${reason}`);
    }
    async persist(sessionId, provider, spent, inputTokens, outputTokens) {
        try {
            await this.supa()
                .from("model_usage")
                .insert({
                session_id: toUuid(sessionId),
                provider,
                input_tokens: inputTokens,
                output_tokens: outputTokens,
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
