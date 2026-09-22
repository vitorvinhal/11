"use strict";
/**
 * FASE 5A — AgentCore
 *
 * Loop principal de execução do agente.
 * Fluxo: user_msg → LLM → tool_calls → safety check → execute → loop até resposta final
 *
 * Integra com:
 *   - Risk Engine (FASE 4A): classifica ações
 *   - Dry-Run (FASE 4B): simula antes de executar
 *   - Checkpoint (FASE 4C): salva estado para rollback
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.agentLoop = agentLoop;
const index_1 = require("../router/index");
const risk_engine_1 = require("../safety/risk-engine");
const dry_run_1 = require("../safety/dry-run");
const device_jobs_1 = require("./device-jobs");
// ─── Configuração ───────────────────────────────────────────────────────────
const DEFAULT_MAX_ITERATIONS = 10;
const BASE_SYSTEM_PROMPT = `Você é a IA 11 — um agente autônomo com acesso a ferramentas.
Sempre que precisar executar uma ação, use a ferramenta apropriada.
Suas ferramentas: file_read, file_write, file_delete, terminal_exec, git_status, git_diff, git_commit.
Responda sempre em português do Brasil.`;
const DEVICE_SYSTEM_PROMPT = `Você tem acesso total ao dispositivo do usuário (Agente PC / Mobile).
Use as ferramentas device.* para: arquivos (device.fs_list/read/write/delete/copy/move),
executar comandos no dispositivo (device.exec), fotos e mídia (device.media_*),
aplicativos (device.apps_*), configurações do sistema (device.settings_*),
captura de tela (device.screen_shot) e estado do sistema (device.system_*).
Ações que alteram estado (escrever/deletar arquivos, executar comandos, mudar configurações)
requerem aprovação do usuário — se o resultado pedir aprovação, informe o usuário e aguarde.
Responda sempre em português do Brasil.`;
function getSystemPrompt(hasDevice) {
    return hasDevice
        ? `${BASE_SYSTEM_PROMPT}\n\n${DEVICE_SYSTEM_PROMPT}`
        : BASE_SYSTEM_PROMPT;
}
// ─── Tool Definitions ───────────────────────────────────────────────────────
const TOOL_DEFINITIONS = [
    {
        name: "file_read",
        description: "Lê o conteúdo de um arquivo",
        parameters: {
            type: "object",
            properties: {
                path: { type: "string", description: "Caminho do arquivo" },
            },
            required: ["path"],
        },
    },
    {
        name: "file_write",
        description: "Escreve conteúdo em um arquivo (cria ou sobrescreve)",
        parameters: {
            type: "object",
            properties: {
                path: { type: "string", description: "Caminho do arquivo" },
                content: { type: "string", description: "Conteúdo a escrever" },
            },
            required: ["path", "content"],
        },
    },
    {
        name: "file_delete",
        description: "Deleta um arquivo",
        parameters: {
            type: "object",
            properties: {
                path: { type: "string", description: "Caminho do arquivo" },
            },
            required: ["path"],
        },
    },
    {
        name: "terminal_exec",
        description: "Executa um comando no terminal",
        parameters: {
            type: "object",
            properties: {
                command: { type: "string", description: "Comando a executar" },
                cwd: { type: "string", description: "Diretório de trabalho" },
            },
            required: ["command"],
        },
    },
    {
        name: "git_status",
        description: "Mostra o status do repositório git",
        parameters: {
            type: "object",
            properties: {},
        },
    },
    {
        name: "git_diff",
        description: "Mostra diferenças no repositório git",
        parameters: {
            type: "object",
            properties: {
                file: { type: "string", description: "Arquivo específico (opcional)" },
            },
        },
    },
    {
        name: "git_commit",
        description: "Cria um commit com mensagem",
        parameters: {
            type: "object",
            properties: {
                message: { type: "string", description: "Mensagem do commit" },
                files: {
                    type: "array",
                    items: { type: "string" },
                    description: "Arquivos para adicionar",
                },
            },
            required: ["message"],
        },
    },
];
// ─── Device Tool Definitions (Agente PC / Mobile) ─────────────────────────
const DEVICE_TOOL_DEFINITIONS = [
    {
        name: "device.fs_list",
        description: "Lista arquivos de um diretório no dispositivo",
        parameters: {
            type: "object",
            properties: {
                path: { type: "string", description: "Caminho do diretório" },
            },
        },
    },
    {
        name: "device.fs_read",
        description: "Lê o conteúdo de um arquivo no dispositivo",
        parameters: {
            type: "object",
            properties: {
                path: { type: "string", description: "Caminho do arquivo" },
                maxBytes: {
                    type: "number",
                    description: "Limite de leitura (opcional)",
                },
            },
            required: ["path"],
        },
    },
    {
        name: "device.fs_write",
        description: "Escreve conteúdo em um arquivo no dispositivo",
        parameters: {
            type: "object",
            properties: {
                path: { type: "string", description: "Caminho do arquivo" },
                content: { type: "string", description: "Conteúdo a escrever" },
            },
            required: ["path", "content"],
        },
    },
    {
        name: "device.fs_delete",
        description: "Deleta um arquivo no dispositivo",
        parameters: {
            type: "object",
            properties: {
                path: { type: "string", description: "Caminho do arquivo" },
            },
            required: ["path"],
        },
    },
    {
        name: "device.fs_copy",
        description: "Copia um arquivo no dispositivo",
        parameters: {
            type: "object",
            properties: {
                source: { type: "string", description: "Caminho de origem" },
                destination: { type: "string", description: "Caminho de destino" },
            },
            required: ["source", "destination"],
        },
    },
    {
        name: "device.fs_move",
        description: "Move um arquivo no dispositivo",
        parameters: {
            type: "object",
            properties: {
                source: { type: "string", description: "Caminho de origem" },
                destination: { type: "string", description: "Caminho de destino" },
            },
            required: ["source", "destination"],
        },
    },
    {
        name: "device.exec",
        description: "Executa um comando no dispositivo (terminal)",
        parameters: {
            type: "object",
            properties: {
                command: { type: "string", description: "Comando a executar" },
                cwd: {
                    type: "string",
                    description: "Diretório de trabalho (opcional)",
                },
                timeoutMs: { type: "number", description: "Timeout em ms (opcional)" },
            },
            required: ["command"],
        },
    },
    {
        name: "device.media_list",
        description: "Lista fotos/mídias do dispositivo",
        parameters: {
            type: "object",
            properties: {
                type: {
                    type: "string",
                    enum: ["fotos", "videos", "musica", "todos"],
                    description: "Tipo de mídia",
                },
                limit: { type: "number", description: "Limite de itens" },
            },
        },
    },
    {
        name: "device.media_open",
        description: "Abre uma foto/mídia no dispositivo",
        parameters: {
            type: "object",
            properties: {
                path: { type: "string", description: "Caminho da mídia" },
            },
            required: ["path"],
        },
    },
    {
        name: "device.media_import",
        description: "Importa mídia (câmera/galeria) do dispositivo",
        parameters: {
            type: "object",
            properties: {
                from: {
                    type: "string",
                    enum: ["galeria", "camera"],
                    description: "Origem da importação",
                },
            },
        },
    },
    {
        name: "device.apps_list",
        description: "Lista aplicativos instalados no dispositivo",
        parameters: {
            type: "object",
            properties: {},
        },
    },
    {
        name: "device.apps_launch",
        description: "Abre um aplicativo no dispositivo",
        parameters: {
            type: "object",
            properties: {
                id: {
                    type: "string",
                    description: "Nome do app (PackageName/Exec name)",
                },
                uri: { type: "string", description: "URI/arquivo a abrir (opcional)" },
            },
            required: ["id"],
        },
    },
    {
        name: "device.settings_get",
        description: "Lê uma configuração do dispositivo",
        parameters: {
            type: "object",
            properties: {
                key: { type: "string", description: "Chave da configuração" },
            },
            required: ["key"],
        },
    },
    {
        name: "device.settings_set",
        description: "Altera uma configuração do dispositivo",
        parameters: {
            type: "object",
            properties: {
                key: { type: "string", description: "Chave da configuração" },
                value: { description: "Novo valor" },
            },
            required: ["key", "value"],
        },
    },
    {
        name: "device.screen_shot",
        description: "Captura a tela do dispositivo",
        parameters: {
            type: "object",
            properties: {},
        },
    },
    {
        name: "device.system_info",
        description: "Informações gerais do dispositivo (SO, memória, disco)",
        parameters: {
            type: "object",
            properties: {},
        },
    },
    {
        name: "device.system_battery",
        description: "Status da bateria do dispositivo",
        parameters: {
            type: "object",
            properties: {},
        },
    },
    {
        name: "device.system_processes",
        description: "Lista processos ativos no dispositivo",
        parameters: {
            type: "object",
            properties: {
                limit: { type: "number", description: "Limite de processos" },
            },
        },
    },
    {
        name: "device.system_network",
        description: "Informações de rede do dispositivo",
        parameters: {
            type: "object",
            properties: {},
        },
    },
    {
        name: "device.system_clipboard",
        description: "Lê ou escreve a área de transferência do dispositivo",
        parameters: {
            type: "object",
            properties: {
                action: {
                    type: "string",
                    enum: ["read", "write"],
                    description: "Ação",
                },
                value: { type: "string", description: "Valor (para write)" },
            },
            required: ["action"],
        },
    },
    {
        name: "device.system_notify",
        description: "Envia uma notificação no dispositivo",
        parameters: {
            type: "object",
            properties: {
                title: { type: "string", description: "Título" },
                body: { type: "string", description: "Corpo" },
            },
            required: ["title", "body"],
        },
    },
];
function getToolDefinitions(hasDevice) {
    return hasDevice
        ? [...TOOL_DEFINITIONS, ...DEVICE_TOOL_DEFINITIONS]
        : TOOL_DEFINITIONS;
}
// ─── Tool Executor ──────────────────────────────────────────────────────────
/**
 * Mapeia nome da ferramenta para ação do risk engine.
 */
function mapToolToAction(toolName) {
    const map = {
        file_read: "filesystem.read",
        file_write: "filesystem.write",
        file_delete: "filesystem.delete",
        terminal_exec: "terminal.exec",
        git_status: "git.status",
        git_diff: "git.diff",
        git_commit: "git.commit",
        // device.*
        "device.fs_list": "filesystem.list",
        "device.fs_read": "filesystem.read",
        "device.fs_write": "filesystem.write",
        "device.fs_delete": "filesystem.delete",
        "device.fs_copy": "filesystem.write",
        "device.fs_move": "filesystem.move",
        "device.exec": "terminal.exec",
        "device.media_list": "filesystem.list",
        "device.media_open": "app.launch",
        "device.media_import": "media.import",
        "device.apps_list": "system.info",
        "device.apps_launch": "app.launch",
        "device.settings_get": "system.read",
        "device.settings_set": "system.settings",
        "device.screen_shot": "system.screenshot",
        "device.system_info": "system.info",
        "device.system_battery": "system.info",
        "device.system_processes": "system.info",
        "device.system_network": "system.info",
        "device.system_clipboard": "system.clipboard",
        "device.system_notify": "system.notify",
    };
    return map[toolName] ?? "unknown";
}
/**
 * Executa uma tool call com verificações de segurança.
 */
async function executeToolCall(toolCall, userId, tenantId, deviceId) {
    try {
        // Tools de dispositivo roteadas para o device (job queue + polling).
        if (toolCall.name.startsWith("device.")) {
            return executeDeviceTool(toolCall, userId, deviceId);
        }
        // 1. Classificar risco
        const action = mapToolToAction(toolCall.name);
        const classification = (0, risk_engine_1.classifyAction)(action);
        const risk = (0, risk_engine_1.getRisk)(action);
        const needsApproval = (0, risk_engine_1.requiresApproval)(action);
        // 2. Dry-run (quando aplicável)
        if (risk !== "SAFE") {
            const dryResult = await (0, dry_run_1.dryRun)(action, {
                userId,
                tenantId,
                params: toolCall.arguments,
            });
            if (dryResult.status === "error") {
                return {
                    toolCallId: toolCall.id,
                    content: `Erro na simulação: ${dryResult.error}`,
                    isError: true,
                };
            }
            if (needsApproval && !dryResult.wouldSucceed) {
                return {
                    toolCallId: toolCall.id,
                    content: `Ação requer aprovação e não passou na simulação: ${dryResult.simulationResult?.note ?? "desconhecido"}`,
                    isError: true,
                };
            }
        }
        // 3. Executar a tool real
        const result = await runTool(toolCall.name, toolCall.arguments);
        return {
            toolCallId: toolCall.id,
            content: typeof result === "string" ? result : JSON.stringify(result),
            isError: false,
        };
    }
    catch (e) {
        return {
            toolCallId: toolCall.id,
            content: `Erro ao executar ${toolCall.name}: ${e.message}`,
            isError: true,
        };
    }
}
/**
 * Executa uma tool de dispositivo via job queue (nuvem → device polling).
 * Risco DESTRUCTIVE/REVERSIBLE → job aguarda aprovação humana.
 */
async function executeDeviceTool(toolCall, userId, deviceId) {
    if (!deviceId) {
        return {
            toolCallId: toolCall.id,
            content: "[dispositivo] Nenhum dispositivo associado a esta conversa. Use o Agente PC (desktop) ou Agente Mobile.",
            isError: true,
        };
    }
    try {
        const action = mapToolToAction(toolCall.name);
        const classification = (0, risk_engine_1.classifyAction)(action);
        const needsApproval = classification.requiresApproval;
        const job = await (0, device_jobs_1.createDeviceJob)({
            userId,
            deviceId,
            name: toolCall.name,
            args: toolCall.arguments,
            requiresApproval: needsApproval,
            risk: classification.risk,
            requestId: toolCall.id,
        });
        if (needsApproval) {
            return {
                toolCallId: toolCall.id,
                content: `[aprovacao-pendente:${job.id}] A ação "${toolCall.name}" neste dispositivo requer aprovação do usuário. Informe o usuário e aguarde a aprovação antes de prosseguir.`,
                isError: false,
            };
        }
        // Job sem necessidade de aprovação — aguarda execução no dispositivo.
        const done = await (0, device_jobs_1.waitForDeviceJob)(job.id);
        switch (done.status) {
            case "completed":
                return {
                    toolCallId: toolCall.id,
                    content: JSON.stringify(done.result ?? {}),
                    isError: false,
                };
            case "rejected":
                return {
                    toolCallId: toolCall.id,
                    content: "[rejeitado] A ação foi rejeitada pelo usuário.",
                    isError: true,
                };
            case "cancelled":
                return {
                    toolCallId: toolCall.id,
                    content: "[cancelado] A ação foi cancelada.",
                    isError: true,
                };
            default:
                return {
                    toolCallId: toolCall.id,
                    content: `[erro] ${done.error ?? `job ${done.status}`}`,
                    isError: true,
                };
        }
    }
    catch (e) {
        return {
            toolCallId: toolCall.id,
            content: `Erro ao executar ${toolCall.name}: ${e.message}`,
            isError: true,
        };
    }
}
/**
 * Executa a tool real (delega para o executor apropriado).
 */
async function runTool(name, args) {
    const { existsSync, readFileSync, writeFileSync, unlinkSync } = await Promise.resolve().then(() => __importStar(require("fs")));
    const { resolve } = await Promise.resolve().then(() => __importStar(require("path")));
    const { execSync } = await Promise.resolve().then(() => __importStar(require("child_process")));
    const cwd = args.cwd ?? process.cwd();
    switch (name) {
        case "file_read": {
            const p = resolve(cwd, args.path);
            if (!existsSync(p))
                throw new Error(`Arquivo não encontrado: ${p}`);
            return readFileSync(p, "utf-8");
        }
        case "file_write": {
            const p = resolve(cwd, args.path);
            writeFileSync(p, args.content, "utf-8");
            return `Arquivo escrito: ${p}`;
        }
        case "file_delete": {
            const p = resolve(cwd, args.path);
            if (!existsSync(p))
                throw new Error(`Arquivo não encontrado: ${p}`);
            unlinkSync(p);
            return `Arquivo deletado: ${p}`;
        }
        case "terminal_exec": {
            const cmd = args.command;
            const result = execSync(cmd, { cwd, encoding: "utf-8", timeout: 30000 });
            return result;
        }
        case "git_status": {
            return execSync("git status --short", { cwd, encoding: "utf-8" });
        }
        case "git_diff": {
            const file = args.file;
            const cmd = file ? `git diff ${file}` : "git diff";
            return execSync(cmd, { cwd, encoding: "utf-8" });
        }
        case "git_commit": {
            const message = args.message;
            const files = args.files ?? ["."];
            for (const f of files) {
                execSync(`git add ${f}`, { cwd });
            }
            return execSync(`git commit -m "${message}"`, { cwd, encoding: "utf-8" });
        }
        default:
            throw new Error(`Tool desconhecida: ${name}`);
    }
}
// ─── Agent Loop ─────────────────────────────────────────────────────────────
/**
 * Loop principal do agente.
 * Envia mensagem ao LLM, executa tool calls, repete até resposta final.
 */
async function agentLoop(ctx) {
    const maxIter = ctx.maxIterations ?? DEFAULT_MAX_ITERATIONS;
    const riskSummary = { safe: 0, reversible: 0, destructive: 0 };
    let toolCallsExecuted = 0;
    let status = "thinking";
    let awaitingApproval = false;
    const hasDevice = !!ctx.deviceId;
    const tools = getToolDefinitions(hasDevice);
    const messages = [
        { role: "system", content: getSystemPrompt(hasDevice) },
        ...ctx.messages,
    ];
    for (let i = 0; i < maxIter; i++) {
        // 1. Chamar LLM
        const result = await index_1.modelGateway.complete({
            sessionId: ctx.sessionId,
            tools,
            messages: messages.map((m) => ({
                role: m.role,
                content: [{ type: "text", text: m.content }],
                toolCalls: m.toolCalls,
                toolResults: m.toolResults?.map((r) => ({
                    toolCallId: r.toolCallId,
                    name: "",
                    result: r.content,
                })),
                toolCallId: m.toolCallId,
            })),
        });
        const assistantMsg = result.message;
        const text = assistantMsg.content
            .map((c) => c.text ?? "")
            .join("\n");
        const toolCalls = assistantMsg.toolCalls ?? [];
        // 2. Se não há tool calls, retornar resposta final
        if (toolCalls.length === 0) {
            return {
                text,
                toolCallsExecuted,
                riskSummary,
                status: awaitingApproval ? "awaiting_approval" : "idle",
            };
        }
        // 3. Executar tool calls
        status = "executing";
        const results = [];
        for (const tc of toolCalls) {
            const action = mapToolToAction(tc.name);
            const risk = (0, risk_engine_1.getRisk)(action);
            riskSummary[risk]++;
            const result = await executeToolCall(tc, ctx.userId, ctx.tenantId, ctx.deviceId);
            results.push(result);
            toolCallsExecuted++;
            if (result.content.startsWith("[aprovacao-pendente:")) {
                awaitingApproval = true;
            }
        }
        // 4. Adicionar assistant message + tool results ao contexto
        messages.push({
            role: "assistant",
            content: text,
            toolCalls: toolCalls.map((tc) => ({
                id: tc.id,
                name: tc.name,
                arguments: tc.arguments,
            })),
        });
        // Uma mensagem de tool por chamada (protocolo OpenAI function calling).
        for (const r of results) {
            messages.push({
                role: "tool",
                content: r.content,
                toolCallId: r.toolCallId,
                toolResults: [
                    {
                        toolCallId: r.toolCallId,
                        content: r.content,
                        isError: r.isError,
                    },
                ],
            });
        }
    }
    return {
        text: "Limite de iterações atingido.",
        toolCallsExecuted,
        riskSummary,
        status: "error",
        error: "max_iterations_exceeded",
    };
}
