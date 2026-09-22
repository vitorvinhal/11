import { CanonicalMessage, LongContextPolicy } from './types';
/**
 * LongContextManager — sessões longas sem truncamento.
 *  - Mantém janela de mensagens recentes íntegras.
 *  - Compacta (paráfrase) mensagens antigas em um único bloco `summarized`.
 *  - Preserva tool_calls/resultados mais recentes.
 */
export declare class LongContextManager {
    private readonly policy;
    constructor(policy?: LongContextPolicy);
    estimateTokens(messages: CanonicalMessage[]): number;
    /**
     * Prepara mensagens respeitando a janela e comprimindo o que excede.
     * Retorna [preparedMessages, wasSummarized]:
     */
    compact(messages: CanonicalMessage[]): {
        messages: CanonicalMessage[];
        wasSummarized: boolean;
    };
    private summarize;
}
export declare const longContextManager: LongContextManager;
