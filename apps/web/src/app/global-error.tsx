"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[GlobalError]", error);
  }, [error]);

  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-[#05050A] text-white antialiased">
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-8">
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 px-6 py-4 text-center">
            <p className="text-sm font-medium text-red-400">Erro inesperado</p>
            <p className="mt-1 text-xs text-white/40">{error.message}</p>
            {error.digest && (
              <p className="mt-1 font-mono text-[10px] text-white/20">
                digest: {error.digest}
              </p>
            )}
          </div>
          <button
            onClick={reset}
            className="rounded-lg bg-white/[0.06] px-4 py-2 text-xs text-white/70 transition hover:bg-white/[0.10]"
          >
            Recarregar
          </button>
        </div>
      </body>
    </html>
  );
}
