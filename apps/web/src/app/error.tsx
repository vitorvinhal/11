"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[ErrorBoundary] page error:", error);
  }, [error]);

  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center gap-4 p-8">
      <div className="rounded-xl border border-red-500/20 bg-red-500/5 px-6 py-4 text-center">
        <p className="text-sm font-medium text-red-400">Algo deu errado</p>
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
        Tentar novamente
      </button>
    </div>
  );
}
