import { CanonicalMessage, GatewayCompletionResult } from "./types";
export type GatewayMode = "auto" | "pinned";
/** Perfil de roteamento — reordena os provedores por prioridade. */
export type RoutingProfile = "cost" | "latency" | "quality";
export interface GatewayRequest {
    sessionId: string;
    messages: CanonicalMessage[];
    mode?: GatewayMode;
    provider?: string;
    profile?: RoutingProfile;
    /** Definições de tools (OpenAI format) — enviadas ao provedor se suportado. */
    tools?: unknown[];
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
    /**
     * Modo comparação lado a lado — emite a mesma consulta para até 3 provedores
     * em paralelo. Falhas individuais viram { error } no resultado, não propagam.
     */
    compare(messages: CanonicalMessage[], sessionId: string, providers: string[]): Promise<Array<GatewayCompletionResult | {
        provider: string;
        error: string;
    }>>;
    /** invoke com guarda de custo p/ provedor pago (compara sem esgotar a sessão). */
    private invokeWithCostGuard;
    private nextAvailable;
    /** Estimativa conservadora de costUnits baseada no tamanho do prompt (chars/4 ≈ tokens). */
    private estimateCost;
    private invokeWithFallback;
    private invoke;
}
export declare const modelGateway: ModelGateway;
export { costBreaker } from "./cost-breaker";
