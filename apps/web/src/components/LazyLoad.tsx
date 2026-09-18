"use client";

import { lazy, Suspense, ComponentType, ReactNode } from "react";
import { LoadingSpinner } from "./Loading";

interface LazyLoadOptions {
  fallback?: ReactNode;
  ssr?: boolean;
}

/**
 * Lazy load a component with Suspense boundary
 */
export function lazyLoad<T extends ComponentType<Record<string, unknown>>>(
  factory: () => Promise<{ default: T }>,
  options: LazyLoadOptions = {},
) {
  const LazyComponent = lazy(factory);

  const WrappedComponent = (props: React.ComponentProps<T>) => (
    <Suspense fallback={options.fallback ?? <LoadingSpinner />}>
      <LazyComponent {...props} />
    </Suspense>
  );

  return WrappedComponent;
}

/**
 * Preload a lazy component
 */
export function preload(factory: () => Promise<{ default: ComponentType }>) {
  // Start loading but don't render
  factory();
}
