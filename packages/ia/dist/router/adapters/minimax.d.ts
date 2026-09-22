import { ProviderAdapter, CanonicalMessage, GatewayCompletionResult } from '../types';
/**
 * MiniMaxAdapter — acesso direto à API MiniMax (pagante).
 */
export declare class MiniMaxAdapter implements ProviderAdapter {
    readonly id: "minimax";
    readonly isPaid = true;
    complete(messages: CanonicalMessage[], _opts: {
        sessionId: string;
        model?: string;
    }): Promise<GatewayCompletionResult>;
}
export declare function minimaxAdapter(): MiniMaxAdapter;
