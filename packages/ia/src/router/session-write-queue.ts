import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { EMBEDDING_DIMS } from './embedding-dims';

/**
 * SessionWriteQueue — fila/mutex por sessão de conversa.
 * Evita escritas concorrentes para a MESMA sessão, serializando inserts/upserts
 * via promise chain. Usado para gravações em pgvector (embeddings) e atividade.
 */
export class SessionWriteQueue {
  private readonly tails = new Map<string, Promise<unknown>>();

  private _supabase: SupabaseClient | null = null;
  private supa() {
    if (!this._supabase) {
      this._supabase = createClient(
        process.env.SUPABASE_URL ?? '',
        process.env.SUPABASE_SERVICE_ROLE_KEY ?? ''
      );
    }
    return this._supabase;
  }

  /** Serializa `work` para uma sessão: garante ordem e impede concorrência. */
  enqueue<T>(sessionId: string, work: () => Promise<T>): Promise<T> {
    const prev = this.tails.get(sessionId) ?? Promise.resolve();
    const next = prev.then(work);
    this.tails.set(sessionId, next.catch(() => undefined));
    return next;
  }

  /**
   * Grava embedding vetorial de forma serializada por sessão.
   * `embedding` deve ter dimensionalidade compatível com o índice pgvector (ex: 768).
   */
  upsertEmbedding(args: {
    sessionId: string;
    userId: string;
    embedding: number[];
    metadata: Record<string, unknown>;
  }): Promise<unknown> {
    return this.enqueue(args.sessionId, async () => {
      if (args.embedding.length !== EMBEDDING_DIMS) {
        // Falha ALTA (não silenciosa): dimensão incompatível com pgvector.
        // Degrada para registro de atividade para não perder a ordem da sessão.
        console.warn(
          `[session-write-queue] embedding com ${args.embedding.length} dims ` +
          `!= EMBEDDING_DIMS (${EMBEDDING_DIMS}). Vetor NÃO gravado em embeddings.`
        );
        return this.recordActivity(args);
      }
      const { error } = await this.supa().from('embeddings').insert({
        user_id: args.userId,
        embedding: args.embedding,
        metadata: { ...args.metadata, sessionId: args.sessionId },
      });
      if (error) throw error;
      return true;
    });
  }

  /** Registro de atividade (sem dimensão) para manter a ordem da sessão. */
  private async recordActivity(args: {
    sessionId: string;
    userId: string;
    metadata: Record<string, unknown>;
  }): Promise<boolean> {
    const { error } = await this.supa().from('messages').insert({
      user_id: args.userId,
      role: 'session',
      content: JSON.stringify({ sessionId: args.sessionId, ...args.metadata }),
    });
    if (error) throw error;
    return true;
  }

  waits(): number {
    return this.tails.size;
  }
}

export const sessionWriteQueue = new SessionWriteQueue();