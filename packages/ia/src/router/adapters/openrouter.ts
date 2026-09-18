import {
  ProviderAdapter,
  CanonicalMessage,
  ContentBlock,
  GatewayCompletionResult,
} from "../types";

const OPENROUTER_API = "https://openrouter.ai/api/v1/chat/completions";

/**
 * OpenRouterAdapter — provedor agregador premium (OpenRouter).
 * Fallback transparente entre modelos listados em OPENROUTER_ALLOWED_MODELS.
 * Custos reais: tokens × preço/1M proposto pela plataforma (estimativa por modelo).
 */
export class OpenRouterAdapter implements ProviderAdapter {
  readonly id = "openrouter" as const;
  readonly isPaid = true;

  /** preços USD por 1M tokens (input/output) — estimativa por família. */
  private static PRICING: Record<string, { in: number; out: number }> = {
    "anthropic/claude-sonnet-4": { in: 3, out: 15 },
    "anthropic/claude-haiku-4": { in: 1, out: 5 },
    "google/gemini-2.0-flash-001": { in: 0.1, out: 0.4 },
    "openai/gpt-4o-mini": { in: 0.15, out: 0.6 },
    "openai/gpt-4o": { in: 2.5, out: 10 },
  };

  private priceFor(model: string): { in: number; out: number } {
    const exact = OpenRouterAdapter.PRICING[model];
    if (exact) return exact;
    if (model.includes("haiku")) return { in: 1, out: 5 };
    if (
      model.includes("flash") ||
      model.includes("mini") ||
      model.includes("light")
    )
      return { in: 0.2, out: 0.8 };
    if (model.includes("opus") || model.includes("premium"))
      return { in: 15, out: 75 };
    return { in: 3, out: 15 };
  }

  async complete(
    messages: CanonicalMessage[],
    opts: { sessionId: string; model?: string },
  ): Promise<GatewayCompletionResult> {
    const key = (process.env["OPENROUTER_API_KEY"] ?? "").trim();
    if (!key) throw new Error("OPENROUTER_API_KEY não configurada");

    const requested =
      opts.model ??
      process.env["OPENROUTER_MODEL"] ??
      "anthropic/claude-sonnet-4";
    const allowed = (process.env["OPENROUTER_ALLOWED_MODELS"] ?? "")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    const models = [
      requested,
      ...allowed,
      "anthropic/claude-sonnet-4",
      "anthropic/claude-haiku-4",
    ].filter((m, i, arr) => !!m && arr.indexOf(m) === i);

    let lastError: Error | null = null;
    for (const modelId of models) {
      try {
        const res = await fetch(OPENROUTER_API, {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${key}`,
            "x-title": "11 - Mente Unica",
          },
          body: JSON.stringify({
            model: modelId,
            stream: false,
            messages: messages.map((m) => ({
              role: m.role,
              content: m.content
                .map((c: ContentBlock) => c.text ?? c.data ?? "")
                .join("\n"),
            })),
          }),
          signal: AbortSignal.timeout(60_000),
        });
        if (!res.ok) {
          lastError = new Error(`openrouter ${res.status} (${modelId})`);
          if (res.status === 429 || res.status === 404 || res.status === 402)
            continue;
          break;
        }
        const data = (await res.json()) as any;
        const text = data.choices?.[0]?.message?.content ?? "";
        if (typeof text === "string" && text) {
          const inputTokens = data.usage?.prompt_tokens ?? 0;
          const outputTokens = data.usage?.completion_tokens ?? 0;
          const price = this.priceFor(modelId);
          const costUnits =
            (inputTokens / 1_000_000) * price.in +
            (outputTokens / 1_000_000) * price.out;
          return {
            provider: "openrouter",
            model: modelId,
            message: { role: "assistant", content: [{ type: "text", text }] },
            usage: { inputTokens, outputTokens, costUnits },
          };
        }
      } catch (err) {
        lastError = err as Error;
      }
    }
    throw lastError ?? new Error("openrouter indisponível");
  }
}

let _instance: OpenRouterAdapter | null = null;
export function openRouterAdapter(): OpenRouterAdapter {
  if (!_instance) _instance = new OpenRouterAdapter();
  return _instance;
}
