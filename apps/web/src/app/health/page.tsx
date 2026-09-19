"use client";

import { useEffect, useState } from "react";

interface HealthStatus {
  ok: boolean;
  timestamp: string;
  version: string;
  services?: Record<
    string,
    { ok: boolean; latencyMs?: number; error?: string }
  >;
}

export default function HealthPage() {
  const [status, setStatus] = useState<HealthStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchHealth = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/health");
      const data = await res.json();
      setStatus(data);
      setError(null);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHealth();
    const interval = setInterval(fetchHealth, 30000); // refresh every 30s
    return () => clearInterval(interval);
  }, []);

  if (loading && !status) {
    return (
      <div style={{ padding: "2rem", fontFamily: "monospace" }}>
        <h1>System Health</h1>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: "2rem", fontFamily: "monospace" }}>
        <h1>System Health</h1>
        <p style={{ color: "red" }}>Error: {error}</p>
        <button onClick={fetchHealth}>Retry</button>
      </div>
    );
  }

  return (
    <div
      style={{ padding: "2rem", fontFamily: "monospace", maxWidth: "600px" }}
    >
      <h1>System Health</h1>
      <p>
        Status:{" "}
        <span
          style={{ color: status?.ok ? "green" : "red", fontWeight: "bold" }}
        >
          {status?.ok ? "ALL OK" : "DEGRADED"}
        </span>
      </p>
      <p>Version: {status?.version}</p>
      <p>
        Last check:{" "}
        {status?.timestamp
          ? new Date(status.timestamp).toLocaleTimeString()
          : "-"}
      </p>

      <h2>Services</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ borderBottom: "2px solid #333" }}>
            <th style={{ textAlign: "left", padding: "0.5rem" }}>Service</th>
            <th style={{ textAlign: "center", padding: "0.5rem" }}>Status</th>
            <th style={{ textAlign: "right", padding: "0.5rem" }}>Latency</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(status?.services ?? {}).map(([service, check]) => (
            <tr key={service} style={{ borderBottom: "1px solid #666" }}>
              <td style={{ padding: "0.5rem" }}>{service}</td>
              <td style={{ textAlign: "center", padding: "0.5rem" }}>
                <span style={{ color: check?.ok ? "green" : "red" }}>
                  {check?.ok ? "✓" : "✗"}
                </span>
              </td>
              <td style={{ textAlign: "right", padding: "0.5rem" }}>
                {check?.latencyMs != null ? `${check.latencyMs}ms` : "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={fetchHealth}
        style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}
      >
        Refresh
      </button>
    </div>
  );
}
