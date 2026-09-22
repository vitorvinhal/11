"use strict";
/**
 * FASE 6B — Memory Module
 *
 * Sistema de memória de longo prazo para o agente.
 * Salva e recupera memórias relevantes baseado em similaridade.
 *
 * Tabelas Supabase:
 *   memories: id, user_id, tenant_id, kind, title, content, embedding, metadata, created_at
 *   embeddings: id, memory_id, embedding (vector 768), created_at
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveMemory = saveMemory;
exports.searchMemories = searchMemories;
exports.getRecentMemories = getRecentMemories;
exports.deleteMemory = deleteMemory;
exports.supersedeMemory = supersedeMemory;
exports.logMemoryEvent = logMemoryEvent;
exports.getMemoryAudit = getMemoryAudit;
const supabase_js_1 = require("@supabase/supabase-js");
// ─── Configuração ───────────────────────────────────────────────────────────
const DEFAULT_SEARCH_LIMIT = 10;
const DEFAULT_SIMILARITY_THRESHOLD = 0.3;
const MAX_MEMORIES_PER_USER = 1000;
// ─── Supabase Client ────────────────────────────────────────────────────────
function createServiceClient() {
    return (0, supabase_js_1.createClient)(process.env.NEXT_PUBLIC_SUPABASE_URL ?? "", process.env.SUPABASE_SERVICE_ROLE_KEY ?? "");
}
// ─── Memory Operations ──────────────────────────────────────────────────────
/**
 * Salva uma nova memória.
 */
async function saveMemory(input, sb) {
    const client = sb ?? createServiceClient();
    const memory = {
        user_id: input.userId,
        tenant_id: input.tenantId ?? null,
        kind: input.kind,
        title: input.title.slice(0, 200),
        content: input.content.slice(0, 5000),
        metadata: JSON.stringify(input.metadata ?? {}),
    };
    const { data, error } = await client
        .from("memories")
        .insert(memory)
        .select()
        .single();
    if (error)
        throw new Error(`Falha ao salvar memória: ${error.message}`);
    // Cleanup lazy se exceder limite
    cleanupOldMemories(input.userId, client).catch(() => { });
    return {
        id: data.id,
        userId: data.user_id,
        tenantId: data.tenant_id,
        kind: data.kind,
        title: data.title,
        content: data.content,
        metadata: JSON.parse(data.metadata),
        createdAt: new Date(data.created_at),
    };
}
/**
 * Busca memórias por similaridade de texto (simple text match).
 * Para busca vetorial real, usar embeddings + pgvector.
 */
async function searchMemories(input, sb) {
    const client = sb ?? createServiceClient();
    const limit = input.limit ?? DEFAULT_SEARCH_LIMIT;
    const threshold = input.threshold ?? DEFAULT_SIMILARITY_THRESHOLD;
    // Busca por palavras-chave no conteúdo
    const keywords = input.query
        .toLowerCase()
        .split(/\s+/)
        .filter((w) => w.length > 3)
        .slice(0, 5);
    if (keywords.length === 0)
        return [];
    // Construir query com filtros
    let query = client.from("memories").select("*").eq("user_id", input.userId);
    if (input.kind) {
        query = query.eq("kind", input.kind);
    }
    // Buscar por keywords no conteúdo
    const orConditions = keywords.map((kw) => `content.ilike.%${kw}%`).join(",");
    const { data, error } = await query
        .or(orConditions)
        .order("created_at", { ascending: false })
        .limit(limit * 2); // Buscar mais para filtrar por similaridade
    if (error || !data)
        return [];
    // Calcular similaridade baseada em overlap de palavras
    const queryWords = new Set(keywords);
    const results = data
        .map((m) => {
        const contentWords = new Set(m.content
            .toLowerCase()
            .split(/\s+/)
            .filter((w) => w.length > 3));
        const overlap = [...queryWords].filter((w) => contentWords.has(w)).length;
        const similarity = overlap / queryWords.size;
        return {
            memory: {
                id: m.id,
                userId: m.user_id,
                tenantId: m.tenant_id,
                kind: m.kind,
                title: m.title,
                content: m.content,
                metadata: JSON.parse(m.metadata),
                createdAt: new Date(m.created_at),
            },
            similarity,
        };
    })
        .filter((r) => r.similarity >= threshold)
        .sort((a, b) => b.similarity - a.similarity)
        .slice(0, limit);
    return results;
}
/**
 * Busca memórias recentes de um usuário.
 */
async function getRecentMemories(userId, kind, limit = 20, sb) {
    const client = sb ?? createServiceClient();
    let query = client.from("memories").select("*").eq("user_id", userId);
    if (kind) {
        query = query.eq("kind", kind);
    }
    const { data, error } = await query
        .order("created_at", { ascending: false })
        .limit(limit);
    if (error || !data)
        return [];
    return data.map((m) => ({
        id: m.id,
        userId: m.user_id,
        tenantId: m.tenant_id,
        kind: m.kind,
        title: m.title,
        content: m.content,
        metadata: JSON.parse(m.metadata),
        createdAt: new Date(m.created_at),
    }));
}
/**
 * Deleta uma memória por ID (ação explícita do usuário).
 * Registra evento de auditoria 'deleted_logical' antes do DELETE físico.
 */
async function deleteMemory(memoryId, userId, sb) {
    const client = sb ?? createServiceClient();
    const { data: mem } = await client
        .from("memories")
        .select("origin")
        .eq("id", memoryId)
        .eq("user_id", userId)
        .single();
    const { error } = await client
        .from("memories")
        .delete()
        .eq("id", memoryId)
        .eq("user_id", userId); // ownership check
    if (!error) {
        await logMemoryEvent({
            userId,
            memoryId,
            eventType: "deleted_logical",
            origin: mem?.origin ?? "user_stated",
        }, client).catch(() => undefined);
    }
    return !error;
}
/**
 * Consolida memórias: marca as originais como 'superseded' sem DELETE físico,
 * grava a consolidada como origin='consolidated' apontando superseded_by, e
 * registra os eventos de auditoria. Retorna a memória consolidada criada.
 */
async function supersedeMemory(input, sb) {
    const client = sb ?? createServiceClient();
    const actor = input.actor ?? "system";
    // 1. Cria a memória consolidada (origin=consolidated).
    const memory = {
        user_id: input.userId,
        tenant_id: input.tenantId ?? null,
        kind: input.kind,
        title: input.title.slice(0, 200),
        content: input.content.slice(0, 5000),
        metadata: JSON.stringify({
            ...(input.metadata ?? {}),
            consolidated_from: input.supersedingIds,
        }),
        origin: "consolidated",
        scope: "personal",
        status: "active",
    };
    const { data, error } = await client
        .from("memories")
        .insert(memory)
        .select()
        .single();
    if (error)
        throw new Error(`Falha ao consolidar memórias: ${error.message}`);
    const consolidatedId = data.id;
    // 2. Marca originais como superseded (nunca DELETE) e aponta superseded_by.
    for (const oldId of input.supersedingIds) {
        await client
            .from("memories")
            .update({
            status: "superseded",
            superseded_by: consolidatedId,
            superseded_at: new Date().toISOString(),
        })
            .eq("id", oldId)
            .eq("user_id", input.userId)
            .then(() => undefined);
    }
    // 3. Registra eventos de auditoria (append-only).
    await Promise.all([
        ...input.supersedingIds.map((oldId) => logMemoryEvent({
            userId: input.userId,
            memoryId: oldId,
            eventType: "superseded",
            origin: actor,
            details: { superseded_by: consolidatedId },
        }, client)),
        logMemoryEvent({
            userId: input.userId,
            memoryId: consolidatedId,
            eventType: "consolidated",
            origin: actor,
            details: { superseding_ids: input.supersedingIds },
        }, client),
    ]).catch(() => undefined);
    return {
        id: data.id,
        userId: data.user_id,
        tenantId: data.tenant_id,
        kind: data.kind,
        title: data.title,
        content: data.content,
        metadata: JSON.parse(data.metadata),
        createdAt: new Date(data.created_at),
    };
}
/**
 * Registra evento na trilha append-only memory_events.
 */
async function logMemoryEvent(input, sb) {
    const client = sb ?? createServiceClient();
    await client.from("memory_events").insert({
        user_id: input.userId,
        memory_id: input.memoryId ?? null,
        event_type: input.eventType,
        origin: input.origin,
        actor: input.actor ?? "system",
        details: JSON.stringify(input.details ?? {}),
    });
}
/**
 * Busca a trilha de auditoria de memórias de um usuário (append-only).
 */
async function getMemoryAudit(userId, limit = 100, sb) {
    const client = sb ?? createServiceClient();
    const { data, error } = await client
        .from("memory_events")
        .select("*")
        .eq("user_id", userId)
        .order("created_at", { ascending: false })
        .limit(limit);
    if (error || !data)
        return [];
    return data.map((e) => ({
        ...e,
        details: JSON.parse(e.details ?? "{}"),
    }));
}
/**
 * Cleanup lazy — remove memórias antigas se exceder limite.
 */
async function cleanupOldMemories(userId, sb) {
    const { data } = await sb
        .from("memories")
        .select("id")
        .eq("user_id", userId)
        .order("created_at", { ascending: false });
    if (!data || data.length <= MAX_MEMORIES_PER_USER)
        return;
    // Deletar as mais antigas
    const toDelete = data.slice(MAX_MEMORIES_PER_USER);
    const ids = toDelete.map((m) => m.id);
    await sb.from("memories").delete().in("id", ids);
}
