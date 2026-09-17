/**
 * CostBreaker — circuit breaker por custo/tokens para PROVIDERS PAGOS.
 * - Orçamento por janela (padrão: 1h) em unidades de custo.
 * - Quando estourado, fallback automático para 9Router/gratuito + notificação.
 *
 * Estado mantido em memória por processo + persistido em Supabase (model_usage)
 * para uso distribuído (Vercel Functions).
 */
export declare class CostBreaker {
    private budget;
    private spentPaid;
    private lastFlush;
    private _supabase;
    private supa;
    track(spent: number, provider: string, sessionId: string): Promise<void>;
    canAfford(cost: number): boolean;
    status(): {
        spent: number;
        budget: number;
        open: boolean;
    };
    /** Notificação de fallback (console + podem ser enviadas p/ Supabase). */
    notifyFallback(reason: string): void;
    private persist;
}
export declare const costBreaker: CostBreaker;
