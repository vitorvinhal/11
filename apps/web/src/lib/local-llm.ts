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
        model: cfg.selectedModel || "llama3.2:3b",
      };
    }
  } catch {
    /* default */
  }
  return { baseUrl: "http://localhost:11434", model: "llama3.2:3b" };
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

/** Modelos listados do endpoint Zen (para o seletor do chat). */
export function getZenModels(): string[] {
  try {
    const raw = window.localStorage.getItem("eleven_zen_models");
    if (raw) {
      const arr = JSON.parse(raw);
      return Array.isArray(arr) ? arr.map((m: unknown) => String(m)) : [];
    }
  } catch {
    /* default */
  }
  return [];
}

export function saveZenModels(models: string[]): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(
    "eleven_zen_models",
    JSON.stringify(models.filter(Boolean).slice(0, 100)),
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

/** Modelos populares de 1-clique no Ollama. */
export const OLLAMA_POPULAR = [
  "llama3.2:3b",
  "llama3.1",
  "llama3",
  "llama2",
  "qwen2.5:7b",
  "gemma3:4b",
  "mistral",
  "phi4-mini",
];

/** Baixa um modelo no Ollama (POST /api/pull), acompanhando até concluir. */
export async function pullOllama(
  endpoint: string,
  name: string,
): Promise<{
  ok: boolean;
  error?: string;
}> {
  try {
    const res = await fetch(`${endpoint}/api/pull`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ name, stream: true }),
      signal: AbortSignal.timeout(1_800_000), // downloads grandes podem demorar
    });
    if (!res.ok) return { ok: false, error: `HTTP ${res.status}` };
    // Stream de progresso — lê até a última linha type:"success".
    if (!res.body) return { ok: false, error: "resposta sem body" };
    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let done = false;
    for (;;) {
      const { done: finished, value } = await reader.read();
      if (finished) break;
      const chunk = decoder.decode(value, { stream: true });
      for (const line of chunk.split("\n")) {
        try {
          const j = JSON.parse(line);
          if (j.status === "success" || j.error) {
            done = true;
            if (j.error) return { ok: false, error: j.error };
          }
        } catch {
          /* linha parcial */
        }
      }
      if (done) break;
    }
    return { ok: true };
  } catch (err) {
    return { ok: false, error: (err as Error).message };
  }
}

/** Lista modelos de um endpoint OpenAI-compatível (GET /v1/models). */
export async function listOpenAIModels(cfg: CompatConfig): Promise<{
  ok: boolean;
  models: string[];
  error?: string;
}> {
  try {
    const headers: Record<string, string> = {};
    if (cfg.apiKey) headers["authorization"] = `Bearer ${cfg.apiKey}`;
    const res = await fetch(`${baseForChat(cfg.baseUrl)}/models`, {
      headers,
      signal: AbortSignal.timeout(8_000),
    });
    if (!res.ok) return { ok: false, models: [], error: `HTTP ${res.status}` };
    const data = await res.json();
    const models = (data?.data ?? [])
      .map((m: any) => m.id)
      .filter((x: unknown): x is string => typeof x === "string");
    return { ok: true, models };
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
  try {
    return await streamChat(cfg, messages, opts);
  } catch (err) {
    // Modelo configurado não existe no endpoint → descobre o primeiro
    // disponível (tags do Ollama) e repete uma vez. Evita 404 "model not
    // found" quando o usuário ainda não baixou o modelo default.
    if (isModelNotFound(err)) {
      const fallback = await discoverFirstModel(cfg.baseUrl);
      if (fallback && fallback !== cfg.model) {
        return streamChat({ ...cfg, model: fallback }, messages, opts);
      }
    }
    throw err;
  }
}

function isModelNotFound(err: unknown): boolean {
  const msg = (err as Error).message ?? "";
  return /404|not.?found/i.test(msg) && /model/i.test(msg);
}

/** Retorna o primeiro modelo instalado no endpoint (Ollama /api/tags). */
async function discoverFirstModel(baseUrl: string): Promise<string | null> {
  try {
    const res = await fetch(`${baseUrl.replace(/\/+$/, "")}/api/tags`, {
      signal: AbortSignal.timeout(5_000),
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { models?: Array<{ name?: string }> };
    return data?.models?.[0]?.name ?? null;
  } catch {
    return null;
  }
}

async function streamChat(
  cfg: CompatConfig,
  messages: Array<{ role: string; content: string }>,
  opts: { onDelta?: (text: string) => void; signal?: AbortSignal } = {},
): Promise<CompatResult> {
  const url = `${baseForChat(cfg.baseUrl)}/chat/completions`;
  const headers: Record<string, string> = {
    "content-type": "application/json",
  };
  if (cfg.apiKey) headers["authorization"] = `Bearer ${cfg.apiKey}`;

  // Timeout de segurança (120s) combinado com signal externo se houver.
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 120_000);
  if (opts.signal) {
    if (opts.signal.aborted) controller.abort();
    else
      opts.signal.addEventListener("abort", () => controller.abort(), {
        once: true,
      });
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify({
        model: cfg.model,
        stream: true,
        messages,
      }),
      signal: controller.signal,
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
  } finally {
    clearTimeout(timer);
  }
}
