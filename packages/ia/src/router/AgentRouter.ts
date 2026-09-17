import { modelGateway } from './index';
import { CanonicalMessage } from './types';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

type Mood = 'calma' | 'caotica' | 'focada' | 'prestativa';

let _supa: SupabaseClient | null = null;
function supa() {
  if (!_supa) _supa = createClient(
    process.env['SUPABASE_URL'] ?? '',
    process.env['SUPABASE_SERVICE_ROLE_KEY'] ?? process.env['SUPABASE_ANON_KEY'] ?? ''
  );
  return _supa;
}

export interface AgentRequest {
  sessionId: string;
  userId: string;
  prompt: string;
  mode?: 'auto' | 'pinned';
  provider?: string;
}

/**
 * AgentRouter — ponto de entrada da IA.
 * Converte a mensagem para o formato canônico e delega ao ModelGateway.
 */
export async function handleMessage(input: AgentRequest): Promise<{ text: string; provider: string }> {
  const userMsg: CanonicalMessage = { role: 'user', content: [{ type: 'text', text: input.prompt }] };
  const systemMsg: CanonicalMessage = { role: 'system', content: [{ type: 'text', text: basePrompt() }] };

  const result = await modelGateway.complete({
    sessionId: input.sessionId,
    messages: [systemMsg, userMsg],
    mode: input.mode ?? 'auto',
    provider: input.provider,
  });

  // Atualiza humor baseado em keywords (exemplo simplificado)
  const mood = detectMood(input.prompt);
  try {
    await supa()
      .from('agent_states')
      .upsert({ user_id: input.userId, mood, updated_at: new Date().toISOString() });
  } catch {
    /* best-effort */
  }

  const text = result.message.content.map((c) => c.text ?? '').join('\n');
  return { text, provider: result.provider };
}

function detectMood(text: string): Mood {
  if (/caos|caótico/i.test(text)) return 'caotica';
  if (/foco|concentrado/i.test(text)) return 'focada';
  if (/ironia|sarcasmo/i.test(text)) return 'prestativa';
  return 'calma';
}

function basePrompt() {
  return `Você é a IA 11. Use as personas, humor e recursos disponíveis. Responda com personalidade adaptativa.`;
}

// Compatibilidade com chamadas antigas (string + userId)
export async function handleMessageLegacy(prompt: string, userId: string) {
  return handleMessage({ sessionId: `legacy-${userId}`, userId, prompt });
}