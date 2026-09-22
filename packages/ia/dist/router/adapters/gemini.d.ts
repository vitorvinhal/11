import { ProviderAdapter, CanonicalMessage, GatewayCompletionResult } from '../types';
/**
 * GeminiAdapter — Google Gemini direto (free tier disponível).
 */
export declare class GeminiAdapter implements ProviderAdapter {
    readonly id: "gemini";
    readonly isPaid = false;
    complete(messages: CanonicalMessage[], _opts: {
        sessionId: string;
        model?: string;
    }): Promise<GatewayCompletionResult>;
}
export declare function geminiAdapter(): GeminiAdapter;
