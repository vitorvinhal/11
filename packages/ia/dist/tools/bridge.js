"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleBridgeCommand = handleBridgeCommand;
exports.askAgent = askAgent;
const index_1 = require("../router/index");
const AgentRouter_1 = require("../router/AgentRouter");
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
async function callOpsApi(command, args = [], options = {}) {
    const base = API_BASE.replace(/\/+$/, '');
    const url = `${base}/api/${command}`;
    // Incluir JWT do usuário se disponível (autenticado)
    const headers = {
        'content-type': 'application/json',
        ...(options.headers ?? {}),
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
async function handleBridgeCommand(command, args = [], options = {}) {
    if (!ALLOWED_OPS.has(command)) {
        throw new Error(`Operação remota não permitida: ${command}`);
    }
    return callOpsApi(command, args, options);
}
async function askAgent(sessionId, userId, prompt) {
    return (0, AgentRouter_1.handleMessage)({ sessionId, userId, prompt });
}
void index_1.modelGateway;
