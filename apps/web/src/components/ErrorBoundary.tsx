"use client";

import React from "react";

interface Props {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  name?: string;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error(
      `[ErrorBoundary:${this.props.name ?? "unknown"}]`,
      error,
      info.componentStack,
    );
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;
      return (
        <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-red-500/20 bg-red-500/5 p-6">
          <p className="text-xs font-medium text-red-400">
            Componente com erro
          </p>
          <p className="text-[11px] text-white/40">
            {this.state.error?.message}
          </p>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            className="rounded-lg bg-white/[0.06] px-3 py-1.5 text-[10px] text-white/60 transition hover:bg-white/[0.10]"
          >
            Tentar novamente
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
