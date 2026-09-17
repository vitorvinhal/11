"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NineRouterAdapter = void 0;
exports.nineRouterAdapter = nineRouterAdapter;
/**
 * NineRouterAdapter — provedor default gratuito (9Router, compatível com OpenAI).
 * Endpoints: 9ROUTER_ENDPOINT (local) com fallback 9ROUTER_TUNNEL (público).
 */
class NineRouterAdapter {
    id = '9router';
    isPaid = false;
    async complete(messages, _opts) {
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
        let lastError = null;
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
                                content: m.content.map((c) => c.text ?? c.data ?? '').join('\n'),
                            })),
                        }),
                        signal: AbortSignal.timeout(60_000),
                    });
                    if (!res.ok) {
                        lastError = new Error(`9router ${res.status} (${modelId} @ ${endpoint})`);
                        if (res.status === 503 || res.status === 404)
                            continue;
                        break;
                    }
                    const text = await res.text();
                    const content = parseCompletionContent(text);
                    if (content) {
                        return {
                            provider: '9router',
                            model: modelId,
                            message: { role: 'assistant', content: [{ type: 'text', text: content }] },
                            usage: { inputTokens: 0, outputTokens: 0, costUnits: 0 },
                        };
                    }
                }
                catch (err) {
                    lastError = err;
                }
            }
        }
        throw lastError ?? new Error('9router indisponível');
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
 * Extrai o texto de resposta OpenAI-compatível (JSON puro ou SSE streaming).
 * Alguns combos do 9Router retornam SSE mesmo com stream:false.
 */
function parseCompletionContent(body) {
    if (!body)
        return null;
    if (body.includes('data:')) {
        let out = '';
        for (const line of body.split(/\r?\n/)) {
            const m = line.match(/^data:\s*(.*)$/);
            if (!m || m[1] === '[DONE]')
                continue;
            try {
                const chunk = JSON.parse(m[1]);
                const delta = chunk.choices?.[0]?.delta?.content ??
                    chunk.choices?.[0]?.message?.content ??
                    '';
                if (typeof delta === 'string')
                    out += delta;
            }
            catch { /* chunk não-JSON */ }
        }
        return out || null;
    }
    try {
        const data = JSON.parse(body);
        const text = data.choices?.[0]?.message?.content ??
            data.choices?.[0]?.delta?.content ??
            data.output_text ??
            '';
        return typeof text === 'string' && text ? text : null;
    }
    catch {
        return null;
    }
}
