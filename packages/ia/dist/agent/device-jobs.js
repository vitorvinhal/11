"use strict";
/**
 * Device jobs — fila de tool calls entre o agente (nuvem) e o dispositivo.
 *
 * Transporte Vercel-compatível: o agente cria o job aqui, o dispositivo faz
 * polling e executa, e o agente espera o resultado (ou a aprovação).
 *
 * Padrão de client: service role (server-side), igual session-manager/memory.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDeviceJob = createDeviceJob;
exports.waitForDeviceJob = waitForDeviceJob;
exports.resolveDeviceJob = resolveDeviceJob;
exports.claimDeviceJob = claimDeviceJob;
const supabase_js_1 = require("@supabase/supabase-js");
const TERMINAL_STATUSES = new Set([
    "completed",
    "failed",
    "rejected",
    "cancelled",
    "timeout",
]);
let _sb = null;
function getSupabase() {
    if (_sb)
        return _sb;
    _sb = (0, supabase_js_1.createClient)(process.env.NEXT_PUBLIC_SUPABASE_URL ?? "", process.env.SUPABASE_SERVICE_ROLE_KEY ?? "");
    return _sb;
}
/** Cria um job de tool para o dispositivo. Status inicial: queued | awaiting_approval. */
async function createDeviceJob(params) {
    const { data, error } = await getSupabase()
        .from("device_jobs")
        .insert({
        user_id: params.userId,
        device_id: params.deviceId,
        name: params.name,
        args: params.args,
        status: params.requiresApproval ? "awaiting_approval" : "queued",
        requires_approval: params.requiresApproval,
        risk: params.risk ?? null,
        request_id: params.requestId ?? null,
    })
        .select("*")
        .single();
    if (error)
        throw new Error(`Falha ao criar job de dispositivo: ${error.message}`);
    return toDeviceJob(data);
}
/** Espera o job chegar a estado terminal (completed/failed/rejected/cancelled/timeout). */
async function waitForDeviceJob(jobId, opts = {}) {
    const timeoutMs = opts.timeoutMs ?? 120_000;
    const intervalMs = opts.intervalMs ?? 1_000;
    const deadline = Date.now() + timeoutMs;
    while (Date.now() < deadline) {
        const { data, error } = await getSupabase()
            .from("device_jobs")
            .select("*")
            .eq("id", jobId)
            .single();
        if (error)
            throw new Error(`Falha ao ler job: ${error.message}`);
        const job = toDeviceJob(data);
        if (TERMINAL_STATUSES.has(job.status))
            return job;
        await new Promise((r) => setTimeout(r, intervalMs));
    }
    // Timeout → marca o job como timeout para destravar o dispositivo.
    await getSupabase()
        .from("device_jobs")
        .update({ status: "timeout", completed_at: new Date().toISOString() })
        .eq("id", jobId);
    throw new Error(`O dispositivo não respondeu a tempo (job ${jobId}).`);
}
/** Resolve um job em estado final. */
async function resolveDeviceJob(jobId, update) {
    await getSupabase()
        .from("device_jobs")
        .update({
        status: update.status,
        result: update.result ?? null,
        error: update.error ?? null,
        completed_at: new Date().toISOString(),
    })
        .eq("id", jobId);
}
/** Marca job como running (claim pelo dispositivo). */
async function claimDeviceJob(jobId) {
    const { data, error } = await getSupabase()
        .from("device_jobs")
        .update({ status: "running", started_at: new Date().toISOString() })
        .eq("id", jobId)
        .eq("status", "queued")
        .select("id")
        .single();
    if (error)
        return false;
    return !!data;
}
function toDeviceJob(row) {
    return {
        id: row.id,
        userId: row.user_id,
        deviceId: row.device_id,
        name: row.name,
        args: row.args ?? {},
        status: row.status,
        requiresApproval: row.requires_approval ?? false,
        risk: row.risk ?? null,
        result: row.result ?? undefined,
        error: row.error ?? null,
        requestId: row.request_id ?? null,
        createdAt: row.created_at,
        startedAt: row.started_at ?? null,
        completedAt: row.completed_at ?? null,
    };
}
