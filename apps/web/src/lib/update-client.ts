"use client";

/**
 * Update client — checagem de nova versão do sistema (web, mobile e desktop).
 *
 * A versão instalada é rastreada no cliente pelo `versionCode` (int, incrementa
 * a cada deploy via scripts/version.js). Quando o servidor publica um versionCode
 * maior que o reconhecido no device, o sistema notifica o usuário.
 */

const ACK_VERSION_KEY = "eleven_ack_version_code_v1";
const NOTIFIED_VERSION_KEY = "eleven_notified_version_code_v1";

export function getNotifiedCode(): number {
  if (typeof window === "undefined") return 0;
  const raw = window.localStorage.getItem(NOTIFIED_VERSION_KEY);
  const n = raw ? parseInt(raw, 10) : NaN;
  return Number.isFinite(n) ? n : 0;
}

export function markVersionNotified(code: number): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(NOTIFIED_VERSION_KEY, String(code));
}

export interface UpdateDownloads {
  desktop: string | null;
  msi: string | null;
  mobile: string | null;
  android: string | null;
  ios: string | null;
  web: string | null;
}

export interface UpdateInfo {
  version: string;
  versionCode: number;
  name: string;
  channel: string;
  buildTime: string | null;
  changelog: string[];
  downloads: UpdateDownloads;
}

export function getAcknowledgedCode(): number {
  if (typeof window === "undefined") return 0;
  const raw = window.localStorage.getItem(ACK_VERSION_KEY);
  const n = raw ? parseInt(raw, 10) : NaN;
  return Number.isFinite(n) ? n : 0;
}

export function acknowledgeVersion(code: number): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(ACK_VERSION_KEY, String(code));
}

/** Marca "visto" a versão atual na primeira checagem (não notifica build inicial). */
export function primeVersionCheck(code: number): void {
  if (getAcknowledgedCode() > 0) return;
  acknowledgeVersion(code);
}

/**
 * Lê o access_token da sessão Supabase persistida em localStorage
 * (storageKey `eleven-sb-auth`, ver lib/auth.tsx). Usado por chamadas
 * fetch que rodam fora de componentes React (ex.: fetchUpdates).
 */
export function getStoredAccessToken(): string | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem("eleven-sb-auth");
    if (!raw) return null;
    const session = JSON.parse(raw) as { access_token?: string };
    return session?.access_token ?? null;
  } catch {
    return null;
  }
}

export async function fetchUpdates(): Promise<UpdateInfo | null> {
  try {
    const token = getStoredAccessToken();
    const res = await fetch("/api/updates", {
      cache: "no-store",
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
    if (!res.ok) return null;
    return (await res.json()) as UpdateInfo;
  } catch {
    return null;
  }
}

export interface UpdateCheckResult {
  info: UpdateInfo | null;
  hasUpdate: boolean;
  newerCode: number;
}

export async function checkForUpdate(): Promise<UpdateCheckResult> {
  const info = await fetchUpdates();
  if (!info) return { info: null, hasUpdate: false, newerCode: 0 };
  const ack = getAcknowledgedCode();
  if (ack === 0) primeVersionCheck(info.versionCode);
  return {
    info,
    hasUpdate: info.versionCode > getAcknowledgedCode(),
    newerCode: info.versionCode,
  };
}

/** Notificação nativa da nova versão (iOS/Android via bridge; desktop via PC Agent/Notification). */
export async function notifyNewVersion(
  info: UpdateInfo,
  platform?: string,
): Promise<void> {
  const title = "Nova versão disponível";
  const body = `v${info.version} do 11 foi lançada — abra o perfil (⚙) e atualize.`;

  if (typeof window === "undefined") return;

  // Mobile nativo (Capacitor bridge).
  if (platform === "mobile-app" && window.DeviceBridge) {
    try {
      await window.DeviceBridge.execute("device.system_notify", {
        title,
        body,
      });
      return;
    } catch {
      /* fallback para banner */
    }
  }

  // Desktop: tenta o servidor local (PC Agent) se o usuário pareou o device.
  if (platform === "desktop-app") {
    try {
      const { getDeviceContext } = await import("./device-client");
      const ctx = getDeviceContext();
      if (ctx.secret) {
        const res = await fetch("http://localhost:3001/device/tool", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${ctx.secret}`,
          },
          body: JSON.stringify({
            name: "device.system_notify",
            args: { title, body },
          }),
        });
        if (res.ok) return;
      }
    } catch {
      /* banner */
    }
  }

  // Fallback: Notification API do navegador/webview.
  try {
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification(title, { body });
      return;
    }
  } catch {
    /* banner */
  }

  // Durante o primeiro build o banner assume o papel da notificação.
  void body;
}

/**
 * URL de download para a plataforma.
 * Web:GitHub releases | Desktop: installer | Mobile: APK/IPA
 */
export function getDownloadUrlForPlatform(
  downloads: UpdateDownloads,
  platform?: string,
): string | null {
  if (platform === "mobile-app") {
    return downloads.android ?? downloads.mobile;
  }
  if (platform === "desktop-app") {
    return downloads.desktop;
  }
  // Web browsers (desktop-web, mobile-web): show GitHub releases or web download
  return downloads.web ?? downloads.desktop ?? downloads.mobile ?? null;
}

/** Dispara o download da nova versão para a plataforma do usuário. */
export function openDownloadForPlatform(
  downloads: UpdateDownloads,
  platform?: string,
): boolean {
  const url = getDownloadUrlForPlatform(downloads, platform);
  if (!url) return false;
  // Apps (WebView Tauri/Capacitor): navega na mesma aba (popup costuma ser bloqueado).
  if (platform === "desktop-app" || platform === "mobile-app") {
    window.location.href = url;
    return true;
  }
  try {
    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (!win) window.location.href = url;
  } catch {
    window.location.href = url;
  }
  return true;
}

/**
 * Ações de update por plataforma:
 * - web: refresh da página (web apps auto-atualizam)
 * - desktop-app / mobile-app: download do instalador
 */
export function getUpdateAction(platform?: string): {
  label: string;
  action: "refresh" | "download";
} {
  if (platform === "desktop-app" || platform === "mobile-app") {
    return { label: "Baixar nova versão", action: "download" };
  }
  return { label: "Atualizar agora", action: "refresh" };
}
