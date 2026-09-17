import { CanonicalMessage, GatewayCompletionResult } from './types';
import { defaultRegistry } from './adapters';
import { costBreaker } from './cost-breaker';
import { providerPinning } from './provider-pinning';
import { sessionWriteQueue } from './session-write-queue';
import { longContextManager } from './long-context';

export type GatewayMode = 'auto' | 'pinned';

export interface GatewayRequest {
  sessionId: string;
  messages: CanonicalMessage[];
  mode?: GatewayMode;
  provider?: string; // usado apenas quando mode === 'pinned'
}

/** Providers disponíveis no modo auto, por ordem de preferência. */
const AUTO_ORDER = ['9router', 'gemini', 'anthropic', 'minimax'] as const;

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
    const { sessionId } = req;

    // Compacta contexto longo antes de decidir provedor.
    const { messages } = longContextManager.compact(req.messages);

    if (req.mode === 'pinned' && req.provider) {
      return this.invokeWithFallback(req.provider, sessionId, messages);
    }

    await providerPinning.hydrate(sessionId);
    const pinned = providerPinning.currentProvider(sessionId);
    if (pinned) {
      try {
        return await this.invokeWithFallback(pinned, sessionId, messages);
      } catch (err) {
        const reason = (err as Error).message;
        const next = this.nextAvailable(AUTO_ORDER.filter((p) => p !== pinned));
        await providerPinning.pin(sessionId, next, reason);
        costBreaker.notifyFallback(`pin ${pinned} falhou (${reason}) → ${next}`);
        return this.invoke(next, sessionId, messages, reason);
      }
    }

    const lastError = new Error('todos os provedores falharam');
    for (const id of AUTO_ORDER) {
      const adapter = this.registry.get(id);
      if (!adapter) continue;
      try {
        const result = await adapter.complete(messages, { sessionId });
        await providerPinning.pin(sessionId, adapter.id, 'auto');
        return result;
      } catch (err) {
        costBreaker.notifyFallback(`${id} falhou (${(err as Error).message})`);
        lastError.message = `${lastError.message}: ${id}`;
        continue;
      }
    }
    throw lastError;
  }

  private nextAvailable(ids: readonly string[]): string {
    for (const id of ids) if (this.registry.get(id)) return id;
    return '9router';
  }

  private async invokeWithFallback(
    providerId: string,
    sessionId: string,
    messages: CanonicalMessage[]
  ): Promise<GatewayCompletionResult> {
    return this.invoke(providerId, sessionId, messages);
  }

  private async invoke(
    providerId: string,
    sessionId: string,
    messages: CanonicalMessage[],
    fallbackReason?: string
  ): Promise<GatewayCompletionResult> {
    const adapter = this.registry.get(providerId);
    if (!adapter) throw new Error(`provedor desconhecido: ${providerId}`);

    if (adapter.isPaid && !costBreaker.canAfford(0)) {
      throw new Error('orçamento de provedores pagos esgotado');
    }

    const result = await adapter.complete(messages, { sessionId });
    await costBreaker.track(0, adapter.id, sessionId);
    if (fallbackReason) result.fallbackReason = fallbackReason;

    const last = messages[messages.length - 1];
    const text = last?.content.map((c) => c.text ?? '').join(' ');
    if (text) {
      void sessionWriteQueue
        .upsertEmbedding({ sessionId, userId: 'session', embedding: [0], metadata: { provider: adapter.id } })
        .catch(() => undefined);
    }

    return result;
  }
}

export const modelGateway = new ModelGateway();