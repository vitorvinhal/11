"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnthropicAdapter = void 0;
exports.anthropicAdapter = anthropicAdapter;
const convert_1 = require("../convert");
/**
 * AnthropicAdapter — acesso direto à API Anthropic (pagante).
 * Ativado apenas se ANTHROPIC_API_KEY estiver definida.
 */
class AnthropicAdapter {
    id = 'anthropic';
    isPaid = true;
    async complete(messages, _opts) {
        const apiKey = process.env.ANTHROPIC_API_KEY;
        if (!apiKey)
            throw new Error('anthropic: chave ausente');
        const model = _opts.model ?? 'claude-3-5-sonnet-latest';
        const system = messages.filter((m) => m.role === 'system').map((m) => (0, convert_1.textOf)(m)).join('\n');
        const userMessages = messages.filter((m) => m.role !== 'system').map((m) => ({
            role: m.role === 'assistant' ? 'assistant' : 'user',
            content: m.content.map((c) => c.text ?? '').join('\n'),
        }));
        const res = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'x-api-key': apiKey,
                'anthropic-version': '2023-06-01',
            },
            body: JSON.stringify({ model, max_tokens: 1024, system: system || undefined, messages: userMessages }),
            signal: AbortSignal.timeout(90_000),
        });
        if (!res.ok)
            throw new Error(`anthropic ${res.status}`);
        const data = (await res.json());
        const text = data.content?.[0]?.text ?? '';
        return {
            provider: 'anthropic',
            model,
            message: { role: 'assistant', content: (0, convert_1.parseContentBlocks)(text) },
            usage: {
                inputTokens: data.usage?.input_tokens ?? 0,
                outputTokens: data.usage?.output_tokens ?? 0,
                costUnits: (data.usage?.input_tokens ?? 0) * 3 + (data.usage?.output_tokens ?? 0) * 15,
            },
        };
    }
}
exports.AnthropicAdapter = AnthropicAdapter;
let _instance = null;
function anthropicAdapter() {
    if (!_instance)
        _instance = new AnthropicAdapter();
    return _instance;
}
