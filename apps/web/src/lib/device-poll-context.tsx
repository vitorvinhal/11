"use client";

/**
 * DeviceJobsProvider — ÚNICO polling HTTP de 5s para /api/devices/jobs.
 *
 * Antes: MobileDevicePanel e MobileAgent mantinham cada um um setInterval(5000)
 * idêntico (+ refresh extra em useDeviceAgent) → 2-3 chamadas paralelas ao mesmo
 * endpoint. Agora: um único timer por provider (ref-count: roda só com ≥1
 * assinante), snapshot compartilhado via Context. Intervalo permanece 5000ms.
 */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useAuth } from "./auth";
import { getDeviceContext } from "./device-client";
import type { DeviceJobView } from "./useDeviceAgent";

export const DEVICE_JOBS_POLL_MS = 5000;

interface DeviceJobsShared {
  jobs: DeviceJobView[];
  /** Refaz o fetch imediatamente e reinicia a cadência de 5s. */
  refreshNow: () => Promise<void>;
  /** registra um assinante (inicia o timer único no 1º; para no último). */
  subscribe: () => () => void;
}

const DeviceJobsContext = createContext<DeviceJobsShared | null>(null);

export function DeviceJobsProvider({ children }: { children: ReactNode }) {
  const { getAccessToken } = useAuth();
  const [jobs, setJobs] = useState<DeviceJobView[]>([]);
  const subsRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const fetchRef = useRef<() => Promise<void>>(async () => {});

  fetchRef.current = async () => {
    const token = await getAccessToken();
    if (!token) return;
    try {
      const { deviceId } = getDeviceContext();
      const res = await fetch(`/api/devices/jobs?deviceId=${deviceId ?? ""}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const data = (await res.json()) as { jobs: DeviceJobView[] };
        setJobs(data.jobs ?? []);
      }
    } catch {
      /* offline/erro: mantém o último snapshot */
    }
  };

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startTimer = useCallback(() => {
    stopTimer();
    timerRef.current = setInterval(() => {
      void fetchRef.current();
    }, DEVICE_JOBS_POLL_MS);
  }, [stopTimer]);

  const subscribe = useCallback((): (() => void) => {
    subsRef.current += 1;
    if (subsRef.current === 1) {
      void fetchRef.current();
      startTimer();
    }
    return () => {
      subsRef.current = Math.max(0, subsRef.current - 1);
      if (subsRef.current === 0) stopTimer();
    };
  }, [startTimer, stopTimer]);

  const refreshNow = useCallback(async () => {
    await fetchRef.current();
    if (subsRef.current > 0) startTimer();
  }, [startTimer]);

  useEffect(() => stopTimer, [stopTimer]);

  const value = useMemo<DeviceJobsShared>(
    () => ({ jobs, refreshNow, subscribe }),
    [jobs, refreshNow, subscribe],
  );

  return (
    <DeviceJobsContext.Provider value={value}>
      {children}
    </DeviceJobsContext.Provider>
  );
}

/** Assina o feed único de jobs (timer 5s inicia no 1º assinante). */
export function useDeviceJobsShared(): DeviceJobsShared {
  const ctx = useContext(DeviceJobsContext);
  if (!ctx) {
    throw new Error(
      "useDeviceJobsShared requer <DeviceJobsProvider> (montado no AppShell)",
    );
  }
  const { subscribe } = ctx;
  useEffect(() => subscribe(), [subscribe]);
  return ctx;
}

/** Versão opcional (null fora do provider) — p/ uso defensivo. */
export function useOptionalDeviceJobs(): DeviceJobsShared | null {
  const ctx = useContext(DeviceJobsContext);
  const subscribe = ctx?.subscribe;
  useEffect(() => {
    if (!subscribe) return;
    return subscribe();
  }, [subscribe]);
  return ctx;
}
