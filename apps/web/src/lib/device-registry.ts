import { createHash, randomBytes } from "crypto";
import { SupabaseClient } from "@supabase/supabase-js";
import {
  DeviceInfo,
  DevicePlatform,
  RegisterDeviceInput,
  RegisterDeviceResult,
} from "@11/shared";

const VALID_PLATFORMS: DevicePlatform[] = ["desktop-app", "mobile-app"];

/** Hash determinístico do segredo — nunca armazenamos o valor cru. */
export function hashDeviceSecret(
  secret: string,
  userId: string,
  deviceId: string,
): string {
  return createHash("sha256")
    .update(`${secret}:${userId}:${deviceId}`)
    .digest("hex");
}

/** Gera segredo de pareamento (retornado uma única vez na criação). */
export function generateDeviceSecret(): string {
  return randomBytes(32).toString("hex");
}

export function isValidDeviceId(id: string): boolean {
  return typeof id === "string" && id.length >= 8 && id.length <= 64;
}

export function isValidPlatform(p: string): p is DevicePlatform {
  return VALID_PLATFORMS.includes(p as DevicePlatform);
}

/** Converte linha do Supabase em DeviceInfo. */
function toDeviceInfo(row: any, online: boolean): DeviceInfo {
  return {
    deviceId: row.device_id,
    userId: row.user_id,
    platform: row.platform,
    displayName: row.display_name ?? undefined,
    os: row.os ?? undefined,
    osVersion: row.os_version ?? undefined,
    model: row.model ?? undefined,
    appVersion: row.app_version ?? undefined,
    lastSeen: row.last_seen ?? undefined,
    status: online ? "online" : row.last_seen ? "offline" : "never",
  };
}

/**
 * Registra (cria/atualiza) um device do usuário.
 * Retorna o segredo apenas na criação.
 */
export async function registerDevice(
  sb: SupabaseClient,
  input: RegisterDeviceInput,
  userId: string,
): Promise<RegisterDeviceResult> {
  if (!isValidDeviceId(input.deviceId)) {
    throw new Error("deviceId inválido (mín. 8, máx. 64 caracteres)");
  }
  if (!isValidPlatform(input.platform)) {
    throw new Error(`plataforma inválida: ${input.platform}`);
  }

  const { data: existing } = await sb
    .from("devices")
    .select("*")
    .eq("user_id", userId)
    .eq("device_id", input.deviceId)
    .maybeSingle();

  if (existing) {
    const { data: updated, error } = await sb
      .from("devices")
      .update({
        display_name: input.displayName ?? existing.display_name,
        os: input.os ?? existing.os,
        os_version: input.osVersion ?? existing.os_version,
        model: input.model ?? existing.model,
        app_version: input.appVersion ?? existing.app_version,
        last_seen: new Date().toISOString(),
      })
      .eq("user_id", userId)
      .eq("device_id", input.deviceId)
      .select("*")
      .single();

    if (error) throw new Error(error.message);
    return {
      device: toDeviceInfo({ ...existing, ...updated }, false),
      created: false,
    };
  }

  const secret = generateDeviceSecret();
  const { data: inserted, error } = await sb
    .from("devices")
    .insert({
      user_id: userId,
      device_id: input.deviceId,
      platform: input.platform,
      display_name: input.displayName ?? null,
      os: input.os ?? null,
      os_version: input.osVersion ?? null,
      model: input.model ?? null,
      app_version: input.appVersion ?? null,
      device_secret_hash: hashDeviceSecret(secret, userId, input.deviceId),
      last_seen: new Date().toISOString(),
    })
    .select("*")
    .single();

  if (error) throw new Error(error.message);
  return { device: toDeviceInfo(inserted, false), secret, created: true };
}

/** Verifica se o device pertence ao usuário e se o segredo confere. */
export async function verifyDeviceSecret(
  sb: SupabaseClient,
  deviceId: string,
  userId: string,
  secret: string,
): Promise<boolean> {
  const { data } = await sb
    .from("devices")
    .select("device_secret_hash")
    .eq("user_id", userId)
    .eq("device_id", deviceId)
    .maybeSingle();

  if (!data?.device_secret_hash) return false;
  const expected = hashDeviceSecret(secret, userId, deviceId);
  return expected === data.device_secret_hash;
}

/** Lista os devices pareados do usuário. */
export async function getDevices(
  sb: SupabaseClient,
  userId: string,
): Promise<DeviceInfo[]> {
  const { data, error } = await sb
    .from("devices")
    .select("*")
    .eq("user_id", userId)
    .order("last_seen", { ascending: false });

  if (error) throw new Error(error.message);
  return data.map((row: any) => toDeviceInfo(row, false));
}

/** Atualiza last_seen do device (heartbeat). */
export async function touchDevice(
  sb: SupabaseClient,
  userId: string,
  deviceId: string,
): Promise<void> {
  const { error } = await sb
    .from("devices")
    .update({ last_seen: new Date().toISOString() })
    .eq("user_id", userId)
    .eq("device_id", deviceId);
  if (error) throw new Error(error.message);
}
