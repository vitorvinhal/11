"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeminiAdapter = void 0;
exports.geminiAdapter = geminiAdapter;
const convert_1 = require("../convert");
/**
 * GeminiAdapter — Google Gemini direto (free tier disponível).
 */
class GeminiAdapter {
    id = 'gemini';
    isPaid = false;
    async complete(messages, _opts) {
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey)
            throw new Error('gemini: chave ausente');
        const model = _opts.model ?? 'gemini-2.0-flash';
        const contents = messages
            .filter((m) => m.role !== 'system')
            .map((m) => ({ role: m.role === 'assistant' ? 'model' : 'user', parts: [{ text: (0, convert_1.textOf)(m) }] }));
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
        const res = await fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ contents }),
            signal: AbortSignal.timeout(60_000),
        });
        if (!res.ok)
            throw new Error(`gemini ${res.status}`);
        const data = (await res.json());
        const text = data.candidates?.[0]?.content?.parts?.map((p) => p.text ?? '').join('') ?? '';
        const usage = data.usageMetadata ?? {};
        return {
            provider: 'gemini',
            model,
            message: { role: 'assistant', content: (0, convert_1.parseContentBlocks)(text) },
            usage: {
                inputTokens: usage.promptTokenCount ?? 0,
                outputTokens: usage.candidatesTokenCount ?? 0,
                costUnits: 0,
            },
        };
    }
}
exports.GeminiAdapter = GeminiAdapter;
let _instance = null;
function geminiAdapter() {
    if (!_instance)
        _instance = new GeminiAdapter();
    return _instance;
}
