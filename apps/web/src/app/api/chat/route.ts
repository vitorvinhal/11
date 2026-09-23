import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { loadRootEnv } from "../../../lib/server-env";
import { requireUser } from "../../../lib/auth-helpers";
import { parseCompletionContent } from "../../../lib/parse-completion";
import { chatLimiter } from "../../../lib/rate-limiter";

loadRootEnv();

/** Converte string arbitária em UUID (sem Node crypto). */
function toUuid(input: string): string {
  let h = 0;
  for (let i = 0; i < input.length; i++) {
    h = ((h << 5) - h + input.charCodeAt(i)) | 0;
  }
  const hex = Math.abs(h).toString(16).padStart(8, "0").slice(0, 8);
  const r = () =>
    Math.floor(Math.random() * 0x10000)
      .toString(16)
      .padStart(4, "0");
  return `${hex}-${r()}-5${r().slice(1)}-${(Math.floor(Math.random() * 64) | 0x80).toString(16)}${r().slice(1)}-${r()}${r()}`;
}

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface ChatMsg {
  role: "user" | "assistant" | "system";
  content: string;
}

interface ChatBody {
  messages?: ChatMsg[];
  sessionId?: string;
  userId?: string;
  provider?: string;
  profile?: "cost" | "latency" | "quality";
  geminiKey?: string;
  anthropicKey?: string;
  nineRouterKey?: string;
  files?: { label: string; snippet?: string }[];
  webSearch?: boolean;
  memory?: boolean;
  stream?: boolean;
  ollamaModel?: string;
}

export async function POST(req: Request) {
  try {
    const auth = await requireUser(req);
    if (!auth) {
      return NextResponse.json({ error: "N�o autenticado" }, { status: 401 });
    }
    const { userId } = auth;

    // Rate limiting
    const rateLimit = chatLimiter.check(userId);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: "Muitas mensagens. Aguarde um momento." },
        {
          status: 429,
          headers: {
            "Retry-After": String(
              Math.ceil((rateLimit.retryAfterMs ?? 1000) / 1000),
            ),
            "X-RateLimit-Remaining": "0",
          },
        },
      );
    }

    const body = (await req.json()) as ChatBody;
    const { messages, sessionId, provider } = body;
    if (!messages?.length || !sessionId) {
      return NextResponse.json(
        { error: "messages e sessionId são obrigatórios" },
        { status: 400 },
      );
    }

    const withFiles = contextualize(messages, body.files ?? []);
    const withSearch = await contextualizeWebSearch(withFiles, body.webSearch);
    const withMemory = body.memory
      ? await injectMemory(withSearch, userId)
      : withSearch;
    const selected = provider ?? "astra";
    let reply = await routeByProvider(selected, withMemory, body);
    // Validação: resposta muito curta ou só caracteres especiais → tenta fallback
    const isLowQuality = (() => {
      const trimmed = reply?.trim() ?? "";
      if (trimmed.length < 10) return true;
      if (/^[\s#*_`-]+$/.test(trimmed)) return true;
      if (
        /^(não|nao|ok|sim|obrigado|obrigada|entendi|claro|certeza|vou|faz|faco|faco)$/i.test(
          trimmed,
        )
      )
        return true;
      return false;
    })();
    if (!reply || isLowQuality) {
      const fallbackProviders = ["9router", "gemini", "anthropic"];
      for (const fp of fallbackProviders) {
        if (fp === selected.toLowerCase()) continue;
        const fallback = await routeByProvider(fp, withMemory, body);
        if (
          fallback &&
          fallback.trim().length >= 10 &&
          !/^[\s#*_`-]+$/.test(fallback.trim()) &&
          !/^(não|nao|ok|sim|obrigado|obrigada|entendi|claro|certeza|vou|faz|faco|faco)$/i.test(
            fallback.trim(),
          )
        ) {
          reply = fallback;
          break;
        }
      }
    }
    if (!reply || reply.trim().length < 10)
      return NextResponse.json(
        {
          error:
            "Nenhum provedor respondeu. Dica: use um provider local (Ollama ou Zen) no seletor, ou configure um endpoint 9Router (túnel) no deploy.",
        },
        { status: 502 },
      );

    // Persistência best-effort é feita em ambos os modos (antes de transmitir SSE,
    // para não duplicar gravação se o cliente abortar no meio).
    await persistChat(body, messages, userId, sessionId, reply);

    // Gravar usage para FinOps (best-effort).
    try {
      const inputTokens = messages.reduce(
        (acc, m) => acc + Math.ceil(m.content.length / 4),
        0,
      );
      const outputTokens = Math.ceil(reply.length / 4);
      const sb = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
        process.env.SUPABASE_SERVICE_ROLE_KEY ?? "",
      );
      void sb.from("model_usage").insert({
        session_id: toUuid(sessionId),
        user_id: userId ?? null,
        provider: selected,
        input_tokens: inputTokens,
        output_tokens: outputTokens,
        cost_units: 0,
      });
    } catch {
      /* best-effort */
    }

    if (body.stream) {
      return sseChatResponse(reply, selected);
    }

    return NextResponse.json({ content: reply, provider: selected });
  } catch (err) {
    return NextResponse.json(
      { error: (err as Error).message },
      { status: 500 },
    );
  }
}

async function persistChat(
  body: ChatBody,
  messages: ChatMsg[],
  userId: string | undefined,
  sessionId: string,
  reply: string,
): Promise<void> {
  try {
    const sb = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
      process.env.SUPABASE_SERVICE_ROLE_KEY ?? "",
    );
    const last = messages[messages.length - 1];
    const ops: Promise<unknown>[] = [
      sb
        .from("messages")
        .insert({
          session_id: sessionId,
          user_id: userId ?? null,
          role: last.role,
          content: last.content,
        })
        .then(() => undefined) as Promise<unknown>,
      sb
        .from("messages")
        .insert({
          session_id: sessionId,
          user_id: userId ?? null,
          role: "assistant",
          content: reply,
        })
        .then(() => undefined) as Promise<unknown>,
    ];
    if (body.memory && userId) {
      const memText = `${last.role === "user" ? "Usuário" : "Assistente"}: ${last.content} → Resposta: ${reply}`;
      const memory = compactMemory(memText);
      if (memory) {
        ops.push(
          sb
            .from("memories")
            .insert({
              user_id: userId,
              kind: "conversation",
              title: last.content.slice(0, 60),
              content: memory,
              metadata: { session_id: sessionId },
            })
            .then(() => undefined) as Promise<unknown>,
        );
      }
    }
    await Promise.all(ops);
  } catch {
    // persistência é best-effort
  }
}

/**
 * SSE: transmite a resposta em deltas (efeito "digitando") e encerra com done.
 * O provedor é chamado com stream:false (acima); o particionamento em chunks
 * acontece no servidor para entrega incremental ao cliente.
 */
function sseChatResponse(reply: string, provider: string): Response {
  const encoder = new TextEncoder();
  // Léxica: quebra em palavras preservando espaços — chunks de ~6 chars com
  // partículas pequenas (2-4) para efeito natural de digitação.
  const chunks: string[] = [];
  const words = reply.match(/\S+\s*/g) ?? [];
  for (const w of words) {
    // Divide cada "palavra+espaço" em pedaços de até 3 chars (sem regex flag s).
    for (let i = 0; i < w.length; i += 3) chunks.push(w.slice(i, i + 3));
  }
  if (!chunks.length) chunks.push("");

  return new Response(
    new ReadableStream<Uint8Array>({
      async start(controller) {
        controller.enqueue(
          encoder.encode(
            `event: meta\ndata: ${JSON.stringify({ provider })}\n\n`,
          ),
        );
        for (const c of chunks) {
          controller.enqueue(
            encoder.encode(
              `event: delta\ndata: ${JSON.stringify({ content: c })}\n\n`,
            ),
          );
          // Backpressure leve: aguarda o cliente drenar antes do próximo chunk.
          await new Promise((r) => setTimeout(r, 8));
        }
        controller.enqueue(
          encoder.encode(
            `event: done\ndata: {"content":${JSON.stringify(reply)}}\n\n`,
          ),
        );
        controller.close();
      },
    }),
    {
      headers: {
        "content-type": "text/event-stream; charset=utf-8",
        "cache-control": "no-cache, no-transform",
        connection: "keep-alive",
      },
    },
  );
}

async function injectMemory(
  messages: ChatMsg[],
  userId: string,
): Promise<ChatMsg[]> {
  const sb = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
    process.env.SUPABASE_SERVICE_ROLE_KEY ?? "",
  );
  const { data } = await sb
    .from("memories")
    .select("content")
    .eq("user_id", userId)
    .order("created_at", { ascending: false })
    .limit(50);
  const mems: string[] = (data ?? [])
    .map((m: any) => m.content)
    .filter(Boolean);
  if (!mems.length) return messages;

  let userMsg = "";
  for (let i = messages.length - 1; i >= 0; i--) {
    if (messages[i].role === "user") {
      userMsg = messages[i].content;
      break;
    }
  }
  const relevant = mems
    .filter((m) => overlap(m.toLowerCase(), userMsg.toLowerCase()) > 0)
    .slice(0, 8);

  const system = `Memórias relevantes do usuário:\n${relevant.join("\n")}\n\nUse-as quando fizer sentido. Ignore as irrelevantes.`;
  const systemMsgs = messages.filter((m) => m.role === "system");
  return [
    ...(systemMsgs.length
      ? []
      : [{ role: "system" as const, content: system }]),
    ...messages,
  ];
}

function overlap(a: string, b: string): number {
  if (!a || !b) return 0;
  const ka = new Set(a.split(/\s+/).filter((w) => w.length > 3));
  let hits = 0;
  for (const w of b.split(/\s+/)) if (ka.has(w)) hits++;
  return hits;
}

function compactMemory(text: string): string | null {
  const stop = "⚠️";
  const w = text
    .slice(0, 700)
    .replace(/\s+/g, " ")
    .replace(/^.*?:\/\//, "");
  if (w.includes("O que posso fazer") || w.includes("olá") || w.includes("oi"))
    return null;
  if (w.indexOf(stop) !== -1 && w.length < 30) return null;
  return `O usuário conversou sobre: ${w.slice(0, 400)}`;
}

/**
 * Web search — integra uma pesquisa real (DuckDuckGo Instant Answer, sem chave)
 * como contexto "system" quando a flag webSearch está ativa. Sem key, não bloqueia
 * o envio; apenas injeta o que conseguir buscar.
 */
async function contextualizeWebSearch(
  messages: ChatMsg[],
  webSearch?: boolean,
): Promise<ChatMsg[]> {
  if (!webSearch) return messages;
  const userMsg = [...messages].reverse().find((m) => m.role === "user");
  if (!userMsg) return messages;
  const q = userMsg.content.slice(0, 300);
  try {
    const res = await fetch(
      `https://api.duckduckgo.com/?q=${encodeURIComponent(q)}&format=json&no_html=1&skip_disambig=1`,
      { signal: AbortSignal.timeout(10_000) },
    );
    if (!res.ok) return messages;
    const data = (await res.json()) as {
      AbstractText?: string;
      RelatedTopics?: Array<{ Text?: string }>;
    };
    const abstract = data.AbstractText ?? "";
    const related = (data.RelatedTopics ?? [])
      .filter((t) => typeof t.Text === "string")
      .slice(0, 4)
      .map((t) => `- ${t.Text}`)
      .join("\n");
    if (!abstract && !related) return messages;

    const ctx = `Resultados de busca na internet (assunto: "${q}"):\n${abstract ? abstract + "\n" : ""}${related}`;
    const system = messages.find((m) => m.role === "system");
    const rest = messages.filter((m) => m.role !== "system");
    return [
      { role: "system", content: ctx },
      ...(system ? [{ role: "system" as const, content: system.content }] : []),
      ...rest,
    ];
  } catch {
    return messages;
  }
}

function contextualize(
  messages: ChatMsg[],
  files: { label: string; snippet?: string }[],
): ChatMsg[] {
  if (!files.length) return messages;
  const ctx = files
    .map(
      (f) => `<anexo "${f.label}">${f.snippet ? "\n" + f.snippet : ""}</anexo>`,
    )
    .join("\n\n");
  const system = messages.find((m) => m.role === "system");
  const rest = messages.filter((m) => m.role !== "system");
  return [
    { role: "system", content: `Anexos fornecidos pelo usuário:\n${ctx}` },
    ...(system ? [{ role: "system" as const, content: system.content }] : []),
    ...rest,
  ];
}

async function routeByProvider(
  provider: string,
  messages: ChatMsg[],
  body: ChatBody,
): Promise<string | null> {
  if (provider.startsWith("9router/") || provider.startsWith("9Router/")) {
    const model = provider.replace(/^[^/]+\//, "");
    return route9Router(messages, model, body.nineRouterKey);
  }
  const lower = provider.toLowerCase();
  switch (lower) {
    case "ollama":
      return routeOllama(messages, body.ollamaModel);
    case "9router":
      return route9Router(messages, undefined, body.nineRouterKey);
    case "gemini":
      return routeGemini(messages, body.geminiKey);
    case "anthropic":
      return routeAnthropic(messages, body.anthropicKey);
    case "astra":
    case "minimax":
    default: {
      // Perfil de roteamento reordena as tentativas (fallback em cascata).
      const profile = body.profile ?? "cost";
      const attempts: Array<() => Promise<string | null>> =
        profile === "quality"
          ? [
              () => routeAnthropic(messages, body.anthropicKey),
              () => routeGemini(messages, body.geminiKey),
              () => route9Router(messages, undefined, body.nineRouterKey),
            ]
          : profile === "latency"
            ? [
                () => routeGemini(messages, body.geminiKey),
                () => route9Router(messages, undefined, body.nineRouterKey),
                () => routeAnthropic(messages, body.anthropicKey),
              ]
            : [
                () => route9Router(messages, undefined, body.nineRouterKey),
                () => routeGemini(messages, body.geminiKey),
                () => routeAnthropic(messages, body.anthropicKey),
              ];

      for (const attempt of attempts) {
        const out = await attempt();
        if (out) return out;
      }
      // Ollama/Zen agora são client-side (a nuvem não alcança localhost) —
      // sem fallback server-side aqui.
      return null;
    }
  }
}

async function route9Router(
  messages: ChatMsg[],
  model?: string,
  userKey?: string,
): Promise<string | null> {
  const rawKey = userKey && userKey.trim() ? userKey.trim() : undefined;

  // Chave no formato "endpoint|apikey" sobrepõe a config do ambiente.
  const userEndpoint = rawKey?.includes("|") ? rawKey.split("|")[0] : undefined;
  const finalKey = rawKey?.includes("|") ? rawKey.split("|")[1] : rawKey;
  const apiKey = finalKey ?? process.env["ROUTER9_TOKEN"] ?? "";

  // Combos: modelo escolhido → fallbacks da config → lista segura de combos gratuitos.
  const envFallbacks = (process.env["ROUTER9_FALLBACK_MODELS"] ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const requested =
    model && model.trim() ? model.trim() : process.env["ROUTER9_MODEL"];
  const models = [
    ...(requested ? [requested] : []),
    ...envFallbacks,
    "Arcenal",
    "kr/glm-5",
    "kr/claude-sonnet-4.5",
    "gemini/gemini-3.6-flash",
  ].filter((m, i, arr) => !!m && arr.indexOf(m) === i);

  // Tentativas em ordem: endpoint do usuário → local → túnel (fallback resiliente).
  const candidates = [
    userEndpoint,
    process.env["ROUTER9_TUNNEL"],
    process.env["ROUTER9_ENDPOINT"],
  ].filter((ep): ep is string => !!ep && ep.startsWith("http"));

  let lastErr = "";
  const deadline = Date.now() + 60_000; // limite total da rota 9router
  for (const modelId of models) {
    for (const endpoint of candidates) {
      const remaining = deadline - Date.now();
      if (remaining <= 0) break;
      try {
        const base = endpoint.endsWith("/v1") ? endpoint : `${endpoint}/v1`;
        const res = await fetch(`${base}/chat/completions`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
            ...(apiKey ? { authorization: `Bearer ${apiKey}` } : {}),
          },
          body: JSON.stringify({ model: modelId, stream: false, messages }),
          signal: AbortSignal.timeout(Math.min(20_000, remaining)),
        });
        if (!res.ok) {
          lastErr = `[${modelId} @ ${endpoint}] HTTP ${res.status}`;
          console.warn("[9router]", lastErr);
          // Qualquer erro HTTP → tenta próximo combo (endpoint/modelo).
          continue;
        }
        const text = await res.text();
        const content = parseCompletionContent(text);
        if (content) return content;
      } catch (err) {
        lastErr = `[${modelId} @ ${endpoint}] ${(err as Error).message}`;
        console.warn("[9router]", lastErr);
      }
    }
    if (deadline - Date.now() <= 0) break;
  }
  console.error("[9router] falha em todos os combos/endpoints:", lastErr);
  return null;
}

async function routeGemini(
  messages: ChatMsg[],
  userKey?: string,
): Promise<string | null> {
  const geminiKey = (userKey ?? process.env.GEMINI_API_KEY ?? "").trim();
  if (!geminiKey) return null;
  try {
    const model = process.env.GEMINI_MODEL ?? "gemini-2.0-flash";
    const contents = messages
      .filter((m) => m.role !== "system")
      .map((m) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }],
      }));
    const system = messages.find((m) => m.role === "system");
    const body: Record<string, unknown> = {};
    if (system) body.systemInstruction = { parts: [{ text: system.content }] };
    body.contents = contents;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(geminiKey)}`;
    const res = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(60_000),
    });
    if (!res.ok) return null;
    const data = (await res.json()) as any;
    return (
      data.candidates?.[0]?.content?.parts
        ?.map((p: any) => p.text ?? "")
        .join("") ?? null
    );
  } catch {
    return null;
  }
}

async function routeOllama(
  messages: ChatMsg[],
  model?: string,
): Promise<string | null> {
  const endpoint = (
    process.env.OLLAMA_ENDPOINT ?? "http://localhost:11434"
  ).replace(/\/+$/, "");
  const requested = model ?? process.env["OLLAMA_MODEL"] ?? "qwen3:4b";
  const candidates = [requested];
  // Modelo default ausente → tenta o primeiro instalado (evita 404).
  try {
    const tags = await fetch(`${endpoint}/api/tags`, {
      signal: AbortSignal.timeout(5_000),
    });
    if (tags.ok) {
      const data = (await tags.json()) as { models?: Array<{ name?: string }> };
      const first = data?.models?.[0]?.name;
      if (first && first !== requested) candidates.push(first);
    }
  } catch {
    /* segue só com o modelo pedido */
  }
  for (const modelId of candidates) {
    try {
      const res = await fetch(`${endpoint}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: modelId,
          messages: messages.map((m) => ({ role: m.role, content: m.content })),
          stream: false,
        }),
        signal: AbortSignal.timeout(120_000),
      });
      if (!res.ok) continue;
      const data = (await res.json()) as any;
      const content = data?.message?.content;
      if (content) return content;
    } catch {
      /* tenta próximo candidato */
    }
  }
  return null;
}

async function routeAnthropic(
  messages: ChatMsg[],
  userKey?: string,
): Promise<string | null> {
  const apiKey = (userKey ?? process.env.ANTHROPIC_API_KEY ?? "").trim();
  if (!apiKey) return null;
  try {
    const model = process.env.ANTHROPIC_MODEL ?? "claude-sonnet-4-5";
    const system = messages
      .filter((m) => m.role === "system")
      .map((m) => m.content)
      .join("\n");
    const conversation = messages
      .filter((m) => m.role !== "system")
      .map((m) => ({
        role: m.role === "assistant" ? "assistant" : "user",
        content: m.content,
      }));
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model,
        max_tokens: 2048,
        ...(system ? { system } : {}),
        messages: conversation,
      }),
      signal: AbortSignal.timeout(60_000),
    });
    if (!res.ok) return null;
    const data = (await res.json()) as any;
    return (
      data.content
        ?.map((b: any) => (b.type === "text" ? b.text : ""))
        .join("") || null
    );
  } catch {
    return null;
  }
}
