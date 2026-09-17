import { ProviderAdapter, CanonicalMessage, ContentBlock, GatewayCompletionResult } from '../types';

/**
 * NineRouterAdapter — provedor default gratuito (9Router, compatível com OpenAI).
 * Endpoints: 9ROUTER_ENDPOINT (local) com fallback 9ROUTER_TUNNEL (público).
 */
export class NineRouterAdapter implements ProviderAdapter {
  readonly id = '9router' as const;
  readonly isPaid = false;

  async complete(
    messages: CanonicalMessage[],
    _opts: { sessionId: string; model?: string }
  ): Promise<GatewayCompletionResult> {
    const token = process.env['9ROUTER_TOKEN'] ?? '';
    const requested = _opts.model ?? process.env['9ROUTER_MODEL'] ?? 'kr/glm-5';
    const envFallbacks = (process.env['9ROUTER_FALLBACK_MODELS'] ?? '')
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);
    const models = [requested, ...envFallbacks, 'kr/glm-5', 'kr/claude-sonnet-4.5', 'gemini/gemini-3.6-flash']
      .filter((m, i, arr) => !!m && arr.indexOf(m) === i);
    const candidates = [
      (process.env['9ROUTER_ENDPOINT'] ?? '').trim(),
      (process.env['9ROUTER_TUNNEL'] ?? '').trim(),
      'http://localhost:20128',
    ].filter((ep) => ep.startsWith('http'));

    let lastError: Error | null = null;
    for (const modelId of models) {
      for (const endpoint of candidates) {
        try {
          const res = await fetch(`${endpoint}/v1/chat/completions`, {
            method: 'POST',
            headers: { 'content-type': 'application/json', authorization: `Bearer ${token}` },
            body: JSON.stringify({
              model: modelId,
              stream: false,
              messages: messages.map((m) => ({
                role: m.role,
                content: m.content.map((c: ContentBlock) => c.text ?? c.data ?? '').join('\n'),
              })),
            }),
            signal: AbortSignal.timeout(60_000),
          });
          if (!res.ok) {
            lastError = new Error(`9router ${res.status} (${modelId} @ ${endpoint})`);
            if (res.status === 503 || res.status === 404) continue;
            break;
          }
          const text = await res.text();
          const content = parseCompletionContent(text);
          if (content) {
            const usage = parseUsage(text);
            return {
              provider: '9router',
              model: modelId,
              message: { role: 'assistant', content: [{ type: 'text', text: content }] },
              usage: { inputTokens: usage.input, outputTokens: usage.output, costUnits: 0 },
            };
          }
        } catch (err) {
          lastError = err as Error;
        }
      }
    }
    throw lastError ?? new Error('9router indisponível');
  }
}

let _instance: NineRouterAdapter | null = null;
export function nineRouterAdapter(): NineRouterAdapter {
  if (!_instance) _instance = new NineRouterAdapter();
  return _instance;
}

/**
 * Extrai o texto de resposta OpenAI-compatível (JSON puro ou SSE streaming).
 * Alguns combos do 9Router retornam SSE mesmo com stream:false.
 */
function parseCompletionContent(body: string): string | null {
  if (!body) return null;
  if (body.includes('data:')) {
    let out = '';
    for (const line of body.split(/\r?\n/)) {
      const m = line.match(/^data:\s*(.*)$/);
      if (!m || m[1] === '[DONE]') continue;
      try {
        const chunk = JSON.parse(m[1]);
        const delta =
          chunk.choices?.[0]?.delta?.content ??
          chunk.choices?.[0]?.message?.content ??
          '';
        if (typeof delta === 'string') out += delta;
      } catch { /* chunk não-JSON */ }
    }
    return out || null;
  }
  try {
    const data = JSON.parse(body) as any;
    const text =
      data.choices?.[0]?.message?.content ??
      data.choices?.[0]?.delta?.content ??
      data.output_text ??
      '';
    return typeof text === 'string' && text ? text : null;
  } catch {
    return null;
  }
}

/** Extrai contagem de tokens da resposta OpenAI-compatível. */
function parseUsage(body: string): { input: number; output: number } {
  try {
    // Para JSON puro
    if (!body.includes('data:')) {
      const data = JSON.parse(body) as any;
      return {
        input: data.usage?.prompt_tokens ?? 0,
        output: data.usage?.completion_tokens ?? 0,
      };
    }
    // Para SSE — procura no último chunk com usage
    let last: any = null;
    for (const line of body.split(/\r?\n/)) {
      const m = line.match(/^data:\s*(.*)$/);
      if (!m || m[1] === '[DONE]') continue;
      try {
        const chunk = JSON.parse(m[1]);
        if (chunk.usage) last = chunk;
      } catch { /* ignore */ }
    }
    return {
      input: last?.usage?.prompt_tokens ?? 0,
      output: last?.usage?.completion_tokens ?? 0,
    };
  } catch {
    return { input: 0, output: 0 };
  }
}