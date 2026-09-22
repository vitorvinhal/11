/**
 * Device jobs — fila de tool calls entre o agente (nuvem) e o dispositivo.
 *
 * Transporte Vercel-compatível: o agente cria o job aqui, o dispositivo faz
 * polling e executa, e o agente espera o resultado (ou a aprovação).
 *
 * Padrão de client: service role (server-side), igual session-manager/memory.
 */
/** Nome de tool de dispositivo — espelha o union de @11/shared sem dependência de build. */
export type DeviceToolName = "device.fs_list" | "device.fs_read" | "device.fs_write" | "device.fs_delete" | "device.fs_copy" | "device.fs_move" | "device.exec" | "device.media_list" | "device.media_open" | "device.media_import" | "device.apps_list" | "device.apps_launch" | "device.settings_get" | "device.settings_set" | "device.screen_shot" | "device.system_info" | "device.system_battery" | "device.system_processes" | "device.system_network" | "device.system_clipboard" | "device.system_notify" | (string & {});
export interface DeviceJob {
    id: string;
    userId: string;
    deviceId: string;
    name: DeviceToolName;
    args: Record<string, unknown>;
    status: "queued" | "awaiting_approval" | "running" | "completed" | "failed" | "rejected" | "cancelled" | "timeout";
    requiresApproval: boolean;
    risk?: string | null;
    result?: unknown;
    error?: string | null;
    requestId?: string | null;
    createdAt: string;
    startedAt?: string | null;
    completedAt?: string | null;
}
/** Cria um job de tool para o dispositivo. Status inicial: queued | awaiting_approval. */
export declare function createDeviceJob(params: {
    userId: string;
    deviceId: string;
    name: DeviceToolName;
    args: Record<string, unknown>;
    requiresApproval: boolean;
    risk?: string;
    requestId?: string;
}): Promise<DeviceJob>;
/** Espera o job chegar a estado terminal (completed/failed/rejected/cancelled/timeout). */
export declare function waitForDeviceJob(jobId: string, opts?: {
    timeoutMs?: number;
    intervalMs?: number;
}): Promise<DeviceJob>;
/** Resolve um job em estado final. */
export declare function resolveDeviceJob(jobId: string, update: {
    status: DeviceJob["status"];
    result?: unknown;
    error?: string;
}): Promise<void>;
/** Marca job como running (claim pelo dispositivo). */
export declare function claimDeviceJob(jobId: string): Promise<boolean>;
