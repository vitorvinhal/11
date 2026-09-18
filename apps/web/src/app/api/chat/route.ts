import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { loadRootEnv } from "../../../lib/server-env";
import { requireUser } from "../../../lib/auth-helpers";
import { parseCompletionContent } from "../../../lib/parse-completion";
import { chatLimiter } from "../../../lib/rate-limiter";

loadRootEnv();

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
}

export async function POST(req: Request) {
  try {
    const auth = await requireUser(req);
    if (!auth) {
      return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
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
        { error: "messages e sessionId sÃ£o obrigatÃ³rios" },
        { status: 400 },
      );
    }

    const withFiles = contextualize(messages, body.files ?? []);
    const withSearch = await contextualizeWebSearch(withFiles, body.webSearch);
    const withMemory = body.memory
      ? await injectMemory(withSearch, userId)
      : withSearch;
    const selected = (provider ?? "astra").toLowerCase();
    const reply = await routeByProvider(selected, withMemory, body);
    if (!reply)
      return NextResponse.json(
        { error: "Nenhum provedor respondeu" },
        { status: 502 },
      );

    // PersistÃªncia best-effort Ã© feita em ambos os modos (antes de transmitir SSE,
    // para nÃ£o duplicar gravaÃ§Ã£o se o cliente abortar no meio).
    await persistChat(body, messages, userId, sessionId, reply);

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
      const memText = `${last.role === "user" ? "UsuÃ¡rio" : "Assistente"}: ${last.content} â†’ Resposta: ${reply}`;
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
    // persistÃªncia Ã© best-effort
  }
}

/**
 * SSE: transmite a resposta em deltas (efeito "digitando") e encerra com done.
 * O provedor Ã© chamado com stream:false (acima); o particionamento em chunks
 * acontece no servidor para entrega incremental ao cliente.
 */
function sseChatResponse(reply: string, provider: string): Response {
  const encoder = new TextEncoder();
  // LÃ©xica: quebra em palavras preservando espaÃ§os â€” chunks de ~6 chars com
  // partÃ­culas pequenas (2-4) para efeito natural de digitaÃ§Ã£o.
  const chunks: string[] = [];
  const words = reply.match(/\S+\s*/g) ?? [];
  for (const w of words) {
    // Divide cada "palavra+espaÃ§o" em pedaÃ§os de atÃ© 3 chars (sem regex flag s).
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
          // Backpressure leve: aguarda o cliente drenar antes do prÃ³ximo chunk.
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

  const system = `MemÃ³rias relevantes do usuÃ¡rio:\n${relevant.join("\n")}\n\nUse-as quando fizer sentido. Ignore as irrelevantes.`;
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
  const stop = "âš ï¸";
  const w = text
    .slice(0, 700)
    .replace(/\s+/g, " ")
    .replace(/^.*?:\/\//, "");
  if (w.includes("O que posso fazer") || w.includes("olÃ¡") || w.includes("oi"))
    return null;
  if (w.indexOf(stop) !== -1 && w.length < 30) return null;
  return `O usuÃ¡rio conversou sobre: ${w.slice(0, 400)}`;
}

/**
 * Web search â€” integra uma pesquisa real (DuckDuckGo Instant Answer, sem chave)
 * como contexto "system" quando a flag webSearch estÃ¡ ativa. Sem key, nÃ£o bloqueia
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
    { role: "system", content: `Anexos fornecidos pelo usuÃ¡rio:\n${ctx}` },
    ...(system ? [{ role: "system" as const, content: system.content }] : []),
    ...rest,
  ];
}

async function routeByProvider(
  provider: string,
  messages: ChatMsg[],
  body: ChatBody,
): Promise<string | null> {
  if (provider.startsWith("9router/")) {
    const model = provider.replace("9router/", "");
    return route9Router(messages, model, body.nineRouterKey);
  }
  switch (provider) {
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

  // Chave no formato "endpoint|apikey" sobrepÃµe a config do ambiente.
  const userEndpoint = rawKey?.includes("|") ? rawKey.split("|")[0] : undefined;
  const finalKey = rawKey?.includes("|") ? rawKey.split("|")[1] : rawKey;
  const apiKey = finalKey ?? process.env["9ROUTER_TOKEN"] ?? "";

  // Combos: modelo escolhido â†’ fallbacks da config â†’ lista segura de combos gratuitos.
  const envFallbacks = (process.env["9ROUTER_FALLBACK_MODELS"] ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const requested =
    model && model.trim() ? model.trim() : process.env["9ROUTER_MODEL"];
  const models = [
    ...(requested ? [requested] : []),
    ...envFallbacks,
    "kr/glm-5",
    "kr/claude-sonnet-4.5",
    "gemini/gemini-3.6-flash",
  ].filter((m, i, arr) => !!m && arr.indexOf(m) === i);

  // Tentativas em ordem: endpoint do usuÃ¡rio â†’ local â†’ tÃºnel (fallback resiliente).
  const candidates = [
    userEndpoint,
    process.env["9ROUTER_ENDPOINT"],
    process.env["9ROUTER_TUNNEL"],
  ].filter((ep): ep is string => !!ep && ep.startsWith("http"));

  let lastErr = "";
  for (const modelId of models) {
    for (const endpoint of candidates) {
      try {
        const base = endpoint.endsWith("/v1") ? endpoint : `${endpoint}/v1`;
        const res = await fetch(`${base}/chat/completions`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
            ...(apiKey ? { authorization: `Bearer ${apiKey}` } : {}),
          },
          body: JSON.stringify({ model: modelId, stream: false, messages }),
          signal: AbortSignal.timeout(90_000),
        });
        if (!res.ok) {
          lastErr = `[${modelId} @ ${endpoint}] HTTP ${res.status}`;
          // 503/404 do 9Router = upstream falhou (quota/erro de modelo) â†’ tenta prÃ³ximo combo.
          if (res.status === 503 || res.status === 404) continue;
          break;
        }
        const text = await res.text();
        const content = parseCompletionContent(text);
        if (content) return content;
      } catch (err) {
        lastErr = `[${modelId} @ ${endpoint}] ${(err as Error).message}`;
      }
    }
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
