/**
 * ProviderPinning — pinagem do provedor por sessão de conversa.
 * No Modo Auto o provedor só troca no fim da sessão OU em falha explícita
 * (timeout / 5xx / rate-limit), registrando o motivo.
 */
export declare class ProviderPinning {
    private pinMemory;
    private _supabase;
    private supa;
    currentProvider(sessionId: string): string;
    /** Define o provider para a sessão (persistido). */
    pin(sessionId: string, provider: string, reason: string): Promise<void>;
    /** Releitura da persistência ao iniciar processo (Vercel serverless). */
    hydrate(sessionId: string): Promise<void>;
    resetSession(sessionId: string): void;
}
export declare const providerPinning: ProviderPinning;
