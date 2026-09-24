"use client";

import { lazy, Suspense, ComponentType, ReactNode } from "react";
import { LoadingSpinner } from "./Loading";

interface LazyLoadOptions {
  fallback?: ReactNode;
  ssr?: boolean;
}

export function lazyLoad(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  factory: () => Promise<{ default: ComponentType<any> }>,
  options: LazyLoadOptions = {},
) {
  const LazyComponent = lazy(factory);

  const WrappedComponent = (props: Record<string, unknown>) => (
    <Suspense fallback={options.fallback ?? <LoadingSpinner />}>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <LazyComponent {...(props as any)} />
    </Suspense>
  );

  return WrappedComponent;
}

export function preload(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  factory: () => Promise<{ default: ComponentType<any> }>,
) {
  factory();
}
