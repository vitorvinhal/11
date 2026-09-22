import React, { useEffect } from "react";

/**
 * 11 Desktop — shell que carrega a app web na webview nativa.
 * Navega direto para a Vercel (sem iframe → sem bloqueio CSP/mistura de conteúdo).
 */
export default function App() {
  const webUrl =
    import.meta.env.VITE_WEB_URL ?? "https://11-app-sage.vercel.app";

  useEffect(() => {
    window.location.href = webUrl;
  }, [webUrl]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 14,
        background: "#030309",
        color: "#9db4ff",
        fontFamily: "Segoe UI, system-ui, sans-serif",
      }}
    >
      <div
        style={{
          width: 34,
          height: 34,
          borderRadius: 10,
          border: "2px solid #7dd3fc",
          borderTopColor: "transparent",
          animation: "spin 0.8s linear infinite",
        }}
      />
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
      <span
        style={{ fontSize: 13, letterSpacing: 2, textTransform: "uppercase" }}
      >
        Carregando Eleven…
      </span>
    </div>
  );
}
