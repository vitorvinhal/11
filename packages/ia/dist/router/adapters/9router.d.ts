import { ProviderAdapter, CanonicalMessage, GatewayCompletionResult } from '../types';
/**
 * NineRouterAdapter — provedor default gratuito (9Router, compatível com OpenAI).
 * Endpoints: 9ROUTER_ENDPOINT (local) com fallback 9ROUTER_TUNNEL (público).
 */
export declare class NineRouterAdapter implements ProviderAdapter {
    readonly id: "9router";
    readonly isPaid = false;
    complete(messages: CanonicalMessage[], _opts: {
        sessionId: string;
        model?: string;
    }): Promise<GatewayCompletionResult>;
}
export declare function nineRouterAdapter(): NineRouterAdapter;
