/**
 * Platform detection: web, mobile web, desktop web, desktop app (Tauri), mobile app (Capacitor)
 */

export type Platform =
  "desktop-app" | "mobile-app" | "desktop-web" | "mobile-web";

/** Client-side platform detection */
export function getPlatform(): Platform {
  if (typeof window === "undefined") return "desktop-web";

  // Tauri (desktop app)
  if ((window as any).__TAURI__) return "desktop-app";

  // Capacitor (mobile app)
  if ((window as any).Capacitor) return "mobile-app";

  // Mobile web detection
  const ua = navigator.userAgent.toLowerCase();
  const isMobile =
    /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua);

  return isMobile ? "mobile-web" : "desktop-web";
}

/** Server-side platform detection from User-Agent */
export function getPlatformFromUA(userAgent: string): Platform {
  const ua = userAgent.toLowerCase();

  // Tauri sends a custom UA or can be detected via headers
  if (ua.includes("tauri")) return "desktop-app";

  // Capacitor mobile app
  if (ua.includes("capacitor")) return "mobile-app";

  const isMobile =
    /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua);

  return isMobile ? "mobile-web" : "desktop-web";
}

/** Check if platform is desktop (app or web) */
export function isDesktop(platform: Platform): boolean {
  return platform === "desktop-app" || platform === "desktop-web";
}

/** Check if platform is mobile (app or web) */
export function isMobile(platform: Platform): boolean {
  return platform === "mobile-app" || platform === "mobile-web";
}

/** Check if running in Tauri (desktop app) */
export function isTauri(): boolean {
  if (typeof window === "undefined") return false;
  return !!(window as any).__TAURI__;
}

/** Check if running in Capacitor (mobile app) */
export function isCapacitor(): boolean {
  if (typeof window === "undefined") return false;
  return !!(window as any).Capacitor;
}

/** Check if running in mobile browser */
export function isMobileWeb(): boolean {
  if (typeof window === "undefined") return false;
  const ua = navigator.userAgent.toLowerCase();
  return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
    navigator.userAgent,
  );
}

/** Get platform info object */
export function getPlatformInfo(): {
  platform: Platform;
  isDesktop: boolean;
  isMobile: boolean;
  isApp: boolean;
  isWeb: boolean;
  userAgent?: string;
} {
  const platform = getPlatform();
  return {
    platform,
    isDesktop: isDesktop(platform),
    isMobile: isMobile(platform),
    isApp: platform === "desktop-app" || platform === "mobile-app",
    isWeb: platform === "desktop-web" || platform === "mobile-web",
    userAgent: typeof window !== "undefined" ? navigator.userAgent : undefined,
  };
}

/** React hook for platform detection */
export function usePlatform() {
  if (typeof window === "undefined") {
    return {
      platform: "desktop-web" as Platform,
      isDesktop: true,
      isMobile: false,
    };
  }
  const platform = getPlatform();
  return {
    platform,
    isDesktop: isDesktop(platform),
    isMobile: isMobile(platform),
    isApp: platform === "desktop-app" || platform === "mobile-app",
    isWeb: platform === "desktop-web" || platform === "mobile-web",
  };
}
