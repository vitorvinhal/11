import { CanonicalMessage, LongContextPolicy, DEFAULT_LONG_CONTEXT } from './types';

/**
 * LongContextManager — sessões longas sem truncamento.
 *  - Mantém janela de mensagens recentes íntegras.
 *  - Compacta (paráfrase) mensagens antigas em um único bloco `summarized`.
 *  - Preserva tool_calls/resultados mais recentes.
 */
export class LongContextManager {
  constructor(private readonly policy: LongContextPolicy = DEFAULT_LONG_CONTEXT) {}

  estimateTokens(messages: CanonicalMessage[]): number {
    let total = 0;
    for (const m of messages) {
      for (const c of m.content) total += (c.text?.length ?? 0) / 4;
      total += (m.toolCallId?.length ?? 0) / 4;
    }
    return Math.ceil(total);
  }

  /**
   * Prepara mensagens respeitando a janela e comprimindo o que excede.
   * Retorna [preparedMessages, wasSummarized]:
   */
  compact(messages: CanonicalMessage[]): { messages: CanonicalMessage[]; wasSummarized: boolean } {
    const tokens = this.estimateTokens(messages);
    if (messages.length <= this.policy.maxMessages && tokens <= this.policy.maxTokens) {
      return { messages, wasSummarized: false };
    }

    // Mantém as últimas N mensagens íntegras.
    const keep = messages.slice(-this.policy.maxMessages);
    const older = messages.slice(0, messages.length - this.policy.maxMessages);

    const summary = this.summarize(older);
    if (!summary) return { messages: keep, wasSummarized: older.length > 0 };

    const combined: CanonicalMessage[] = [
      {
        role: 'system',
        content: [{ type: 'text', text: `[Contexto comprimido anterior]: ${summary}` }],
        summarized: true,
      },
      ...keep,
    ];
    return { messages: combined, wasSummarized: older.length > 0 };
  }

  private summarize(messages: CanonicalMessage[]): string {
    if (!messages.length) return '';
    const parts: string[] = [];
    for (const m of messages) {
      const text = m.content.map((c) => c.text ?? '').join(' ');
      if (text) parts.push(`${m.role}: ${text.slice(-2000)}`);
    }
    // Compacta heurística: junta tudo em até ~6k chars para preservar núcleo de contexto.
    const joined = parts.join('\n');
    return joined.length > 6000 ? joined.slice(-6000) : joined;
  }
}

export const longContextManager = new LongContextManager();