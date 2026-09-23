import React, { useEffect, useState } from "react";

/**
 * 11 Desktop — shell offline-first.
 * NÃO navega para URL remota. A janela do Tauri renderiza esta UI local
 * empacotada no bundle; chamadas de dados vão para o backend via fetch
 * (falham de forma tratada sem rede). O Service Worker (sw.js) fica como
 * camada EXTRA de cache, não como única forma de funcionar offline.
 */
const API_BASE = "https://candlefish.vercel.app";

async function probe(
  scope: string,
): Promise<{ online: boolean; detail: string }> {
  try {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 6000);
    const r = await fetch(`${API_BASE}/${scope}`, {
      signal: ctrl.signal,
      headers: { Accept: "application/json" },
    });
    clearTimeout(t);
    return { online: true, detail: `HTTP ${r.status}` };
  } catch {
    return { online: false, detail: "sem rede ou backend indisponível" };
  }
}

const TOOLS = [
  "device.fs_list",
  "device.fs_read",
  "device.fs_write",
  "device.fs_delete",
  "device.fs_copy",
  "device.fs_move",
  "device.exec",
  "device.media_list",
  "device.media_import",
  "device.media_open",
  "device.apps_list",
  "device.apps_launch",
  "device.settings_get",
  "device.settings_set",
  "device.screen_shot",
  "device.system_info",
  "device.system_battery",
  "device.system_processes",
  "device.system_network",
  "device.system_clipboard",
  "device.system_notify",
];

export default function App() {
  const [backend, setBackend] = useState<{ online: boolean; detail: string }>({
    online: false,
    detail: "checando…",
  });
  const [swStatus, setSwStatus] = useState<string>("checando…");
  const [offline, setOffline] = useState<boolean>(!navigator.onLine);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then(() => setSwStatus("registrado"))
        .catch((e) => setSwStatus(`falha: ${String(e)}`));
    } else {
      setSwStatus("não suportado");
    }
  }, []);

  useEffect(() => {
    const sync = () => setOffline(!navigator.onLine);
    window.addEventListener("online", sync);
    window.addEventListener("offline", sync);
    return () => {
      window.removeEventListener("online", sync);
      window.removeEventListener("offline", sync);
    };
  }, []);

  useEffect(() => {
    probe("api/health/all").then(setBackend);
    const iv = setInterval(() => {
      probe("api/health/all").then(setBackend);
    }, 20000);
    return () => clearInterval(iv);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        background: "#030309",
        color: "#e2e8f0",
        fontFamily: "Segoe UI, system-ui, sans-serif",
        padding: 24,
        overflowY: "auto",
      }}
    >
      <header
        style={{
          borderBottom: "1px solid #1e293b",
          paddingBottom: 14,
          marginBottom: 18,
        }}
      >
        <h1
          style={{
            fontSize: 18,
            letterSpacing: 2,
            color: "#7dd3fc",
            textTransform: "uppercase",
          }}
        >
          11 — Desktop
        </h1>
        <p style={{ fontSize: 12, color: "#94a3b8", marginTop: 4 }}>
          Shell offline-first empacotado · Service Worker:{" "}
          <strong>{swStatus}</strong>
        </p>
      </header>

      <section
        style={{
          borderBottom: "1px solid #1e293b",
          paddingBottom: 16,
          marginBottom: 18,
        }}
      >
        <h2 style={{ fontSize: 14, color: "#7dd3fc", marginBottom: 8 }}>
          Status
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "6px 0",
            fontSize: 13,
            color: "#94a3b8",
          }}
        >
          <span>Backend remoto</span>
          <span
            style={{
              padding: "3px 10px",
              borderRadius: 999,
              fontSize: 11,
              fontWeight: 600,
              background: backend.online
                ? "#052e16"
                : offline
                  ? "#451a03"
                  : "#450a0a",
              color: backend.online
                ? "#4ade80"
                : offline
                  ? "#fbbf24"
                  : "#f87171",
            }}
          >
            {backend.online
              ? "online"
              : offline
                ? "offline (shell ok)"
                : "indisponível"}
          </span>
        </div>
        <p
          style={{
            fontSize: 12,
            color: offline ? "#fbbf24" : "#94a3b8",
            marginTop: 6,
          }}
        >
          {offline
            ? "Sem conexão — a interface local continua funcionando. Dados dinâmicos serão reiniciados quando a rede voltar."
            : `Probe: ${backend.detail}. UI renderizada localmente; APIs vão ao backend.`}
        </p>
        {!backend.online && !offline && (
          <button
            onClick={() => probe("api/health/all").then(setBackend)}
            style={{
              marginTop: 10,
              padding: "10px 18px",
              border: "none",
              borderRadius: 10,
              background: "linear-gradient(135deg,#0ea5e9,#6366f1)",
              color: "#fff",
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Tentar reconectar
          </button>
        )}
      </section>

      <section>
        <h2 style={{ fontSize: 14, color: "#7dd3fc", marginBottom: 8 }}>
          Tools do device (shell espera as 21)
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))",
            gap: 8,
          }}
        >
          {TOOLS.map((t) => (
            <code
              key={t}
              style={{
                fontSize: 12,
                color: "#7dd3fc",
                background: "#0f172a",
                border: "1px solid #1e293b",
                borderRadius: 8,
                padding: "8px 10px",
              }}
            >
              {t}
            </code>
          ))}
        </div>
      </section>

      <p
        style={{
          fontSize: 11,
          color: "#475569",
          marginTop: "auto",
          paddingTop: 18,
          textAlign: "center",
        }}
      >
        v2.16.3-alpha · offline-first · SW como camada extra de cache
      </p>
    </div>
  );
}
