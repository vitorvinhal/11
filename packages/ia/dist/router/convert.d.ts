import { ContentBlock, CanonicalMessage } from './types';
/** Extrai texto simples de uma mensagem canônica. */
export declare function textOf(message: CanonicalMessage): string;
/** Converte texto bruto em content blocks canônicos. */
export declare function parseContentBlocks(text: string): ContentBlock[];
/** Converte conteúdo para o formato "texto puro" de provedores sem blocks. */
export declare function toPlainMessages(messages: CanonicalMessage[]): {
    role: string;
    content: string;
}[];
