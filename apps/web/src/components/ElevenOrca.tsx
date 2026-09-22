"use client";

import { useEffect, useRef } from "react";

export default function ElevenOrca() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let disposed: (() => void) | null = null;
    let active = true;

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/orca-inline/orca.css";
    document.head.appendChild(link);

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
