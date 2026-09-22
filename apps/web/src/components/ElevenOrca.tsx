"use client";

import { useEffect, useRef } from "react";

export default function ElevenOrca() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let disposed: (() => void) | null = null;
    let active = true;

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/orca-inline/assets/orca.css";
    document.head.appendChild(link);

    // Shim de globals do Node.js (chunks do Orca esperam `process`/`Buffer`
    // mesmo em build web). Neutraliza antes de carregar o bundle.
    const g = globalThis as any;
    if (!g.process) {
      g.process = {
        env: { NODE_ENV: "production" },
        platform: "web",
        arch: "js",
        version: "v24.0.0",
        nextTick: (fn: () => void) => Promise.resolve().then(fn),
        cwd: () => "/",
        browser: true,
      };
    }
    if (!g.Buffer) {
      g.Buffer = {
        from: (v: any) =>
          typeof v === "string" ? new TextEncoder().encode(v) : v,
        isBuffer: () => false,
        alloc: (n: number) => new Uint8Array(n),
        byteLength: (v: any) =>
          typeof v === "string" ? v.length : (v?.length ?? 0),
        isView: (v: any) => ArrayBuffer.isView(v),
        concat: (arrs: any[]) => {
          const total = (arrs || []).reduce(
            (s: number, a: any) => s + (a?.length ?? 0),
            0,
          );
          const out = new Uint8Array(total);
          let off = 0;
          for (const a of arrs || []) {
            out.set(a instanceof Uint8Array ? a : new Uint8Array(a), off);
            off += a?.length ?? 0;
          }
          return out;
        },
      } as any;
    }

    const url = `${window.location.origin}/orca-inline/orca.js`;
    import(/* webpackIgnore: true */ url)
      .then((mod) => {
        if (!active || !rootRef.current) return;
        disposed = (
          mod as { mountOrca: (el: HTMLElement) => () => void }
        ).mountOrca(rootRef.current);
      })
      .catch((err) => {
        if (active && rootRef.current) {
          rootRef.current.innerHTML = `<div style="padding:16px;font-family:monospace;color:#e6e6e6;font-size:13px;">Erro ao carregar Eleven Code: ${String(err?.message ?? err)}</div>`;
        }
      });

    return () => {
      active = false;
      disposed?.();
      link.remove();
    };
  }, []);

  return <div ref={rootRef} className="h-full w-full overflow-hidden" />;
}
