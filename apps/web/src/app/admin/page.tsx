"use client";

import { useEffect, useState } from "react";
import { useAuth } from "../../lib/auth";

interface VersionData {
  version?: string;
  buildDate?: string;
  phase?: string;
  features?: string[];
}

interface MetricSummary {
  totalExecutions?: number;
  totalToolCalls?: number;
  totalTokens?: { input: number; output: number; total: number };
  avgLatencyMs?: number;
  errorRate?: number;
  riskDistribution?: { safe: number; reversible: number; destructive: number };
}

interface Plugin {
  id: string;
  name: string;
  enabled: boolean;
}

interface Skill {
  id: string;
  name: string;
  enabled: boolean;
}

export default function AdminPage() {
  const { getAccessToken } = useAuth();
  const [version, setVersion] = useState<VersionData | null>(null);
  const [metrics, setMetrics] = useState<MetricSummary | null>(null);
  const [health, setHealth] = useState<Array<{ service: string; ok: boolean }>>(
    [],
  );
  const [plugins, setPlugins] = useState<Plugin[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAll = async () => {
    try {
      setLoading(true);
      const token = await getAccessToken();
      const headers = token ? { Authorization: `Bearer ${token}` } : {};
      const [versionRes, metricsRes, healthRes, pluginsRes, skillsRes] =
        await Promise.allSettled([
          fetch("/api/version", { headers }).then((r) => r.json()),
          fetch("/api/metrics", { headers }).then((r) => r.json()),
          fetch("/api/health", { headers }).then((r) => r.json()),
          fetch("/api/plugins", { headers }).then((r) => r.json()),
          fetch("/api/skills", { headers }).then((r) => r.json()),
        ]);

      if (versionRes.status === "fulfilled")
        setVersion(versionRes.value as VersionData);
      if (metricsRes.status === "fulfilled")
        setMetrics((metricsRes.value as any)?.data ?? null);
      if (healthRes.status === "fulfilled") {
        const services: Record<string, { ok?: boolean }> =
          (healthRes.value as any)?.services ?? {};
        setHealth(
          Object.entries(services).map(([service, info]) => ({
            service,
            ok: Boolean(info?.ok),
          })),
        );
      }
      if (pluginsRes.status === "fulfilled")
        setPlugins((pluginsRes.value as any)?.plugins || []);
      if (skillsRes.status === "fulfilled")
        setSkills((skillsRes.value as any)?.skills || []);

      setError(null);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAll();
    const interval = setInterval(fetchAll, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading && !version) {
    return (
      <div style={{ padding: "2rem", fontFamily: "monospace" }}>
        <h1>Admin Dashboard</h1>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div
      style={{ padding: "2rem", fontFamily: "monospace", maxWidth: "800px" }}
    >
      <h1>Admin Dashboard</h1>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {/* Version */}
      <section
        style={{
          marginBottom: "2rem",
          padding: "1rem",
          border: "1px solid #333",
          borderRadius: "8px",
        }}
      >
        <h2>Version</h2>
        <p>
          <strong>Version:</strong> {version?.version}
        </p>
        <p>
          <strong>Phase:</strong> {version?.phase}
        </p>
        <p>
          <strong>Build:</strong> {version?.buildDate}
        </p>
        <p>
          <strong>Features:</strong> {version?.features?.join(", ")}
        </p>
      </section>

      {/* Health */}
      <section
        style={{
          marginBottom: "2rem",
          padding: "1rem",
          border: "1px solid #333",
          borderRadius: "8px",
        }}
      >
        <h2>System Health</h2>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "2px solid #333" }}>
              <th style={{ textAlign: "left", padding: "0.5rem" }}>Service</th>
              <th style={{ textAlign: "center", padding: "0.5rem" }}>Status</th>
              <th style={{ textAlign: "right", padding: "0.5rem" }}>Latency</th>
            </tr>
          </thead>
          <tbody>
            {health.map((check) => (
              <tr
                key={check.service}
                style={{ borderBottom: "1px solid #666" }}
              >
                <td style={{ padding: "0.5rem" }}>{check.service}</td>
                <td style={{ textAlign: "center", padding: "0.5rem" }}>
                  <span style={{ color: check.ok ? "green" : "red" }}>
                    {check.ok ? "✓" : "✗"}
                  </span>
                </td>
                <td style={{ textAlign: "right", padding: "0.5rem" }}>—</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Metrics */}
      <section
        style={{
          marginBottom: "2rem",
          padding: "1rem",
          border: "1px solid #333",
          borderRadius: "8px",
        }}
      >
        <h2>Agent Metrics</h2>
        {metrics ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
            }}
          >
            <div>
              <strong>Total Executions:</strong> {metrics.totalExecutions}
            </div>
            <div>
              <strong>Tool Calls:</strong> {metrics.totalToolCalls}
            </div>
            <div>
              <strong>Avg Latency:</strong> {metrics.avgLatencyMs}ms
            </div>
            <div>
              <strong>Error Rate:</strong>{" "}
              {metrics.errorRate != null
                ? (metrics.errorRate * 100).toFixed(1)
                : "0"}
              %
            </div>
            <div>
              <strong>Tokens (in/out):</strong>{" "}
              {metrics.totalTokens?.input ?? 0} /{" "}
              {metrics.totalTokens?.output ?? 0}
            </div>
            <div>
              <strong>Safe:</strong> {metrics.riskDistribution?.safe ?? 0}
            </div>
            <div>
              <strong>Reversible:</strong>{" "}
              {metrics.riskDistribution?.reversible ?? 0}
            </div>
            <div>
              <strong>Destructive:</strong>{" "}
              {metrics.riskDistribution?.destructive ?? 0}
            </div>
          </div>
        ) : (
          <p>No metrics available</p>
        )}
      </section>

      {/* Plugins */}
      <section
        style={{
          marginBottom: "2rem",
          padding: "1rem",
          border: "1px solid #333",
          borderRadius: "8px",
        }}
      >
        <h2>Plugins ({plugins.length})</h2>
        {plugins.length === 0 ? (
          <p>No plugins installed</p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {plugins.map((p) => (
              <li
                key={p.id}
                style={{ padding: "0.5rem", borderBottom: "1px solid #666" }}
              >
                {p.name} —{" "}
                {p.enabled ? (
                  <span style={{ color: "green" }}>enabled</span>
                ) : (
                  <span style={{ color: "gray" }}>disabled</span>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Skills */}
      <section
        style={{
          marginBottom: "2rem",
          padding: "1rem",
          border: "1px solid #333",
          borderRadius: "8px",
        }}
      >
        <h2>Skills ({skills.length})</h2>
        {skills.length === 0 ? (
          <p>No skills installed</p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {skills.map((s) => (
              <li
                key={s.id}
                style={{ padding: "0.5rem", borderBottom: "1px solid #666" }}
              >
                {s.name} —{" "}
                {s.enabled ? (
                  <span style={{ color: "green" }}>enabled</span>
                ) : (
                  <span style={{ color: "gray" }}>disabled</span>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>

      <button onClick={fetchAll} style={{ padding: "0.5rem 1rem" }}>
        Refresh All
      </button>
    </div>
  );
}
