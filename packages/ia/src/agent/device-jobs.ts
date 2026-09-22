/**
 * Device jobs — fila de tool calls entre o agente (nuvem) e o dispositivo.
 *
 * Transporte Vercel-compatível: o agente cria o job aqui, o dispositivo faz
 * polling e executa, e o agente espera o resultado (ou a aprovação).
 *
 * Padrão de client: service role (server-side), igual session-manager/memory.
 */

import { createClient, SupabaseClient } from "@supabase/supabase-js";

/** Nome de tool de dispositivo — espelha o union de @11/shared sem dependência de build. */
export type DeviceToolName =
  | "device.fs_list"
  | "device.fs_read"
  | "device.fs_write"
  | "device.fs_delete"
  | "device.fs_copy"
  | "device.fs_move"
  | "device.exec"
  | "device.media_list"
  | "device.media_open"
  | "device.media_import"
  | "device.apps_list"
  | "device.apps_launch"
  | "device.settings_get"
  | "device.settings_set"
  | "device.screen_shot"
  | "device.system_info"
  | "device.system_battery"
  | "device.system_processes"
  | "device.system_network"
  | "device.system_clipboard"
  | "device.system_notify"
  | (string & {});

export interface DeviceJob {
  id: string;
  userId: string;
  deviceId: string;
  name: DeviceToolName;
  args: Record<string, unknown>;
  status:
    | "queued"
    | "awaiting_approval"
    | "running"
    | "completed"
    | "failed"
    | "rejected"
    | "cancelled"
    | "timeout";
  requiresApproval: boolean;
  risk?: string | null;
  result?: unknown;
  error?: string | null;
  requestId?: string | null;
  createdAt: string;
  startedAt?: string | null;
  completedAt?: string | null;
}

const TERMINAL_STATUSES = new Set([
  "completed",
  "failed",
  "rejected",
  "cancelled",
  "timeout",
]);

let _sb: SupabaseClient | null = null;

function getSupabase(): SupabaseClient {
  if (_sb) return _sb;
  _sb = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
    process.env.SUPABASE_SERVICE_ROLE_KEY ?? "",
  );
  return _sb;
}

/** Cria um job de tool para o dispositivo. Status inicial: queued | awaiting_approval. */
export async function createDeviceJob(params: {
  userId: string;
  deviceId: string;
  name: DeviceToolName;
  args: Record<string, unknown>;
  requiresApproval: boolean;
  risk?: string;
  requestId?: string;
}): Promise<DeviceJob> {
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
export async function waitForDeviceJob(
  jobId: string,
  opts: { timeoutMs?: number; intervalMs?: number } = {},
): Promise<DeviceJob> {
  const timeoutMs = opts.timeoutMs ?? 120_000;
  const intervalMs = opts.intervalMs ?? 1_000;
  const deadline = Date.now() + timeoutMs;

  while (Date.now() < deadline) {
    const { data, error } = await getSupabase()
      .from("device_jobs")
      .select("*")
      .eq("id", jobId)
      .single();

    if (error) throw new Error(`Falha ao ler job: ${error.message}`);
    const job = toDeviceJob(data);
    if (TERMINAL_STATUSES.has(job.status)) return job;

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
export async function resolveDeviceJob(
  jobId: string,
  update: {
    status: DeviceJob["status"];
    result?: unknown;
    error?: string;
  },
): Promise<void> {
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
export async function claimDeviceJob(jobId: string): Promise<boolean> {
  const { data, error } = await getSupabase()
    .from("device_jobs")
    .update({ status: "running", started_at: new Date().toISOString() })
    .eq("id", jobId)
    .eq("status", "queued")
    .select("id")
    .single();

  if (error) return false;
  return !!data;
}

function toDeviceJob(row: any): DeviceJob {
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
