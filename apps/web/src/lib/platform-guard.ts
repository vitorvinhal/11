import { NextRequest } from "next/server";
import { Platform, getPlatformFromUA } from "./platform";

/** Extract platform from request headers */
export function getRequestPlatform(req: NextRequest): Platform {
  const ua = req.headers.get("user-agent") ?? "";
  const platformHeader = req.headers.get("x-platform");

  if (platformHeader) {
    return platformHeader as Platform;
  }

  return getPlatformFromUA(ua);
}

/** Platform guard for API routes */
export function requirePlatform(
  req: NextRequest,
  allowedPlatforms: Platform[],
): { platform: Platform; allowed: boolean } {
  const platform = getRequestPlatform(req);
  return {
    platform,
    allowed: allowedPlatforms.includes(getRequestPlatform(req)),
  };
}

/** Middleware factory for platform-specific routes */
export function createPlatformGuard(...allowedPlatforms: Platform[]) {
  return (
    req: NextRequest,
  ): { platform: Platform; allowed: boolean; error?: Response } => {
    const platform = getRequestPlatform(req);
    const allowed = allowedPlatforms.includes(platform);

    if (!allowed) {
      return {
        platform,
        allowed: false,
        error: new Response(
          JSON.stringify({
            error: `Esta funcionalidade não está disponível na plataforma ${platform}`,
            platform,
            allowedPlatforms,
          }),
          {
            status: 403,
            headers: { "content-type": "application/json" },
          },
        ),
      };
    }

    return { platform, allowed: true };
  };
}

/** Pre-built guards */
export const desktopOnly = createPlatformGuard("desktop-app", "desktop-web");
export const mobileOnly = createPlatformGuard("mobile-app", "mobile-web");
export const appOnly = createPlatformGuard("desktop-app", "mobile-app");
export const webOnly = createPlatformGuard("desktop-web", "mobile-web");

/** Response helper for platform errors */
export function platformError(
  platform: Platform,
  allowed: Platform[],
): Response {
  return new Response(
    JSON.stringify({
      error: `Funcionalidade disponível apenas em: ${allowed.join(", ")}`,
      currentPlatform: platform,
      allowedPlatforms: allowed,
    }),
    { status: 403, headers: { "content-type": "application/json" } },
  );
}
