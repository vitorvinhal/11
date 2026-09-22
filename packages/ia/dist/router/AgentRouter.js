"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleMessage = handleMessage;
exports.handleMessageLegacy = handleMessageLegacy;
const index_1 = require("./index");
const supabase_js_1 = require("@supabase/supabase-js");
let _supa = null;
function supa() {
    if (!_supa)
        _supa = (0, supabase_js_1.createClient)(process.env['SUPABASE_URL'] ?? '', process.env['SUPABASE_SERVICE_ROLE_KEY'] ?? process.env['SUPABASE_ANON_KEY'] ?? '');
    return _supa;
}
/**
 * AgentRouter — ponto de entrada da IA.
 * Converte a mensagem para o formato canônico e delega ao ModelGateway.
 */
async function handleMessage(input) {
    const userMsg = { role: 'user', content: [{ type: 'text', text: input.prompt }] };
    const systemMsg = { role: 'system', content: [{ type: 'text', text: basePrompt() }] };
    const result = await index_1.modelGateway.complete({
        sessionId: input.sessionId,
        messages: [systemMsg, userMsg],
        mode: input.mode ?? 'auto',
        provider: input.provider,
    });
    // Atualiza humor baseado em keywords (exemplo simplificado)
    const mood = detectMood(input.prompt);
    try {
        await supa()
            .from('agent_states')
            .upsert({ user_id: input.userId, mood, updated_at: new Date().toISOString() });
    }
    catch {
        /* best-effort */
    }
    const text = result.message.content.map((c) => c.text ?? '').join('\n');
    return { text, provider: result.provider };
}
function detectMood(text) {
    if (/caos|caótico/i.test(text))
        return 'caotica';
    if (/foco|concentrado/i.test(text))
        return 'focada';
    if (/ironia|sarcasmo/i.test(text))
        return 'prestativa';
    return 'calma';
}
function basePrompt() {
    return `Você é a IA 11. Use as personas, humor e recursos disponíveis. Responda com personalidade adaptativa.`;
}
// Compatibilidade com chamadas antigas (string + userId)
async function handleMessageLegacy(prompt, userId) {
    return handleMessage({ sessionId: `legacy-${userId}`, userId, prompt });
}
