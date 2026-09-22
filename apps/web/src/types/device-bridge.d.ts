/**
 * Tipos do bridge nativo injetado pelo app mobile (Capacitor WebView).
 * Os apps desktop/mobile expõem window.DeviceBridge; o web só declara.
 */
export interface DeviceBridgeSurface {
  execute(
    name: string,
    args: Record<string, unknown>,
  ): Promise<{ ok: boolean; error?: string; [k: string]: unknown }>;
  listTools(): string[];
  ping(): Record<string, unknown>;
}

declare global {
  interface Window {
    DeviceBridge?: DeviceBridgeSurface;
  }
}

export {};
