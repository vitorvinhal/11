"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.costBreaker = exports.modelGateway = exports.ModelGateway = void 0;
const adapters_1 = require("./adapters");
const cost_breaker_1 = require("./cost-breaker");
const provider_pinning_1 = require("./provider-pinning");
const session_write_queue_1 = require("./session-write-queue");
const long_context_1 = require("./long-context");
/**
 * Perfis de roteamento: reordena o AUTO_ORDER por prioridade do usuário.
 *  - cost:    gratuito → barato (9Router, Gemini, OpenRouter haiku/mini, MiniMax, Anthropic)
 *  - latency: rápido → lento (9Router, Gemini flash, MiniMax, OpenRouter, Anthropic)
 *  - quality: melhor resposta → pior (Anthropic, OpenRouter sonnet, Gemini, 9Router)
 */
const PROFILE_ORDER = {
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
class ModelGateway {
    registry;
    constructor(registry = adapters_1.defaultRegistry) {
        this.registry = registry;
    }
    async complete(req) {
        const { sessionId, profile = "cost", tools } = req;
        // Compacta contexto longo antes de decidir provedor.
        const { messages } = long_context_1.longContextManager.compact(req.messages);
        if (req.mode === "pinned" && req.provider) {
            return this.invokeWithFallback(req.provider, sessionId, messages, tools);
        }
        const order = PROFILE_ORDER[profile] ?? PROFILE_ORDER.cost;
        await provider_pinning_1.providerPinning.hydrate(sessionId);
        const pinned = provider_pinning_1.providerPinning.currentProvider(sessionId);
        if (pinned) {
            try {
                return await this.invokeWithFallback(pinned, sessionId, messages);
            }
            catch (err) {
                const reason = err.message;
                const next = this.nextAvailable(order.filter((p) => p !== pinned));
                await provider_pinning_1.providerPinning.pin(sessionId, next, reason);
                cost_breaker_1.costBreaker.notifyFallback(`pin ${pinned} falhou (${reason}) → ${next}`);
                return this.invoke(next, sessionId, messages, reason, tools);
            }
        }
        const lastError = new Error("todos os provedores falharam");
        for (const id of order) {
            const adapter = this.registry.get(id);
            if (!adapter)
                continue;
            try {
                const result = await adapter.complete(messages, { sessionId, tools });
                await provider_pinning_1.providerPinning.pin(sessionId, adapter.id, "auto");
                return result;
            }
            catch (err) {
                cost_breaker_1.costBreaker.notifyFallback(`${id} falhou (${err.message})`);
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
    async compare(messages, sessionId, providers) {
        const targets = providers.filter((p) => this.registry.get(p)).slice(0, 3);
        const settled = await Promise.allSettled(targets.map(async (p) => this.invokeWithCostGuard(p, sessionId, messages)));
        return settled.map((s, i) => {
            if (s.status === "fulfilled")
                return s.value;
            return { provider: targets[i], error: s.reason.message };
        });
    }
    /** invoke com guarda de custo p/ provedor pago (compara sem esgotar a sessão). */
    async invokeWithCostGuard(providerId, sessionId, messages) {
        const adapter = this.registry.get(providerId);
        if (!adapter)
            throw new Error(`provedor desconhecido: ${providerId}`);
        if (adapter.isPaid && !cost_breaker_1.costBreaker.canAfford(this.estimateCost(messages))) {
            throw new Error("orçamento de provedores pagos esgotado");
        }
        const result = await adapter.complete(messages, { sessionId });
        const cost = result.usage.costUnits ||
            (adapter.isPaid ? this.estimateCost(messages) : 0);
        await cost_breaker_1.costBreaker.track(cost, adapter.id, sessionId, result.usage.inputTokens, result.usage.outputTokens);
        return result;
    }
    nextAvailable(ids) {
        for (const id of ids)
            if (this.registry.get(id))
                return id;
        return "9router";
    }
    /** Estimativa conservadora de costUnits baseada no tamanho do prompt (chars/4 ≈ tokens). */
    estimateCost(messages) {
        let chars = 0;
        for (const m of messages) {
            for (const c of m.content)
                chars += c.text?.length ?? 0;
        }
        const tokens = Math.ceil(chars / 4);
        const inTokens = Math.ceil(tokens * 0.5);
        const outTokens = tokens - inTokens;
        return inTokens * 3 + outTokens * 15;
    }
    async invokeWithFallback(providerId, sessionId, messages, tools) {
        return this.invoke(providerId, sessionId, messages, undefined, tools);
    }
    async invoke(providerId, sessionId, messages, fallbackReason, tools) {
        const adapter = this.registry.get(providerId);
        if (!adapter)
            throw new Error(`provedor desconhecido: ${providerId}`);
        // Estimativa conservadora de custo para provedores pagos (baseado em tamanho do prompt).
        const estimatedCost = adapter.isPaid ? this.estimateCost(messages) : 0;
        if (adapter.isPaid && !cost_breaker_1.costBreaker.canAfford(estimatedCost)) {
            throw new Error("orçamento de provedores pagos esgotado");
        }
        const result = await adapter.complete(messages, { sessionId, tools });
        const cost = result.usage.costUnits ||
            (adapter.isPaid ? this.estimateCost(messages) : 0);
        await cost_breaker_1.costBreaker.track(cost, adapter.id, sessionId, result.usage.inputTokens, result.usage.outputTokens);
        if (fallbackReason)
            result.fallbackReason = fallbackReason;
        const last = messages[messages.length - 1];
        const text = last?.content.map((c) => c.text ?? "").join(" ");
        if (text) {
            void session_write_queue_1.sessionWriteQueue
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
exports.ModelGateway = ModelGateway;
exports.modelGateway = new ModelGateway();
var cost_breaker_2 = require("./cost-breaker");
Object.defineProperty(exports, "costBreaker", { enumerable: true, get: function () { return cost_breaker_2.costBreaker; } });
