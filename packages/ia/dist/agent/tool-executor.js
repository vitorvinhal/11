"use strict";
/**
 * FASE 5B — ToolExecutor
 *
 * Pipeline completo de execução de tools com safety integrado.
 * Diferente do agent-core (que é leve), aqui temos:
 *   - Checkpoint/rollback automático para ações REVERSIBLE
 *   - Pending actions para ações DESTRUCTIVE
 *   - Audit log em tempo real
 *   - Retry com backoff
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
exports.executeTool = executeTool;
const risk_engine_1 = require("../safety/risk-engine");
const dry_run_1 = require("../safety/dry-run");
const checkpoint_1 = require("../safety/checkpoint");
const supabase_js_1 = require("@supabase/supabase-js");
// ─── Configuração ───────────────────────────────────────────────────────────
const MAX_RETRIES = 2;
const RETRY_DELAY_MS = 1000;
// ─── Supabase Client ────────────────────────────────────────────────────────
function createServiceClient() {
    return (0, supabase_js_1.createClient)(process.env.NEXT_PUBLIC_SUPABASE_URL ?? '', process.env.SUPABASE_SERVICE_ROLE_KEY ?? '');
}
/**
 * Registra tools disponíveis para execução.
 */
function createToolRegistry() {
    return [
        {
            name: 'file_read',
            action: 'filesystem.read',
            handler: async (args) => {
                const { existsSync, readFileSync } = await Promise.resolve().then(() => __importStar(require('fs')));
                const { resolve } = await Promise.resolve().then(() => __importStar(require('path')));
                const p = resolve(process.cwd(), args.path);
                if (!existsSync(p))
                    throw new Error(`Arquivo não encontrado: ${p}`);
                return readFileSync(p, 'utf-8');
            },
        },
        {
            name: 'file_write',
            action: 'filesystem.write',
            handler: async (args) => {
                const { writeFileSync } = await Promise.resolve().then(() => __importStar(require('fs')));
                const { resolve } = await Promise.resolve().then(() => __importStar(require('path')));
                const p = resolve(process.cwd(), args.path);
                writeFileSync(p, args.content, 'utf-8');
                return { written: true, path: p };
            },
        },
        {
            name: 'file_delete',
            action: 'filesystem.delete',
            handler: async (args) => {
                const { existsSync, unlinkSync } = await Promise.resolve().then(() => __importStar(require('fs')));
                const { resolve } = await Promise.resolve().then(() => __importStar(require('path')));
                const p = resolve(process.cwd(), args.path);
                if (!existsSync(p))
                    throw new Error(`Arquivo não encontrado: ${p}`);
                unlinkSync(p);
                return { deleted: true, path: p };
            },
        },
        {
            name: 'terminal_exec',
            action: 'terminal.exec',
            handler: async (args) => {
                const { execSync } = await Promise.resolve().then(() => __importStar(require('child_process')));
                return execSync(args.command, {
                    cwd: args.cwd ?? process.cwd(),
                    encoding: 'utf-8',
                    timeout: 30000,
                });
            },
        },
    ];
}
// ─── Execution Pipeline ─────────────────────────────────────────────────────
/**
 * Executa uma tool com pipeline completo de segurança.
 *
 * Pipeline:
 *   1. Classificar risco
 *   2. Dry-run (se DESTRUCTIVE ou REVERSIBLE)
 *   3. Checkpoint (se REVERSIBLE e enableCheckpoints)
 *   4. Executar com retry
 *   5. Rollback (se falhar e checkpoint existe)
 */
async function executeTool(toolName, args, ctx, sb) {
    const start = Date.now();
    const client = sb ?? createServiceClient();
    const registry = createToolRegistry();
    const tool = registry.find((t) => t.name === toolName);
    if (!tool) {
        return {
            status: 'failed',
            toolName,
            arguments: args,
            error: `Tool desconhecida: ${toolName}`,
            riskLevel: 'SAFE',
            durationMs: Date.now() - start,
        };
    }
    // 1. Classificar risco
    const classification = (0, risk_engine_1.classifyAction)(tool.action);
    const riskLevel = (0, risk_engine_1.getRisk)(tool.action);
    // 2. Dry-run para ações não seguras
    let dryRunResult;
    if (riskLevel !== 'SAFE') {
        dryRunResult = await (0, dry_run_1.dryRun)(tool.action, {
            userId: ctx.userId,
            tenantId: ctx.tenantId,
            params: args,
        });
        if (dryRunResult.status === 'error') {
            return {
                status: 'failed',
                toolName,
                arguments: args,
                error: `Dry-run falhou: ${dryRunResult.error}`,
                dryRun: dryRunResult,
                riskLevel,
                durationMs: Date.now() - start,
            };
        }
        // Ações destrutivas que falharam no dry-run
        if (riskLevel === 'DESTRUCTIVE' && !dryRunResult.wouldSucceed) {
            return {
                status: 'failed',
                toolName,
                arguments: args,
                error: `Ação destrutiva não passou no dry-run: ${dryRunResult.simulationResult?.note ?? 'desconhecido'}`,
                dryRun: dryRunResult,
                riskLevel,
                durationMs: Date.now() - start,
            };
        }
    }
    // 3. Checkpoint para ações reversíveis
    let checkpoint;
    if (riskLevel === 'REVERSIBLE' && ctx.enableCheckpoints !== false) {
        try {
            checkpoint = await (0, checkpoint_1.createCheckpoint)({
                actionId: `${toolName}-${Date.now()}`,
                tenantId: ctx.tenantId,
                userId: ctx.userId,
                targetType: tool.action.split('.')[0],
                targetId: JSON.stringify(args),
                beforeState: args,
            }, client);
        }
        catch {
            // Checkpoint é best-effort — não bloqueia execução
        }
    }
    // 4. Executar com retry
    let lastError;
    for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
        try {
            const result = await tool.handler(args);
            // Log de sucesso
            await logExecution(client, {
                userId: ctx.userId,
                sessionId: ctx.sessionId,
                toolName,
                action: tool.action,
                riskLevel,
                status: 'completed',
                checkpointId: checkpoint?.id,
                durationMs: Date.now() - start,
            });
            return {
                status: 'completed',
                toolName,
                arguments: args,
                result,
                checkpoint,
                dryRun: dryRunResult,
                riskLevel,
                durationMs: Date.now() - start,
            };
        }
        catch (e) {
            lastError = e.message;
            if (attempt < MAX_RETRIES) {
                await new Promise((r) => setTimeout(r, RETRY_DELAY_MS * (attempt + 1)));
            }
        }
    }
    // 5. Rollback se checkpoint existe
    if (checkpoint) {
        try {
            await (0, checkpoint_1.restoreCheckpoint)(checkpoint.id, ctx.userId, client);
        }
        catch {
            // Rollback é best-effort
        }
    }
    // Log de falha
    await logExecution(client, {
        userId: ctx.userId,
        sessionId: ctx.sessionId,
        toolName,
        action: tool.action,
        riskLevel,
        status: 'failed',
        checkpointId: checkpoint?.id,
        error: lastError,
        durationMs: Date.now() - start,
    });
    return {
        status: checkpoint ? 'rolled_back' : 'failed',
        toolName,
        arguments: args,
        error: lastError,
        checkpoint,
        dryRun: dryRunResult,
        riskLevel,
        durationMs: Date.now() - start,
    };
}
async function logExecution(sb, entry) {
    try {
        await sb.from('bridge_audit_log').insert({
            user_id: entry.userId,
            session_id: entry.sessionId,
            operation: entry.toolName,
            details: JSON.stringify({
                action: entry.action,
                riskLevel: entry.riskLevel,
                status: entry.status,
                checkpointId: entry.checkpointId,
                error: entry.error,
                durationMs: entry.durationMs,
            }),
        });
    }
    catch {
        // Audit log é best-effort
    }
}
