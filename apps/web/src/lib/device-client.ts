"use client";

/**
 * Device client — pareamento do Agente de Dispositivo (PC / Mobile).
 * Gera e persiste um deviceId; registra na nuvem e guarda o secret de pareamento.
 * Só atua em plataformas de app nativo (desktop-app / mobile-app).
 */

import { getPlatform, type Platform } from "./platform";

const DEVICE_ID_KEY = "eleven_device_id_v1";
const DEVICE_SECRET_KEY = "eleven_device_secret_v1";

export interface DeviceContext {
  deviceId: string | null;
  platform: Platform;
  secret: string | null;
  registered: boolean;
}

export function generateDeviceId(): string {
  if (
    typeof crypto !== "undefined" &&
    typeof crypto.randomUUID === "function"
  ) {
    return crypto.randomUUID();
  }
  return `dev-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

export function getStoredDeviceId(): string | null {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(DEVICE_ID_KEY);
}

export function getStoredDeviceSecret(): string | null {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(DEVICE_SECRET_KEY);
}

export function ensureDeviceId(): string {
  const existing = getStoredDeviceId();
  if (existing) return existing;
  const id = generateDeviceId();
  if (typeof window !== "undefined") {
    window.localStorage.setItem(DEVICE_ID_KEY, id);
  }
  return id;
}

function detectOs(): string | undefined {
  if (typeof navigator === "undefined") return undefined;
  const ua = navigator.userAgent;
  if (/win/i.test(ua)) return "Windows";
  if (/mac/i.test(ua)) return "macOS";
  if (/linux/i.test(ua)) return "Linux";
  if (/android/i.test(ua)) return "Android";
  if (/iphone|ipad|ipod/i.test(ua)) return "iOS";
  return undefined;
}

/**
 * Registra o device na nuvem (se for app nativo) e persiste o secret de pareamento.
 * Seguro de chamar várias vezes (upsert).
 */
export async function registerAppDevice(
  token?: string,
): Promise<DeviceContext> {
  const platform = getPlatform();
  if (platform !== "desktop-app" && platform !== "mobile-app") {
    return { deviceId: null, platform, secret: null, registered: false };
  }

  const deviceId = ensureDeviceId();
  if (!token) token = (await getAccessTokenSafe()) ?? undefined;
  if (!token)
    return {
      deviceId,
      platform,
      secret: getStoredDeviceSecret(),
      registered: false,
    };

  try {
    const res = await fetch("/api/devices/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        deviceId,
        platform,
        displayName: platform === "desktop-app" ? "PC" : "Celular",
        os: detectOs(),
        appVersion: await fetchAppVersion(),
      }),
    });

    const data = (await res.json()) as {
      secret?: string;
      created?: boolean;
    };

    if (data.secret && typeof window !== "undefined") {
      window.localStorage.setItem(DEVICE_SECRET_KEY, data.secret);
    }

    return {
      deviceId,
      platform,
      secret: getStoredDeviceSecret(),
      registered: true,
    };
  } catch {
    return {
      deviceId,
      platform,
      secret: getStoredDeviceSecret(),
      registered: false,
    };
  }
}

async function getAccessTokenSafe(): Promise<string | null> {
  try {
    const { createClient } = await import("@supabase/supabase-js");
    const sb = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
    );
    const { data } = await sb.auth.getSession();
    return data.session?.access_token ?? null;
  } catch {
    return null;
  }
}

async function fetchAppVersion(): Promise<string | undefined> {
  try {
    const r = await fetch("/version.json");
    if (!r.ok) return undefined;
    const j = (await r.json()) as { version?: string };
    return j.version;
  } catch {
    return undefined;
  }
}

/** Retorna o contexto atual do device (lado cliente). */
export function getDeviceContext(): DeviceContext {
  const platform = getPlatform();
  const deviceId = getStoredDeviceId();
  return {
    deviceId,
    platform,
    secret: getStoredDeviceSecret(),
    registered: !!deviceId,
  };
}
