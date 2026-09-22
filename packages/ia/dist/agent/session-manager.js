"use strict";
/**
 * FASE 5C — Agent Session Manager
 *
 * Gerencia sessões do agente com persistência.
 * Salva histórico de mensagens, estado do agente e contexto.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSession = createSession;
exports.getSession = getSession;
exports.updateSessionStatus = updateSessionStatus;
exports.listActiveSessions = listActiveSessions;
exports.addMessage = addMessage;
exports.getMessages = getMessages;
exports.expireOldSessions = expireOldSessions;
const supabase_js_1 = require("@supabase/supabase-js");
// ─── Configuração ───────────────────────────────────────────────────────────
const DEFAULT_SESSION_TTL_MS = 24 * 60 * 60 * 1000; // 24 horas
const MAX_MESSAGES_PER_SESSION = 500;
// ─── Supabase Client ────────────────────────────────────────────────────────
function createServiceClient() {
    return (0, supabase_js_1.createClient)(process.env.NEXT_PUBLIC_SUPABASE_URL ?? '', process.env.SUPABASE_SERVICE_ROLE_KEY ?? '');
}
// ─── Session Operations ─────────────────────────────────────────────────────
/**
 * Cria uma nova sessão do agente.
 */
async function createSession(input, sb) {
    const client = sb ?? createServiceClient();
    const ttlMs = input.ttlMs ?? DEFAULT_SESSION_TTL_MS;
    const session = {
        user_id: input.userId,
        tenant_id: input.tenantId ?? null,
        status: 'active',
        title: input.title ?? null,
        context: JSON.stringify(input.context ?? {}),
        message_count: 0,
        token_usage: JSON.stringify({ input: 0, output: 0, total: 0 }),
        expires_at: new Date(Date.now() + ttlMs).toISOString(),
    };
    const { data, error } = await client
        .from('sessions')
        .insert(session)
        .select()
        .single();
    if (error)
        throw new Error(`Falha ao criar sessão: ${error.message}`);
    return {
        id: data.id,
        userId: data.user_id,
        tenantId: data.tenant_id,
        status: data.status,
        title: data.title,
        context: JSON.parse(data.context),
        messageCount: data.message_count,
        tokenUsage: JSON.parse(data.token_usage),
        createdAt: new Date(data.created_at),
        updatedAt: new Date(data.updated_at),
        expiresAt: data.expires_at ? new Date(data.expires_at) : undefined,
    };
}
/**
 * Busca uma sessão por ID.
 */
async function getSession(sessionId, userId, sb) {
    const client = sb ?? createServiceClient();
    const { data, error } = await client
        .from('sessions')
        .select('*')
        .eq('id', sessionId)
        .eq('user_id', userId)
        .single();
    if (error || !data)
        return null;
    return {
        id: data.id,
        userId: data.user_id,
        tenantId: data.tenant_id,
        status: data.status,
        title: data.title,
        context: JSON.parse(data.context),
        messageCount: data.message_count,
        tokenUsage: JSON.parse(data.token_usage),
        createdAt: new Date(data.created_at),
        updatedAt: new Date(data.updated_at),
        expiresAt: data.expires_at ? new Date(data.expires_at) : undefined,
    };
}
/**
 * Atualiza status de uma sessão.
 */
async function updateSessionStatus(sessionId, userId, status, sb) {
    const client = sb ?? createServiceClient();
    const { error } = await client
        .from('sessions')
        .update({ status, updated_at: new Date().toISOString() })
        .eq('id', sessionId)
        .eq('user_id', userId);
    return !error;
}
/**
 * Lista sessões ativas de um usuário.
 */
async function listActiveSessions(userId, limit = 10, sb) {
    const client = sb ?? createServiceClient();
    const { data, error } = await client
        .from('sessions')
        .select('*')
        .eq('user_id', userId)
        .eq('status', 'active')
        .order('updated_at', { ascending: false })
        .limit(limit);
    if (error || !data)
        return [];
    return data.map((s) => ({
        id: s.id,
        userId: s.user_id,
        tenantId: s.tenant_id,
        status: s.status,
        title: s.title,
        context: JSON.parse(s.context),
        messageCount: s.message_count,
        tokenUsage: JSON.parse(s.token_usage),
        createdAt: new Date(s.created_at),
        updatedAt: new Date(s.updated_at),
        expiresAt: s.expires_at ? new Date(s.expires_at) : undefined,
    }));
}
// ─── Message Operations ─────────────────────────────────────────────────────
/**
 * Adiciona uma mensagem à sessão.
 */
async function addMessage(input, sb) {
    const client = sb ?? createServiceClient();
    const message = {
        session_id: input.sessionId,
        role: input.role,
        content: input.content,
        tool_calls: input.toolCalls ? JSON.stringify(input.toolCalls) : null,
        tool_results: input.toolResults ? JSON.stringify(input.toolResults) : null,
        token_count: input.tokenCount ?? null,
    };
    const { data, error } = await client
        .from('messages')
        .insert(message)
        .select()
        .single();
    if (error)
        throw new Error(`Falha ao adicionar mensagem: ${error.message}`);
    // Incrementar message_count na sessão
    await client.rpc('increment_message_count', { sid: input.sessionId });
    return {
        id: data.id,
        sessionId: data.session_id,
        role: data.role,
        content: data.content,
        toolCalls: data.tool_calls ? JSON.parse(data.tool_calls) : undefined,
        toolResults: data.tool_results ? JSON.parse(data.tool_results) : undefined,
        tokenCount: data.token_count,
        createdAt: new Date(data.created_at),
    };
}
/**
 * Busca mensagens de uma sessão.
 */
async function getMessages(sessionId, userId, limit = 50, sb) {
    const client = sb ?? createServiceClient();
    // Verificar ownership da sessão
    const session = await getSession(sessionId, userId, client);
    if (!session)
        return [];
    const { data, error } = await client
        .from('messages')
        .select('*')
        .eq('session_id', sessionId)
        .order('created_at', { ascending: true })
        .limit(limit);
    if (error || !data)
        return [];
    return data.map((m) => ({
        id: m.id,
        sessionId: m.session_id,
        role: m.role,
        content: m.content,
        toolCalls: m.tool_calls ? JSON.parse(m.tool_calls) : undefined,
        toolResults: m.tool_results ? JSON.parse(m.tool_results) : undefined,
        tokenCount: m.token_count,
        createdAt: new Date(m.created_at),
    }));
}
// ─── Cleanup ────────────────────────────────────────────────────────────────
/**
 * Expira sessões antigas (lazy cleanup).
 */
async function expireOldSessions(sb) {
    const client = sb ?? createServiceClient();
    const { data, error } = await client
        .from('sessions')
        .update({ status: 'expired' })
        .eq('status', 'active')
        .lt('expires_at', new Date().toISOString())
        .select();
    return error ? 0 : (data?.length ?? 0);
}
