"use client";

/**
 * local-llm — chamadas de LLM feitas DIRETO do navegador/WebView.
 *
 * Necessário porque o Ollama e APIs OpenAI-compatíveis locais rodam no
 * aparelho do usuário (localhost) — a nuvem (Vercel) não os enxerga.
 * O JS do app roda no device, então o fetch local funciona.
 *
 * CORS: para acesso a partir de um site https (ex.: candlefish.vercel.app),
 * configure no Ollama:  OLLAMA_ORIGINS="*"  (ou inclua a origem do site).
 */

export interface CompatConfig {
  baseUrl: string;
  apiKey?: string;
  model: string;
}

export interface CompatResult {
  text: string;
  model: string;
}

// ── Configs persistidas (localStorage) ────────────────────────────────────

export function getOllamaConfig(): CompatConfig {
  try {
    const raw = window.localStorage.getItem("ollama_config");
    if (raw) {
      const cfg = JSON.parse(raw);
      return {
        baseUrl: cfg.endpoint || "http://localhost:11434",
        apiKey: undefined,
        model: cfg.selectedModel || "llama3.2",
      };
    }
  } catch {
    /* default */
  }
  return { baseUrl: "http://localhost:11434", model: "llama3.2" };
}

export function getZenConfig(): CompatConfig {
  try {
    const raw = window.localStorage.getItem("eleven_zen_config");
    if (raw) {
      const cfg = JSON.parse(raw);
      return {
        baseUrl: cfg.baseUrl || "",
        apiKey: cfg.apiKey || undefined,
        model: cfg.model || "",
      };
    }
  } catch {
    /* default */
  }
  return { baseUrl: "", model: "" };
}

export function saveZenConfig(cfg: CompatConfig): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(
    "eleven_zen_config",
    JSON.stringify({
      baseUrl: cfg.baseUrl,
      model: cfg.model,
      apiKey: cfg.apiKey || "",
    }),
  );
}

export function hasZenConfig(): boolean {
  const c = getZenConfig();
  return !!c.baseUrl && !!c.model;
}

// ── Ollama / tags ───────────────────────────────────────────────────────────

export async function testOllama(endpoint: string): Promise<{
  ok: boolean;
  models: Array<{ name: string; size: number }>;
  error?: string;
}> {
  try {
    const res = await fetch(`${endpoint}/api/tags`, {
      signal: AbortSignal.timeout(6_000),
    });
    if (!res.ok) return { ok: false, models: [], error: `HTTP ${res.status}` };
    const data = await res.json();
    return {
      ok: true,
      models: (data?.models ?? []).map((m: any) => ({
        name: m.name,
        size: m.size ?? 0,
      })),
    };
  } catch (err) {
    return { ok: false, models: [], error: (err as Error).message };
  }
}

// ── Chat OpenAI-compatível (stream) ─────────────────────────────────────────

function baseForChat(baseUrl: string): string {
  const b = baseUrl.replace(/\/+$/, "");
  return /\/v1$/i.test(b) ? b : `${b}/v1`;
}

/** Envia conversa para qualquer endpoint OpenAI-compatível (Ollama, Zen, etc). */
export async function chatOpenAICompat(
  cfg: CompatConfig,
  messages: Array<{ role: string; content: string }>,
  opts: { onDelta?: (text: string) => void; signal?: AbortSignal } = {},
): Promise<CompatResult> {
  const url = `${baseForChat(cfg.baseUrl)}/chat/completions`;
  const headers: Record<string, string> = {
    "content-type": "application/json",
  };
  if (cfg.apiKey) headers["authorization"] = `Bearer ${cfg.apiKey}`;

  const res = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify({
      model: cfg.model,
      stream: true,
      messages,
    }),
    signal: opts.signal,
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(
      `HTTP ${res.status}${body ? ` — ${body.slice(0, 200)}` : ""}`,
    );
  }

  const reader = res.body?.getReader();
  if (!reader) throw new Error("resposta sem body");

  const decoder = new TextDecoder();
  let buffer = "";
  let acc = "";
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    let idx: number;
    while ((idx = buffer.indexOf("\n\n")) !== -1) {
      const raw = buffer.slice(0, idx);
      buffer = buffer.slice(idx + 2);
      const line = raw.split("\n").find((l) => l.startsWith("data: "));
      if (!line) continue;
      const payload = line.slice(6).trim();
      if (payload === "[DONE]") continue;
      try {
        const chunk = JSON.parse(payload);
        const delta =
          chunk.choices?.[0]?.delta?.content ??
          chunk.choices?.[0]?.message?.content ??
          "";
        if (typeof delta === "string" && delta) {
          acc += delta;
          opts.onDelta?.(delta);
        }
      } catch {
        /* chunk não-JSON */
      }
    }
  }

  return { text: acc, model: cfg.model };
}
