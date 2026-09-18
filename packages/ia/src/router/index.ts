import { CanonicalMessage, GatewayCompletionResult } from "./types";
import { defaultRegistry } from "./adapters";
import { costBreaker } from "./cost-breaker";
import { providerPinning } from "./provider-pinning";
import { sessionWriteQueue } from "./session-write-queue";
import { longContextManager } from "./long-context";

export type GatewayMode = "auto" | "pinned";

/** Perfil de roteamento — reordena os provedores por prioridade. */
export type RoutingProfile = "cost" | "latency" | "quality";

export interface GatewayRequest {
  sessionId: string;
  messages: CanonicalMessage[];
  mode?: GatewayMode;
  provider?: string; // usado apenas quando mode === 'pinned'
  profile?: RoutingProfile; // usado apenas no modo auto
}

/**
 * Perfis de roteamento: reordena o AUTO_ORDER por prioridade do usuário.
 *  - cost:    gratuito → barato (9Router, Gemini, OpenRouter haiku/mini, MiniMax, Anthropic)
 *  - latency: rápido → lento (9Router, Gemini flash, MiniMax, OpenRouter, Anthropic)
 *  - quality: melhor resposta → pior (Anthropic, OpenRouter sonnet, Gemini, 9Router)
 */
const PROFILE_ORDER: Record<RoutingProfile, readonly string[]> = {
  cost: ["9router", "gemini", "openrouter", "minimax", "anthropic"],
  latency: ["9router", "gemini", "minimax", "openrouter", "anthropic"],
  quality: ["anthropic", "openrouter", "gemini", "minimax", "9router"],
};

/**
 * ModelGateway — roteador multi-provedor estilo gateway unificado.
 *  - Formato canônico (role + content blocks + tool_calls/tool_results).
 *  - Modo Auto: pinagem estável na sessão; troca só em falha explícita.
 *  - Circuit breaker de custo para provedores pagos → fallback 9Router.
 *  - Sessões longas: compactação de contexto (sem truncamento brusco).
 *  - Escritas de embeddings serializadas por sessão (mutex).
 */
export class ModelGateway {
  constructor(private readonly registry = defaultRegistry) {}

  async complete(req: GatewayRequest): Promise<GatewayCompletionResult> {
    const { sessionId, profile = "cost" } = req;

    // Compacta contexto longo antes de decidir provedor.
    const { messages } = longContextManager.compact(req.messages);

    if (req.mode === "pinned" && req.provider) {
      return this.invokeWithFallback(req.provider, sessionId, messages);
    }

    const order = PROFILE_ORDER[profile] ?? PROFILE_ORDER.cost;

    await providerPinning.hydrate(sessionId);
    const pinned = providerPinning.currentProvider(sessionId);
    if (pinned) {
      try {
        return await this.invokeWithFallback(pinned, sessionId, messages);
      } catch (err) {
        const reason = (err as Error).message;
        const next = this.nextAvailable(order.filter((p) => p !== pinned));
        await providerPinning.pin(sessionId, next, reason);
        costBreaker.notifyFallback(
          `pin ${pinned} falhou (${reason}) → ${next}`,
        );
        return this.invoke(next, sessionId, messages, reason);
      }
    }

    const lastError = new Error("todos os provedores falharam");
    for (const id of order) {
      const adapter = this.registry.get(id);
      if (!adapter) continue;
      try {
        const result = await adapter.complete(messages, { sessionId });
        await providerPinning.pin(sessionId, adapter.id, "auto");
        return result;
      } catch (err) {
        costBreaker.notifyFallback(`${id} falhou (${(err as Error).message})`);
        lastError.message = `${lastError.message}: ${id}`;
        continue;
      }
    }
    throw lastError;
  }

  /**
   * Modo comparação lado a lado — emite a mesma consulta para até 3 provedores
   * em paralelo. Falhas individuais viram { error } no resultado, não propagam.
   */
  async compare(
    messages: CanonicalMessage[],
    sessionId: string,
    providers: string[],
  ): Promise<
    Array<GatewayCompletionResult | { provider: string; error: string }>
  > {
    const targets = providers.filter((p) => this.registry.get(p)).slice(0, 3);

    const settled = await Promise.allSettled(
      targets.map(async (p) =>
        this.invokeWithCostGuard(p, sessionId, messages),
      ),
    );

    return settled.map((s, i) => {
      if (s.status === "fulfilled") return s.value;
      return { provider: targets[i], error: (s.reason as Error).message };
    });
  }

  /** invoke com guarda de custo p/ provedor pago (compara sem esgotar a sessão). */
  private async invokeWithCostGuard(
    providerId: string,
    sessionId: string,
    messages: CanonicalMessage[],
  ): Promise<GatewayCompletionResult> {
    const adapter = this.registry.get(providerId);
    if (!adapter) throw new Error(`provedor desconhecido: ${providerId}`);
    if (adapter.isPaid && !costBreaker.canAfford(this.estimateCost(messages))) {
      throw new Error("orçamento de provedores pagos esgotado");
    }
    const result = await adapter.complete(messages, { sessionId });
    const cost =
      result.usage.costUnits ||
      (adapter.isPaid ? this.estimateCost(messages) : 0);
    await costBreaker.track(
      cost,
      adapter.id,
      sessionId,
      result.usage.inputTokens,
      result.usage.outputTokens,
    );
    return result;
  }

  private nextAvailable(ids: readonly string[]): string {
    for (const id of ids) if (this.registry.get(id)) return id;
    return "9router";
  }

  /** Estimativa conservadora de costUnits baseada no tamanho do prompt (chars/4 ≈ tokens). */
  private estimateCost(messages: CanonicalMessage[]): number {
    let chars = 0;
    for (const m of messages) {
      for (const c of m.content) chars += c.text?.length ?? 0;
    }
    const tokens = Math.ceil(chars / 4);
    const inTokens = Math.ceil(tokens * 0.5);
    const outTokens = tokens - inTokens;
    return inTokens * 3 + outTokens * 15;
  }

  private async invokeWithFallback(
    providerId: string,
    sessionId: string,
    messages: CanonicalMessage[],
  ): Promise<GatewayCompletionResult> {
    return this.invoke(providerId, sessionId, messages);
  }

  private async invoke(
    providerId: string,
    sessionId: string,
    messages: CanonicalMessage[],
    fallbackReason?: string,
  ): Promise<GatewayCompletionResult> {
    const adapter = this.registry.get(providerId);
    if (!adapter) throw new Error(`provedor desconhecido: ${providerId}`);

    // Estimativa conservadora de custo para provedores pagos (baseado em tamanho do prompt).
    const estimatedCost = adapter.isPaid ? this.estimateCost(messages) : 0;
    if (adapter.isPaid && !costBreaker.canAfford(estimatedCost)) {
      throw new Error("orçamento de provedores pagos esgotado");
    }

    const result = await adapter.complete(messages, { sessionId });
    const cost =
      result.usage.costUnits ||
      (adapter.isPaid ? this.estimateCost(messages) : 0);
    await costBreaker.track(
      cost,
      adapter.id,
      sessionId,
      result.usage.inputTokens,
      result.usage.outputTokens,
    );
    if (fallbackReason) result.fallbackReason = fallbackReason;

    const last = messages[messages.length - 1];
    const text = last?.content.map((c) => c.text ?? "").join(" ");
    if (text) {
      void sessionWriteQueue
        .upsertEmbedding({
          sessionId,
          userId: "session",
          embedding: [0],
          metadata: { provider: adapter.id },
        })
        .catch(() => undefined);
    }

    return result;
  }
}

export const modelGateway = new ModelGateway();
export { costBreaker } from "./cost-breaker";
