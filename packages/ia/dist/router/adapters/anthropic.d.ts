import { ProviderAdapter, CanonicalMessage, GatewayCompletionResult } from '../types';
/**
 * AnthropicAdapter — acesso direto à API Anthropic (pagante).
 * Ativado apenas se ANTHROPIC_API_KEY estiver definida.
 */
export declare class AnthropicAdapter implements ProviderAdapter {
    readonly id: "anthropic";
    readonly isPaid = true;
    complete(messages: CanonicalMessage[], _opts: {
        sessionId: string;
        model?: string;
    }): Promise<GatewayCompletionResult>;
}
export declare function anthropicAdapter(): AnthropicAdapter;
