/**
 * Operações da fila de jobs de dispositivo (lado web/API).
 * Sempre com verificação de ownership (user_id) para respeitar isolamento.
 */

import { SupabaseClient } from "@supabase/supabase-js";

export type DeviceJobRow = {
  id: string;
  user_id: string;
  device_id: string;
  name: string;
  args: Record<string, unknown>;
  status: string;
  requires_approval: boolean;
  risk: string | null;
  result: Record<string, unknown> | null;
  error: string | null;
  request_id: string | null;
  created_at: string;
  started_at: string | null;
  completed_at: string | null;
};

export async function listDeviceJobs(
  sb: SupabaseClient,
  params: { userId: string; deviceId?: string; limit?: number },
): Promise<DeviceJobRow[]> {
  let q = sb.from("device_jobs").select("*").eq("user_id", params.userId);
  if (params.deviceId) q = q.eq("device_id", params.deviceId);
  q = q.order("created_at", { ascending: false }).limit(params.limit ?? 50);
  const { data, error } = await q;
  if (error) throw new Error(error.message);
  return data as DeviceJobRow[];
}

/** Reivindica o job queued mais antigo do device (poll). Retorna null se nada. */
export async function claimNextDeviceJob(
  sb: SupabaseClient,
  params: { userId: string; deviceId: string },
): Promise<DeviceJobRow | null> {
  const { data: target, error: listError } = await sb
    .from("device_jobs")
    .select("id")
    .eq("user_id", params.userId)
    .eq("device_id", params.deviceId)
    .eq("status", "queued")
    .order("created_at", { ascending: true })
    .limit(1)
    .maybeSingle();

  if (listError) throw new Error(listError.message);
  if (!target) return null;

  const { data, error } = await sb
    .from("device_jobs")
    .update({ status: "running", started_at: new Date().toISOString() })
    .eq("id", target.id)
    .eq("status", "queued")
    .select("*")
    .single();

  if (error) throw new Error(error.message);
  return data as DeviceJobRow;
}

/** Submete o resultado de um job (device → nuvem). */
export async function submitDeviceJobResult(
  sb: SupabaseClient,
  params: {
    userId: string;
    jobId: string;
    status: "completed" | "failed" | "cancelled";
    result?: unknown;
    error?: string;
  },
): Promise<DeviceJobRow> {
  const { data, error } = await sb
    .from("device_jobs")
    .update({
      status: params.status,
      result: params.result ?? null,
      error: params.error ?? null,
      completed_at: new Date().toISOString(),
    })
    .eq("id", params.jobId)
    .eq("user_id", params.userId)
    .select("*")
    .single();

  if (error) throw new Error(error.message);
  return data as DeviceJobRow;
}

/** Aprova ou rejeita um job que aguarda approval humano. */
export async function approveDeviceJob(
  sb: SupabaseClient,
  params: { userId: string; jobId: string; approved: boolean },
): Promise<DeviceJobRow> {
  const { data, error } = await sb
    .from("device_jobs")
    .update({
      status: params.approved ? "queued" : "rejected",
      completed_at: params.approved ? null : new Date().toISOString(),
      error: params.approved ? null : "Rejeitado pelo usuário",
    })
    .eq("id", params.jobId)
    .eq("user_id", params.userId)
    .eq("status", "awaiting_approval")
    .select("*")
    .single();

  if (error) throw new Error(error.message);
  return data as DeviceJobRow;
}

/** Aprova ou rejeita múltiplos jobs de uma vez (bulk). */
export async function bulkApproveDeviceJobs(
  sb: SupabaseClient,
  params: { userId: string; jobIds: string[]; approved: boolean },
): Promise<{ updated: number }> {
  const newStatus = params.approved ? "queued" : "rejected";
  const updates: Record<string, unknown> = {
    status: newStatus,
  };
  if (!params.approved) {
    updates.error = "Rejeitado pelo usuário (bulk)";
    updates.completed_at = new Date().toISOString();
  } else {
    updates.completed_at = null;
  }

  const { count, error } = await sb
    .from("device_jobs")
    .update(updates)
    .eq("user_id", params.userId)
    .eq("status", "awaiting_approval")
    .in("id", params.jobIds);

  if (error) throw new Error(error.message);
  return { updated: count ?? 0 };
}

/** Rejeita jobs expirados (após TTL). Retorna quantos foram rejeitados. */
export async function expirePendingJobs(
  sb: SupabaseClient,
  params: { userId: string; ttlMs: number },
): Promise<{ expired: number }> {
  const cutoff = new Date(Date.now() - params.ttlMs).toISOString();
  const { count, error } = await sb
    .from("device_jobs")
    .update({
      status: "rejected",
      error: "Expirado (tempo limite de aprovação atingido)",
      completed_at: new Date().toISOString(),
    })
    .eq("user_id", params.userId)
    .eq("status", "awaiting_approval")
    .lt("created_at", cutoff);

  if (error) throw new Error(error.message);
  return { expired: count ?? 0 };
}
