import { modelGateway } from '../router/index';
import { handleMessage } from '../router/AgentRouter';

/**
 * Bridge tool — delega comandos remotos nomeados para a API (accuracy>=4) e
 * conversa ao ModelGateway. Não executa shell arbitrário aqui.
 */
export async function handleBridgeCommand(command: string, args: string[]) {
  // Commands nomeados expostos pela API (veja packages/api/src/modules/bridge):
  //   ops/list-files, ops/read-file, ops/run-build
  const allowed = new Set(['ops/list-files', 'ops/read-file', 'ops/run-build']);
  if (!allowed.has(command)) {
    throw new Error(`Operação remota não permitida: ${command}`);
  }
  return { command, args, accepted: true };
}

export async function askAgent(sessionId: string, userId: string, prompt: string) {
  return handleMessage({ sessionId, userId, prompt });
}

void modelGateway;