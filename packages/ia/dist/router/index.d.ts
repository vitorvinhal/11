import { CanonicalMessage, GatewayCompletionResult } from './types';
export type GatewayMode = 'auto' | 'pinned';
export interface GatewayRequest {
    sessionId: string;
    messages: CanonicalMessage[];
    mode?: GatewayMode;
    provider?: string;
}
/**
 * ModelGateway — roteador multi-provedor estilo gateway unificado.
 *  - Formato canônico (role + content blocks + tool_calls/tool_results).
 *  - Modo Auto: pinagem estável na sessão; troca só em falha explícita.
 *  - Circuit breaker de custo para provedores pagos → fallback 9Router.
 *  - Sessões longas: compactação de contexto (sem truncamento brusco).
 *  - Escritas de embeddings serializadas por sessão (mutex).
 */
export declare class ModelGateway {
    private readonly registry;
    constructor(registry?: import("./adapters").AdapterRegistry);
    complete(req: GatewayRequest): Promise<GatewayCompletionResult>;
    private nextAvailable;
    private invokeWithFallback;
    private invoke;
}
export declare const modelGateway: ModelGateway;
