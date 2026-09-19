export type { Platform } from "./platform";
export {
  getPlatform,
  getPlatformFromUA,
  isDesktop,
  isMobile,
  isTauri,
  isCapacitor,
  isMobileWeb,
  getPlatformInfo,
  usePlatform,
} from "./platform";

export {
  getRequestPlatform,
  requirePlatform,
  createPlatformGuard,
  desktopOnly,
  mobileOnly,
  appOnly,
  webOnly,
  platformError,
} from "./platform-guard";
