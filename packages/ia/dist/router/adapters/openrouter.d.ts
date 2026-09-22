import { ProviderAdapter, CanonicalMessage, GatewayCompletionResult } from "../types";
/**
 * OpenRouterAdapter — provedor agregador premium (OpenRouter).
 * Fallback transparente entre modelos listados em OPENROUTER_ALLOWED_MODELS.
 * Custos reais: tokens × preço/1M proposto pela plataforma (estimativa por modelo).
 */
export declare class OpenRouterAdapter implements ProviderAdapter {
    readonly id: "openrouter";
    readonly isPaid = true;
    /** preços USD por 1M tokens (input/output) — estimativa por família. */
    private static PRICING;
    private priceFor;
    complete(messages: CanonicalMessage[], opts: {
        sessionId: string;
        model?: string;
    }): Promise<GatewayCompletionResult>;
}
export declare function openRouterAdapter(): OpenRouterAdapter;
