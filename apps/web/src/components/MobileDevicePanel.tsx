"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import {
  Smartphone,
  Wifi,
  WifiOff,
  Send,
  Loader2,
  CheckCircle,
  XCircle,
  Clock,
  Trash2,
  RefreshCw,
} from "lucide-react";

interface MobileDevice {
  id: string;
  name: string;
  platform: string;
  version: string;
  connected: boolean;
  lastSeen: string;
  battery?: number;
  ip?: string;
}

interface MobileCommand {
  id: string;
  deviceId: string;
  command: string;
  status: "pending" | "running" | "completed" | "failed";
  output?: string;
  error?: string;
  createdAt: string;
}

function statusColor(status: string) {
  if (status === "completed") return "text-emerald-400";
  if (status === "failed") return "text-red-400";
  if (status === "running") return "text-blue-400";
  if (status === "pending") return "text-yellow-400";
  return "text-text-dim";
}

function statusIcon(status: string) {
  if (status === "completed") return CheckCircle;
  if (status === "failed") return XCircle;
  if (status === "running") return Loader2;
  if (status === "pending") return Clock;
  return Clock;
}

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const secs = Math.floor(diff / 1000);
  if (secs < 60) return `${secs}s`;
  const mins = Math.floor(secs / 60);
  if (mins < 60) return `${mins}m`;
  return `${Math.floor(mins / 60)}h`;
}

export function MobileDevicePanel() {
  const [devices, setDevices] = useState<MobileDevice[]>([]);
  const [commands, setCommands] = useState<MobileCommand[]>([]);
  const [selectedDevice, setSelectedDevice] = useState<string | null>(null);
  const [commandInput, setCommandInput] = useState("");
  const [loading, setLoading] = useState(true);
  const outputRef = useRef<HTMLDivElement>(null);

  const fetchDevices = useCallback(async () => {
    try {
      const res = await fetch("/api/agent/mobile");
      if (res.ok) {
        const data = await res.json();
        setDevices(data.devices ?? []);
      }
    } catch {
      /* ignore */
    }
    setLoading(false);
  }, []);

  const fetchCommands = useCallback(async (deviceId?: string) => {
    try {
      const url = deviceId
        ? `/api/agent/mobile?deviceId=${deviceId}`
        : "/api/agent/mobile";
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        setCommands(data.commands ?? []);
      }
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    fetchDevices();
  }, [fetchDevices]);
  useEffect(() => {
    if (selectedDevice) fetchCommands(selectedDevice);
  }, [selectedDevice, fetchCommands]);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [commands]);

  const sendCommand = useCallback(async () => {
    if (!commandInput.trim() || !selectedDevice) return;
    const cmd = commandInput.trim();
    setCommandInput("");

    const optimistic: MobileCommand = {
      id: `temp-${Date.now()}`,
      deviceId: selectedDevice,
      command: cmd,
      status: "pending",
      createdAt: new Date().toISOString(),
    };
    setCommands((prev) => [...prev, optimistic]);

    try {
      const res = await fetch("/api/agent/mobile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ deviceId: selectedDevice, command: cmd }),
      });
      if (res.ok) {
        const data = await res.json();
        setCommands((prev) =>
          prev.map((c) =>
            c.id === optimistic.id ? { ...c, ...data.command } : c,
          ),
        );
      } else {
        setCommands((prev) =>
          prev.map((c) =>
            c.id === optimistic.id
              ? { ...c, status: "failed", error: "Falha ao enviar" }
              : c,
          ),
        );
      }
    } catch {
      setCommands((prev) =>
        prev.map((c) =>
          c.id === optimistic.id
            ? { ...c, status: "failed", error: "Erro de rede" }
            : c,
        ),
      );
    }
  }, [commandInput, selectedDevice]);

  const disconnectDevice = useCallback(
    async (deviceId: string) => {
      try {
        await fetch(`/api/agent/mobile?deviceId=${deviceId}`, {
          method: "DELETE",
        });
        setDevices((prev) => prev.filter((d) => d.id !== deviceId));
        if (selectedDevice === deviceId) setSelectedDevice(null);
      } catch {
        /* ignore */
      }
    },
    [selectedDevice],
  );

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center">
        <Loader2 className="h-5 w-5 animate-spin text-text-dim" />
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col">
      {/* Header */}
      <div className="border-b border-white/5 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500">
              <Smartphone className="h-4 w-4 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-text-primary">
                Agente Mobile
              </h3>
              <p className="text-[10px] text-text-dim">
                {devices.filter((d) => d.connected).length} dispositivo(s)
                conectado(s)
              </p>
            </div>
          </div>
          <button
            onClick={() => fetchDevices()}
            className="rounded-lg bg-white/5 p-1.5 text-text-dim hover:bg-white/10 hover:text-text-primary transition"
          >
            <RefreshCw className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <div className="flex min-h-0 flex-1">
        {/* Device list */}
        <div className="w-56 shrink-0 border-r border-white/5 overflow-y-auto">
          {devices.length === 0 ? (
            <div className="p-4 text-center">
              <Smartphone className="mx-auto mb-2 h-8 w-8 text-text-dim/40" />
              <p className="text-[11px] text-text-dim">Nenhum dispositivo</p>
              <p className="text-[10px] text-text-dim/60 mt-1">
                Conecte um dispositivo via CapacitorBridge
              </p>
            </div>
          ) : (
            <div className="p-2 space-y-1">
              {devices.map((device) => (
                <button
                  key={device.id}
                  onClick={() => setSelectedDevice(device.id)}
                  className={`flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-left transition ${
                    selectedDevice === device.id
                      ? "bg-white/10 text-text-primary"
                      : "text-text-dim hover:bg-white/5 hover:text-text-muted"
                  }`}
                >
                  {device.connected ? (
                    <Wifi className="h-3 w-3 shrink-0 text-emerald-400" />
                  ) : (
                    <WifiOff className="h-3 w-3 shrink-0 text-text-dim/40" />
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[11px] font-medium">
                      {device.name}
                    </p>
                    <p className="text-[9px] text-text-dim/60">
                      {device.platform} {device.version}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Command area */}
        <div className="flex min-w-0 flex-1 flex-col">
          {selectedDevice ? (
            <>
              <div className="flex-1 overflow-y-auto p-3" ref={outputRef}>
                {commands.filter((c) => c.deviceId === selectedDevice)
                  .length === 0 ? (
                  <div className="flex h-full items-center justify-center">
                    <p className="text-[11px] text-text-dim/40">
                      Nenhum comando enviado
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {commands
                      .filter((c) => c.deviceId === selectedDevice)
                      .map((cmd) => {
                        const Icon = statusIcon(cmd.status);
                        return (
                          <div
                            key={cmd.id}
                            className="rounded-lg bg-white/[0.03] border border-white/5 p-2.5"
                          >
                            <div className="flex items-center gap-2">
                              <Icon
                                className={`h-3 w-3 shrink-0 ${statusColor(cmd.status)} ${cmd.status === "running" ? "animate-spin" : ""}`}
                              />
                              <code className="text-[11px] text-text-primary font-mono">
                                ${cmd.command}
                              </code>
                              <span className="ml-auto text-[9px] text-text-dim/40">
                                {timeAgo(cmd.createdAt)}
                              </span>
                            </div>
                            {cmd.output && (
                              <pre className="mt-2 whitespace-pre-wrap text-[10px] text-text-dim font-mono bg-black/30 rounded p-2 max-h-32 overflow-y-auto">
                                {cmd.output}
                              </pre>
                            )}
                            {cmd.error && (
                              <p className="mt-1 text-[10px] text-red-400">
                                {cmd.error}
                              </p>
                            )}
                          </div>
                        );
                      })}
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="border-t border-white/5 p-3">
                <div className="flex items-center gap-2">
                  <div className="flex min-w-0 flex-1 items-center rounded-lg bg-white/5 border border-white/10 px-3 py-2">
                    <span className="mr-1.5 text-[11px] text-emerald-400 font-mono">
                      $
                    </span>
                    <input
                      value={commandInput}
                      onChange={(e) => setCommandInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") sendCommand();
                      }}
                      placeholder="Comando para o dispositivo..."
                      className="min-w-0 flex-1 bg-transparent text-[12px] text-text-primary placeholder:text-text-dim/40 outline-none font-mono"
                    />
                  </div>
                  <button
                    onClick={sendCommand}
                    disabled={!commandInput.trim()}
                    className="rounded-lg bg-violet-500/20 p-2 text-violet-400 hover:bg-violet-500/30 transition disabled:opacity-30"
                  >
                    <Send className="h-3.5 w-3.5" />
                  </button>
                  <button
                    onClick={() => disconnectDevice(selectedDevice)}
                    className="rounded-lg bg-red-500/10 p-2 text-red-400 hover:bg-red-500/20 transition"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex h-full items-center justify-center">
              <div className="text-center">
                <Smartphone className="mx-auto mb-3 h-10 w-10 text-text-dim/20" />
                <p className="text-[12px] text-text-dim">
                  Selecione um dispositivo
                </p>
                <p className="text-[10px] text-text-dim/50 mt-1">
                  Ou conecte um novo via CapacitorBridge
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
