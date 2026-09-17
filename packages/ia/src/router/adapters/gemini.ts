import { ProviderAdapter, CanonicalMessage, GatewayCompletionResult } from '../types';
import { parseContentBlocks, textOf } from '../convert';

/**
 * GeminiAdapter — Google Gemini direto (free tier disponível).
 */
export class GeminiAdapter implements ProviderAdapter {
  readonly id = 'gemini' as const;
  readonly isPaid = false;

  async complete(
    messages: CanonicalMessage[],
    _opts: { sessionId: string; model?: string }
  ): Promise<GatewayCompletionResult> {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) throw new Error('gemini: chave ausente');
    const model = _opts.model ?? 'gemini-2.0-flash';

    const contents = messages
      .filter((m) => m.role !== 'system')
      .map((m) => ({ role: m.role === 'assistant' ? 'model' : 'user', parts: [{ text: textOf(m) }] }));

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ contents }),
      signal: AbortSignal.timeout(60_000),
    });
    if (!res.ok) throw new Error(`gemini ${res.status}`);

    const data = (await res.json()) as any;
    const text = data.candidates?.[0]?.content?.parts?.map((p: any) => p.text ?? '').join('') ?? '';
    const usage = data.usageMetadata ?? {};

    return {
      provider: 'gemini',
      model,
      message: { role: 'assistant', content: parseContentBlocks(text) },
      usage: {
        inputTokens: usage.promptTokenCount ?? 0,
        outputTokens: usage.candidatesTokenCount ?? 0,
        costUnits: 0,
      },
    };
  }
}

let _instance: GeminiAdapter | null = null;
export function geminiAdapter(): GeminiAdapter {
  if (!_instance) _instance = new GeminiAdapter();
  return _instance;
}