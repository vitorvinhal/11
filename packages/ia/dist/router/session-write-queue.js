"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionWriteQueue = exports.SessionWriteQueue = void 0;
const supabase_js_1 = require("@supabase/supabase-js");
/**
 * SessionWriteQueue — fila/mutex por sessão de conversa.
 * Evita escritas concorrentes para a MESMA sessão, serializando inserts/upserts
 * via promise chain. Usado para gravações em pgvector (embeddings) e atividade.
 */
class SessionWriteQueue {
    tails = new Map();
    _supabase = null;
    supa() {
        if (!this._supabase) {
            this._supabase = (0, supabase_js_1.createClient)(process.env.SUPABASE_URL ?? '', process.env.SUPABASE_SERVICE_ROLE_KEY ?? '');
        }
        return this._supabase;
    }
    /** Serializa `work` para uma sessão: garante ordem e impede concorrência. */
    enqueue(sessionId, work) {
        const prev = this.tails.get(sessionId) ?? Promise.resolve();
        const next = prev.then(work);
        this.tails.set(sessionId, next.catch(() => undefined));
        return next;
    }
    /**
     * Grava embedding vetorial de forma serializada por sessão.
     * `embedding` deve ter dimensionalidade compatível com o índice pgvector (ex: 768).
     */
    upsertEmbedding(args) {
        return this.enqueue(args.sessionId, async () => {
            const expected = Number(process.env.EMBEDDING_DIMS ?? 768);
            if (args.embedding.length !== expected) {
                // Evita gravação inválida; ancora a ordem serializando um insert de atividade.
                return this.recordActivity(args);
            }
            const { error } = await this.supa().from('embeddings').insert({
                user_id: args.userId,
                embedding: args.embedding,
                metadata: { ...args.metadata, sessionId: args.sessionId },
            });
            if (error)
                throw error;
            return true;
        });
    }
    /** Registro de atividade (sem dimensão) para manter a ordem da sessão. */
    async recordActivity(args) {
        const { error } = await this.supa().from('messages').insert({
            user_id: args.userId,
            role: 'session',
            content: JSON.stringify({ sessionId: args.sessionId, ...args.metadata }),
        });
        if (error)
            throw error;
        return true;
    }
    waits() {
        return this.tails.size;
    }
}
exports.SessionWriteQueue = SessionWriteQueue;
exports.sessionWriteQueue = new SessionWriteQueue();
