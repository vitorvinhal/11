import { ProviderAdapter, CanonicalMessage, GatewayCompletionResult } from "../types";
/**
 * NineRouterAdapter — provedor default gratuito (9Router, compatível com OpenAI).
 * Endpoints: ROUTER9_ENDPOINT (local) com fallback ROUTER9_TUNNEL (público).
 * Suporta function calling (tools no body + parse de tool_calls).
 */
export declare class NineRouterAdapter implements ProviderAdapter {
    readonly id: "9router";
    readonly isPaid = false;
    complete(messages: CanonicalMessage[], opts: {
        sessionId: string;
        model?: string;
        tools?: unknown[];
    }): Promise<GatewayCompletionResult>;
}
export declare function nineRouterAdapter(): NineRouterAdapter;
