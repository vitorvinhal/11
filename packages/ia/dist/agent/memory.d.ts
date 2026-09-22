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
import { SupabaseClient } from "@supabase/supabase-js";
export type MemoryKind = "conversation" | "fact" | "preference" | "task" | "error";
export interface Memory {
    id: string;
    userId: string;
    tenantId?: string;
    kind: MemoryKind;
    title: string;
    content: string;
    metadata: Record<string, unknown>;
    createdAt: Date;
}
export interface SaveMemoryInput {
    userId: string;
    tenantId?: string;
    kind: MemoryKind;
    title: string;
    content: string;
    metadata?: Record<string, unknown>;
}
export interface SearchMemoryInput {
    userId: string;
    query: string;
    kind?: MemoryKind;
    limit?: number;
    /** Threshold mínimo de similaridade (0-1, padrão: 0.3) */
    threshold?: number;
}
export interface MemorySearchResult {
    memory: Memory;
    similarity: number;
}
/**
 * Salva uma nova memória.
 */
export declare function saveMemory(input: SaveMemoryInput, sb?: SupabaseClient): Promise<Memory>;
/**
 * Busca memórias por similaridade de texto (simple text match).
 * Para busca vetorial real, usar embeddings + pgvector.
 */
export declare function searchMemories(input: SearchMemoryInput, sb?: SupabaseClient): Promise<MemorySearchResult[]>;
/**
 * Busca memórias recentes de um usuário.
 */
export declare function getRecentMemories(userId: string, kind?: MemoryKind, limit?: number, sb?: SupabaseClient): Promise<Memory[]>;
/**
 * Deleta uma memória por ID (ação explícita do usuário).
 * Registra evento de auditoria 'deleted_logical' antes do DELETE físico.
 */
export declare function deleteMemory(memoryId: string, userId: string, sb?: SupabaseClient): Promise<boolean>;
export type MemoryOrigin = "user_stated" | "inferred" | "consolidated";
/**
 * Consolida memórias: marca as originais como 'superseded' sem DELETE físico,
 * grava a consolidada como origin='consolidated' apontando superseded_by, e
 * registra os eventos de auditoria. Retorna a memória consolidada criada.
 */
export declare function supersedeMemory(input: SaveMemoryInput & {
    supersedingIds: string[];
    actor?: string;
}, sb?: SupabaseClient): Promise<Memory>;
export interface MemoryEventInput {
    userId: string;
    memoryId?: string;
    eventType: "created" | "updated" | "consolidated" | "superseded" | "restored" | "deleted_logical";
    origin: string;
    actor?: string;
    details?: Record<string, unknown>;
}
/**
 * Registra evento na trilha append-only memory_events.
 */
export declare function logMemoryEvent(input: MemoryEventInput, sb?: SupabaseClient): Promise<void>;
/**
 * Busca a trilha de auditoria de memórias de um usuário (append-only).
 */
export declare function getMemoryAudit(userId: string, limit?: number, sb?: SupabaseClient): Promise<Array<Record<string, unknown>>>;
