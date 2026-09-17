"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiniMaxAdapter = void 0;
exports.minimaxAdapter = minimaxAdapter;
const convert_1 = require("../convert");
/**
 * MiniMaxAdapter — acesso direto à API MiniMax (pagante).
 */
class MiniMaxAdapter {
    id = 'minimax';
    isPaid = true;
    async complete(messages, _opts) {
        const apiKey = process.env.MINIMAX_API_KEY;
        if (!apiKey)
            throw new Error('minimax: chave ausente');
        const model = _opts.model ?? 'abab6.5s-chat';
        const endpoint = process.env.MINIMAX_ENDPOINT ?? `https://api.minimax.chat/v1/text/chatcompletion_v2?GroupId=${process.env.MINIMAX_GROUP_ID ?? ''}`;
        const res = await fetch(endpoint, {
            method: 'POST',
            headers: { 'content-type': 'application/json', authorization: `Bearer ${apiKey}` },
            body: JSON.stringify({
                model,
                messages: messages.map((m) => ({ role: m.role, content: (0, convert_1.textOf)(m) })),
            }),
            signal: AbortSignal.timeout(60_000),
        });
        if (!res.ok)
            throw new Error(`minimax ${res.status}`);
        const data = (await res.json());
        const text = data.choices?.[0]?.message?.content ?? '';
        return {
            provider: 'minimax',
            model,
            message: { role: 'assistant', content: (0, convert_1.parseContentBlocks)(text) },
            usage: { inputTokens: data.inputTokenCount ?? 0, outputTokens: data.outputTokenCount ?? 0, costUnits: 0 },
        };
    }
}
exports.MiniMaxAdapter = MiniMaxAdapter;
let _instance = null;
function minimaxAdapter() {
    if (!_instance)
        _instance = new MiniMaxAdapter();
    return _instance;
}
