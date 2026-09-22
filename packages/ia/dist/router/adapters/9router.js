"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NineRouterAdapter = void 0;
exports.nineRouterAdapter = nineRouterAdapter;
/**
 * NineRouterAdapter — provedor default gratuito (9Router, compatível com OpenAI).
 * Endpoints: ROUTER9_ENDPOINT (local) com fallback ROUTER9_TUNNEL (público).
 * Suporta function calling (tools no body + parse de tool_calls).
 */
class NineRouterAdapter {
    id = "9router";
    isPaid = false;
    async complete(messages, opts) {
        const token = process.env["ROUTER9_TOKEN"] ?? "";
        const requested = opts.model ?? process.env["ROUTER9_MODEL"] ?? "Arcenal";
        const envFallbacks = (process.env["ROUTER9_FALLBACK_MODELS"] ?? "")
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean);
        const models = [
            requested,
            ...envFallbacks,
            "kr/glm-5",
            "kr/claude-sonnet-4.5",
            "gemini/gemini-3.6-flash",
        ].filter((m, i, arr) => !!m && arr.indexOf(m) === i);
        const candidates = [
            (process.env["ROUTER9_TUNNEL"] ?? "").trim(),
            (process.env["ROUTER9_ENDPOINT"] ?? "").trim(),
            "http://localhost:20128",
        ].filter((ep) => ep.startsWith("http"));
        const hasTools = !!opts.tools && opts.tools.length > 0;
        let lastError = null;
        for (const modelId of models) {
            for (const endpoint of candidates) {
                try {
                    const res = await fetch(`${endpoint}/v1/chat/completions`, {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                            authorization: `Bearer ${token}`,
                        },
                        body: JSON.stringify({
                            model: modelId,
                            stream: false,
                            messages: messages.map((m) => {
                                const base = {
                                    role: m.role,
                                    content: m.content
                                        .map((c) => c.text ?? c.data ?? "")
                                        .join("\n"),
                                };
                                if (m.toolCalls && m.toolCalls.length > 0) {
                                    base["tool_calls"] = m.toolCalls.map((tc) => ({
                                        id: tc.id,
                                        type: "function",
                                        function: {
                                            name: tc.name,
                                            arguments: JSON.stringify(tc.arguments ?? {}),
                                        },
                                    }));
                                }
                                if (m.toolCallId && m.toolResults) {
                                    const tr = m.toolResults.find((r) => r.toolCallId === m.toolCallId);
                                    base["tool_call_id"] = m.toolCallId;
                                    base["content"] = tr
                                        ? typeof tr.result === "string"
                                            ? tr.result
                                            : JSON.stringify(tr.result)
                                        : base["content"];
                                }
                                return base;
                            }),
                            ...(hasTools
                                ? {
                                    tools: opts.tools,
                                    tool_choice: "auto",
                                }
                                : {}),
                        }),
                        signal: AbortSignal.timeout(120_000),
                    });
                    if (!res.ok) {
                        lastError = new Error(`9router ${res.status} (${modelId} @ ${endpoint})`);
                        if (res.status === 503 || res.status === 404)
                            continue;
                        break;
                    }
                    const text = await res.text();
                    const parsed = parseOpenAIResponse(text);
                    if (parsed && (parsed.text || (parsed.toolCalls?.length ?? 0) > 0)) {
                        const usage = parseUsage(text);
                        const content = parsed.text
                            ? [{ type: "text", text: parsed.text }]
                            : [];
                        return {
                            provider: "9router",
                            model: modelId,
                            message: {
                                role: "assistant",
                                content,
                                toolCalls: parsed.toolCalls ?? [],
                            },
                            usage: {
                                inputTokens: usage.input,
                                outputTokens: usage.output,
                                costUnits: 0,
                            },
                        };
                    }
                }
                catch (err) {
                    lastError = err;
                }
            }
        }
        throw lastError ?? new Error("9router indisponível");
    }
}
exports.NineRouterAdapter = NineRouterAdapter;
let _instance = null;
function nineRouterAdapter() {
    if (!_instance)
        _instance = new NineRouterAdapter();
    return _instance;
}
/**
 * Extrai texto e/ou tool_calls de resposta OpenAI-compatível (JSON puro ou SSE).
 * Alguns combos do 9Router retornam SSE mesmo com stream:false.
 */
function parseOpenAIResponse(body) {
    if (!body)
        return null;
    if (body.includes("data:")) {
        let text = "";
        const toolCalls = [];
        const deltaCalls = {};
        for (const line of body.split(/\r?\n/)) {
            const m = line.match(/^data:\s*(.*)$/);
            if (!m || m[1] === "[DONE]")
                continue;
            try {
                const chunk = JSON.parse(m[1]);
                const choice = chunk.choices?.[0];
                if (!choice)
                    continue;
                const delta = choice.delta ?? choice.message ?? {};
                if (typeof delta.content === "string")
                    text += delta.content;
                for (const tc of delta.tool_calls ?? []) {
                    const idx = tc.index ?? 0;
                    const entry = deltaCalls[idx] ?? { args: "" };
                    if (tc.id)
                        entry.id = tc.id;
                    if (tc.function?.name)
                        entry.name += tc.function.name;
                    if (tc.function?.arguments)
                        entry.args += tc.function.arguments;
                    deltaCalls[idx] = entry;
                }
            }
            catch {
                /* chunk não-JSON */
            }
        }
        for (const [idx, entry] of Object.entries(deltaCalls)) {
            if (!entry.name)
                continue;
            toolCalls.push({
                id: entry.id ?? `call_${idx}`,
                name: entry.name,
                arguments: parseArguments(entry.args),
            });
        }
        if (!text && toolCalls.length === 0)
            return null;
        return {
            text: text || null,
            toolCalls: toolCalls.length ? toolCalls : null,
        };
    }
    try {
        const data = JSON.parse(body);
        const msg = data.choices?.[0]?.message ?? {};
        const text = msg.content ??
            data.choices?.[0]?.delta?.content ??
            data.output_text ??
            "";
        const rawCalls = msg.tool_calls ?? [];
        const toolCalls = rawCalls
            .filter((tc) => tc?.function?.name)
            .map((tc) => ({
            id: tc.id ?? `call_${Math.random().toString(36).slice(2, 8)}`,
            name: tc.function.name,
            arguments: parseArguments(tc.function.arguments),
        }));
        if (!text && toolCalls.length === 0)
            return null;
        return {
            text: typeof text === "string" && text ? text : null,
            toolCalls: toolCalls.length ? toolCalls : null,
        };
    }
    catch {
        return null;
    }
}
function parseArguments(raw) {
    if (typeof raw !== "string" || !raw)
        return {};
    try {
        const parsed = JSON.parse(raw);
        return parsed && typeof parsed === "object" ? parsed : {};
    }
    catch {
        return {};
    }
}
/** Extrai contagem de tokens da resposta OpenAI-compatível. */
function parseUsage(body) {
    try {
        // Para JSON puro
        if (!body.includes("data:")) {
            const data = JSON.parse(body);
            return {
                input: data.usage?.prompt_tokens ?? 0,
                output: data.usage?.completion_tokens ?? 0,
            };
        }
        // Para SSE — procura no último chunk com usage
        let last = null;
        for (const line of body.split(/\r?\n/)) {
            const m = line.match(/^data:\s*(.*)$/);
            if (!m || m[1] === "[DONE]")
                continue;
            try {
                const chunk = JSON.parse(m[1]);
                if (chunk.usage)
                    last = chunk;
            }
            catch {
                /* ignore */
            }
        }
        return {
            input: last?.usage?.prompt_tokens ?? 0,
            output: last?.usage?.completion_tokens ?? 0,
        };
    }
    catch {
        return { input: 0, output: 0 };
    }
}
