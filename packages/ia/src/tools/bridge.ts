import { modelGateway } from '../router/index';
import { handleMessage } from '../router/AgentRouter';

/**
 * Bridge tool — executa comandos remotos nomeados via API (ops/*) e
 * delega conversa ao ModelGateway. Não executa shell arbitrário aqui.
 *
 * FIX CRÍTICO: ops/run-command REMOVIDO do allowlist — permite execução
 * arbitrária de comandos. Operações restantes são seguras (somente leitura
 * ou build controlado).
 */
const ALLOWED_OPS = new Set(['ops/list-files', 'ops/read-file', 'ops/run-build', 'ops/run-tests']);
const API_BASE = process.env.API_BASE_URL ?? (typeof window !== 'undefined' ? '' : 'http://localhost:4000');

async function callOpsApi(command: string, args: string[] = [], options: Record<string, unknown> = {}) {
  const base = API_BASE.replace(/\/+$/, '');
  const url = `${base}/api/${command}`;

  // Incluir JWT do usuário se disponível (autenticado)
  const headers: Record<string, string> = {
    'content-type': 'application/json',
    ...(options.headers as Record<string, string> ?? {}),
  };

  const res = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify({ ...args, ...options }),
    signal: AbortSignal.timeout(60_000),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: `HTTP ${res.status}` }));
    throw new Error(`${command} falhou: ${err.error ?? res.status}`);
  }
  return res.json();
}

/**
 * Executa operação remota nomeada via API.
 * Seguro: apenas leitura e build controlado.
 */
export async function handleBridgeCommand(command: string, args: string[] = [], options: Record<string, unknown> = {}) {
  if (!ALLOWED_OPS.has(command)) {
    throw new Error(`Operação remota não permitida: ${command}`);
  }
  return callOpsApi(command, args, options);
}

export async function askAgent(sessionId: string, userId: string, prompt: string) {
  return handleMessage({ sessionId, userId, prompt });
}

void modelGateway;
