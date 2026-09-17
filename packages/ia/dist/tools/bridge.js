"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleBridgeCommand = handleBridgeCommand;
exports.askAgent = askAgent;
const index_1 = require("../router/index");
const AgentRouter_1 = require("../router/AgentRouter");
/**
 * Bridge tool — delega comandos remotos nomeados para a API (accuracy>=4) e
 * conversa ao ModelGateway. Não executa shell arbitrário aqui.
 */
async function handleBridgeCommand(command, args) {
    // Commands nomeados expostos pela API (veja packages/api/src/modules/bridge):
    //   ops/list-files, ops/read-file, ops/run-build
    const allowed = new Set(['ops/list-files', 'ops/read-file', 'ops/run-build']);
    if (!allowed.has(command)) {
        throw new Error(`Operação remota não permitida: ${command}`);
    }
    return { command, args, accepted: true };
}
async function askAgent(sessionId, userId, prompt) {
    return (0, AgentRouter_1.handleMessage)({ sessionId, userId, prompt });
}
void index_1.modelGateway;
