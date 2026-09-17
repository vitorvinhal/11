import { ProviderAdapter, CanonicalMessage, GatewayCompletionResult } from '../types';
import { parseContentBlocks, textOf } from '../convert';

/**
 * MiniMaxAdapter — acesso direto à API MiniMax (pagante).
 */
export class MiniMaxAdapter implements ProviderAdapter {
  readonly id = 'minimax' as const;
  readonly isPaid = true;

  async complete(
    messages: CanonicalMessage[],
    _opts: { sessionId: string; model?: string }
  ): Promise<GatewayCompletionResult> {
    const apiKey = process.env.MINIMAX_API_KEY;
    if (!apiKey) throw new Error('minimax: chave ausente');
    const model = _opts.model ?? 'abab6.5s-chat';

    const endpoint =
      process.env.MINIMAX_ENDPOINT ?? `https://api.minimax.chat/v1/text/chatcompletion_v2?GroupId=${process.env.MINIMAX_GROUP_ID ?? ''}`;

    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'content-type': 'application/json', authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({
        model,
        messages: messages.map((m) => ({ role: m.role, content: textOf(m) })),
      }),
      signal: AbortSignal.timeout(60_000),
    });
    if (!res.ok) throw new Error(`minimax ${res.status}`);

    const data = (await res.json()) as any;
    const text = data.choices?.[0]?.message?.content ?? '';

    return {
      provider: 'minimax',
      model,
      message: { role: 'assistant', content: parseContentBlocks(text) },
      usage: { inputTokens: data.inputTokenCount ?? 0, outputTokens: data.outputTokenCount ?? 0, costUnits: 0 },
    };
  }
}

let _instance: MiniMaxAdapter | null = null;
export function minimaxAdapter(): MiniMaxAdapter {
  if (!_instance) _instance = new MiniMaxAdapter();
  return _instance;
}