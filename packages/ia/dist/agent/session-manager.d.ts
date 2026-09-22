/**
 * FASE 5C — Agent Session Manager
 *
 * Gerencia sessões do agente com persistência.
 * Salva histórico de mensagens, estado do agente e contexto.
 */
import { SupabaseClient } from '@supabase/supabase-js';
export type SessionStatus = 'active' | 'paused' | 'completed' | 'expired';
export interface AgentSession {
    id: string;
    userId: string;
    tenantId?: string;
    status: SessionStatus;
    title?: string;
    context: Record<string, unknown>;
    messageCount: number;
    tokenUsage: {
        input: number;
        output: number;
        total: number;
    };
    createdAt: Date;
    updatedAt: Date;
    expiresAt?: Date;
}
export interface SessionMessage {
    id: string;
    sessionId: string;
    role: 'user' | 'assistant' | 'system' | 'tool';
    content: string;
    toolCalls?: string;
    toolResults?: string;
    tokenCount?: number;
    createdAt: Date;
}
export interface CreateSessionInput {
    userId: string;
    tenantId?: string;
    title?: string;
    context?: Record<string, unknown>;
    /** TTL em milissegundos (padrão: 24 horas) */
    ttlMs?: number;
}
export interface AddMessageInput {
    sessionId: string;
    role: SessionMessage['role'];
    content: string;
    toolCalls?: unknown;
    toolResults?: unknown;
    tokenCount?: number;
}
/**
 * Cria uma nova sessão do agente.
 */
export declare function createSession(input: CreateSessionInput, sb?: SupabaseClient): Promise<AgentSession>;
/**
 * Busca uma sessão por ID.
 */
export declare function getSession(sessionId: string, userId: string, sb?: SupabaseClient): Promise<AgentSession | null>;
/**
 * Atualiza status de uma sessão.
 */
export declare function updateSessionStatus(sessionId: string, userId: string, status: SessionStatus, sb?: SupabaseClient): Promise<boolean>;
/**
 * Lista sessões ativas de um usuário.
 */
export declare function listActiveSessions(userId: string, limit?: number, sb?: SupabaseClient): Promise<AgentSession[]>;
/**
 * Adiciona uma mensagem à sessão.
 */
export declare function addMessage(input: AddMessageInput, sb?: SupabaseClient): Promise<SessionMessage>;
/**
 * Busca mensagens de uma sessão.
 */
export declare function getMessages(sessionId: string, userId: string, limit?: number, sb?: SupabaseClient): Promise<SessionMessage[]>;
/**
 * Expira sessões antigas (lazy cleanup).
 */
export declare function expireOldSessions(sb?: SupabaseClient): Promise<number>;
