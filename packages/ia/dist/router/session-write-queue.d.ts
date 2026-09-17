/**
 * SessionWriteQueue — fila/mutex por sessão de conversa.
 * Evita escritas concorrentes para a MESMA sessão, serializando inserts/upserts
 * via promise chain. Usado para gravações em pgvector (embeddings) e atividade.
 */
export declare class SessionWriteQueue {
    private readonly tails;
    private _supabase;
    private supa;
    /** Serializa `work` para uma sessão: garante ordem e impede concorrência. */
    enqueue<T>(sessionId: string, work: () => Promise<T>): Promise<T>;
    /**
     * Grava embedding vetorial de forma serializada por sessão.
     * `embedding` deve ter dimensionalidade compatível com o índice pgvector (ex: 768).
     */
    upsertEmbedding(args: {
        sessionId: string;
        userId: string;
        embedding: number[];
        metadata: Record<string, unknown>;
    }): Promise<unknown>;
    /** Registro de atividade (sem dimensão) para manter a ordem da sessão. */
    private recordActivity;
    waits(): number;
}
export declare const sessionWriteQueue: SessionWriteQueue;
