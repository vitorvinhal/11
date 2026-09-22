"use client";

/**
 * useDeviceAgent — loop de execução do Agente de Dispositivo (PC / Mobile).
 *
 * - Polling de jobs no `/api/devices/jobs/poll`
 * - Executa via transporte do device:
 *     desktop-app → Node local (http://localhost:3001/device/tool)
 *     mobile-app  → window.DeviceBridge.execute (bridge Capacitor)
 * - Submete resultado e adminstra aprovações pendentes.
 */

import { useCallback, useEffect, useRef, useState } from "react";
import { useAuth } from "./auth";
import { getDeviceContext, registerAppDevice } from "./device-client";
import { emitAgentEvent } from "./agent-bus";

export type DeviceAgentStatus = "idle" | "polling" | "running" | "error";

export interface DeviceJobView {
  id: string;
  deviceId: string;
  name: string;
  args: Record<string, unknown>;
  status: string;
  requiresApproval: boolean;
  risk: string | null;
  result: unknown;
  error: string | null;
  createdAt: string;
  expiresAt: string | null;
}

const POLL_INTERVAL_MS = 2_500;
const NODE_SERVER_URL = "http://localhost:3001";

function localToolUrl(): string {
  return `${process.env.NEXT_PUBLIC_PC_AGENT_URL ?? NODE_SERVER_URL}/device/tool`;
}

export function useDeviceAgent() {
  const { getAccessToken } = useAuth();
  const [runPolling, setRunPolling] = useState(false);
  const [status, setStatus] = useState<DeviceAgentStatus>("idle");
  const [currentJob, setCurrentJob] = useState<DeviceJobView | null>(null);
  const [lastResult, setLastResult] = useState<unknown>(null);
  const [lastError, setLastError] = useState<string | null>(null);
  const [pendingApprovals, setPendingApprovals] = useState<DeviceJobView[]>([]);
  const [localPaired, setLocalPaired] = useState(false);
  const [refreshTick, setRefreshTick] = useState(0);

  const busyRef = useRef(false);
  const pairedRef = useRef(false);

  const refreshPending = useCallback(async () => {
    const token = await getAccessToken();
    if (!token) return;
    try {
      const { deviceId } = getDeviceContext();
      const res = await fetch(`/api/devices/jobs?deviceId=${deviceId ?? ""}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = (await res.json()) as { jobs: DeviceJobView[] };
      setPendingApprovals(
        data.jobs.filter((j) => j.status === "awaiting_approval"),
      );
    } catch {
      /* ignore */
    }
  }, [getAccessToken]);

  const pairLocalServer = useCallback(
    async (secret: string | null): Promise<boolean> => {
      if (!secret) return false;
      if (pairedRef.current) return true;
      try {
        const res = await fetch(`${NODE_SERVER_URL}/device/pair`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ secret }),
        });
        if (res.ok) {
          pairedRef.current = true;
          setLocalPaired(true);
          return true;
        }
        return false;
      } catch {
        return false;
      }
    },
    [],
  );

  const executeOnDevice = useCallback(
    async (name: string, args: Record<string, unknown>) => {
      const ctx = getDeviceContext();
      if (ctx.platform === "desktop-app") {
        const ok = await pairLocalServer(ctx.secret);
        if (!ok)
          throw new Error(
            "Servidor local do PC não pareado/indisponível (rode o app desktop)",
          );
        const res = await fetch(localToolUrl(), {
          method: "POST",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${ctx.secret}`,
          },
          body: JSON.stringify({ name, args }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error ?? "Falha no servidor local");
        return data.result;
      }
      if (ctx.platform === "mobile-app") {
        if (typeof window === "undefined" || !window.DeviceBridge) {
          throw new Error("Bridge do dispositivo não disponível (app mobile)");
        }
        const r = await window.DeviceBridge.execute(name, args);
        if (!r.ok) throw new Error(r.error ?? "Falha no bridge mobile");
        const result = { ...r };
        delete result.ok;
        return result;
      }
      throw new Error("Agente de dispositivo só roda em apps nativos");
    },
    [pairLocalServer],
  );

  // Poll de jobs
  useEffect(() => {
    if (!runPolling) return;
    let cancelled = false;

    const pollOnce = async () => {
      if (busyRef.current) return;
      busyRef.current = true;
      try {
        const token = await getAccessToken();
        if (!token) return;
        const ctx = getDeviceContext();
        if (!ctx.deviceId) return;

        const res = await fetch(
          `/api/devices/jobs/poll?deviceId=${ctx.deviceId}`,
          { headers: { Authorization: `Bearer ${token}` } },
        );
        const data = (await res.json()) as { job?: DeviceJobView | null };
        const job = data.job;

        if (!job) {
          setStatus("polling");
          await refreshPending();
          return;
        }

        setCurrentJob(job);
        setStatus("running");
        setLastError(null);
        setLastResult(null);

        let resultStatus: "completed" | "failed" | "cancelled" = "completed";
        let payload: unknown = null;
        let payloadError: string | undefined;

        try {
          const result = await executeOnDevice(job.name, job.args ?? {});
          payload = result;
        } catch (e) {
          resultStatus = "failed";
          payloadError = (e as Error).message;
        }

        await fetch(`/api/devices/jobs/${job.id}/result`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            status: resultStatus,
            result: payload,
            error: payloadError,
          }),
        });

        setLastResult(payload);
        setLastError(payloadError ?? null);
        setCurrentJob(null);
        setStatus("polling");
        setRefreshTick((t) => t + 1);
      } catch (e) {
        setStatus("error");
        setLastError((e as Error).message);
      } finally {
        if (!cancelled) busyRef.current = false;
      }
    };

    const timer = setInterval(pollOnce, POLL_INTERVAL_MS);
    void pollOnce();
    return () => {
      cancelled = true;
      clearInterval(timer);
    };
  }, [runPolling, getAccessToken, executeOnDevice, refreshPending]);

  // Refresca aprovações sempre que algo muda.
  useEffect(() => {
    if (refreshTick > 0) void refreshPending();
  }, [refreshTick, refreshPending]);

  const awaitJobUntilTerminal = useCallback(
    async (
      jobId: string,
      token: string,
      timeoutMs = 30_000,
    ): Promise<DeviceJobView | null> => {
      const deadline = Date.now() + timeoutMs;
      const { deviceId } = getDeviceContext();
      while (Date.now() < deadline) {
        try {
          const res = await fetch(
            `/api/devices/jobs?deviceId=${deviceId ?? ""}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            },
          );
          const data = (await res.json()) as { jobs: DeviceJobView[] };
          const job = data.jobs.find((j) => j.id === jobId);
          if (
            job &&
            [
              "completed",
              "failed",
              "rejected",
              "cancelled",
              "timeout",
            ].includes(job.status)
          ) {
            return job;
          }
        } catch {
          /* tenta de novo */
        }
        await new Promise((r) => setTimeout(r, 800));
      }
      return null;
    },
    [],
  );

  const approveJob = useCallback(
    async (id: string, approved: boolean) => {
      const token = await getAccessToken();
      if (!token) return;
      await fetch(`/api/devices/jobs/${id}/approve`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ approved }),
      });

      if (approved) {
        // Aguarda a execução no dispositivo e dispara a continuação no chat.
        void (async () => {
          const finished = await awaitJobUntilTerminal(id, token);
          if (finished && finished.status === "completed") {
            const ctx = getDeviceContext();
            emitAgentEvent("agent:job-resume", {
              job: {
                id: finished.id,
                name: finished.name,
                args: finished.args ?? {},
                result: finished.result,
                status: finished.status,
              },
              deviceId: ctx.deviceId,
            });
          }
        })();
      }
      await refreshPending();
    },
    [getAccessToken, refreshPending, awaitJobUntilTerminal],
  );

  const start = useCallback(() => {
    void registerAppDevice();
    setLastError(null);
    setRunPolling(true);
  }, []);

  const stop = useCallback(() => {
    setRunPolling(false);
    setStatus("idle");
  }, []);

  // Registro automático se ainda não houver deviceId (apps nativos).
  useEffect(() => {
    const ctx = getDeviceContext();
    if (
      (ctx.platform === "desktop-app" || ctx.platform === "mobile-app") &&
      !ctx.deviceId
    ) {
      void registerAppDevice();
    }
  }, []);

  return {
    status,
    currentJob,
    lastResult,
    lastError,
    pendingApprovals,
    localPaired,
    start,
    stop,
    approveJob,
    refreshPending,
  };
}
