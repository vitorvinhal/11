"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelGateway = exports.ModelGateway = void 0;
const adapters_1 = require("./adapters");
const cost_breaker_1 = require("./cost-breaker");
const provider_pinning_1 = require("./provider-pinning");
const session_write_queue_1 = require("./session-write-queue");
const long_context_1 = require("./long-context");
/** Providers disponíveis no modo auto, por ordem de preferência. */
const AUTO_ORDER = ['9router', 'gemini', 'anthropic', 'minimax'];
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
        const { sessionId } = req;
        // Compacta contexto longo antes de decidir provedor.
        const { messages } = long_context_1.longContextManager.compact(req.messages);
        if (req.mode === 'pinned' && req.provider) {
            return this.invokeWithFallback(req.provider, sessionId, messages);
        }
        await provider_pinning_1.providerPinning.hydrate(sessionId);
        const pinned = provider_pinning_1.providerPinning.currentProvider(sessionId);
        if (pinned) {
            try {
                return await this.invokeWithFallback(pinned, sessionId, messages);
            }
            catch (err) {
                const reason = err.message;
                const next = this.nextAvailable(AUTO_ORDER.filter((p) => p !== pinned));
                await provider_pinning_1.providerPinning.pin(sessionId, next, reason);
                cost_breaker_1.costBreaker.notifyFallback(`pin ${pinned} falhou (${reason}) → ${next}`);
                return this.invoke(next, sessionId, messages, reason);
            }
        }
        const lastError = new Error('todos os provedores falharam');
        for (const id of AUTO_ORDER) {
            const adapter = this.registry.get(id);
            if (!adapter)
                continue;
            try {
                const result = await adapter.complete(messages, { sessionId });
                await provider_pinning_1.providerPinning.pin(sessionId, adapter.id, 'auto');
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
    nextAvailable(ids) {
        for (const id of ids)
            if (this.registry.get(id))
                return id;
        return '9router';
    }
    async invokeWithFallback(providerId, sessionId, messages) {
        return this.invoke(providerId, sessionId, messages);
    }
    async invoke(providerId, sessionId, messages, fallbackReason) {
        const adapter = this.registry.get(providerId);
        if (!adapter)
            throw new Error(`provedor desconhecido: ${providerId}`);
        if (adapter.isPaid && !cost_breaker_1.costBreaker.canAfford(0)) {
            throw new Error('orçamento de provedores pagos esgotado');
        }
        const result = await adapter.complete(messages, { sessionId });
        await cost_breaker_1.costBreaker.track(0, adapter.id, sessionId);
        if (fallbackReason)
            result.fallbackReason = fallbackReason;
        const last = messages[messages.length - 1];
        const text = last?.content.map((c) => c.text ?? '').join(' ');
        if (text) {
            void session_write_queue_1.sessionWriteQueue
                .upsertEmbedding({ sessionId, userId: 'session', embedding: [0], metadata: { provider: adapter.id } })
                .catch(() => undefined);
        }
        return result;
    }
}
exports.ModelGateway = ModelGateway;
exports.modelGateway = new ModelGateway();
