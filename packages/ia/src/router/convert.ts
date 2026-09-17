import { ContentBlock, CanonicalMessage } from './types';

/** Extrai texto simples de uma mensagem canônica. */
export function textOf(message: CanonicalMessage): string {
  return message.content.map((c) => c.text ?? '').join('\n');
}

/** Converte texto bruto em content blocks canônicos. */
export function parseContentBlocks(text: string): ContentBlock[] {
  return [{ type: 'text', text }];
}

/** Converte conteúdo para o formato "texto puro" de provedores sem blocks. */
export function toPlainMessages(messages: CanonicalMessage[]): { role: string; content: string }[] {
  return messages.map((m) => ({ role: m.role, content: textOf(m) }));
}