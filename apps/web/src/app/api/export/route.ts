import { NextResponse } from "next/server";
import { loadRootEnv } from "../../../lib/server-env";
import { requireUser } from "../../../lib/auth-helpers";
import { createClient } from "@supabase/supabase-js";

loadRootEnv();

/**
 * GET /api/export — Exportar dados do usuário
 * Query params:
 *   - format: 'json' | 'markdown' (default: json)
 *   - type: 'memories' | 'sessions' | 'all' (default: all)
 */
export async function GET(req: Request) {
  try {
    const auth = await requireUser(req);
    if (!auth) {
      return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
    }
    const { userId } = auth;

    const url = new URL(req.url);
    const format = (url.searchParams.get("format") || "json") as
      "json" | "markdown";
    const type = url.searchParams.get("type") || "all";

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
    );

    const exportData: Record<string, unknown> = {
      userId,
      exportedAt: new Date().toISOString(),
      version: "2.0.0-alpha",
    };

    // Export memories
    if (type === "memories" || type === "all") {
      const { data: memories } = await supabase
        .from("memories")
        .select("*")
        .eq("user_id", userId)
        .order("created_at", { ascending: false });

      exportData.memories = memories || [];
    }

    // Export sessions
    if (type === "sessions" || type === "all") {
      const { data: sessions } = await supabase
        .from("agent_sessions")
        .select("*")
        .eq("user_id", userId)
        .order("created_at", { ascending: false });

      exportData.sessions = sessions || [];
    }

    // Export plugins
    if (type === "all") {
      const { data: plugins } = await supabase
        .from("installed_plugins")
        .select("*")
        .eq("user_id", userId);

      exportData.plugins = plugins || [];
    }

    // Format output
    if (format === "markdown") {
      const markdown = formatAsMarkdown(exportData);
      return new Response(markdown, {
        headers: {
          "Content-Type": "text/markdown; charset=utf-8",
          "Content-Disposition": `attachment; filename="11-export-${new Date().toISOString().slice(0, 10)}.md"`,
        },
      });
    }

    return NextResponse.json(exportData, {
      headers: {
        "Content-Disposition": `attachment; filename="11-export-${new Date().toISOString().slice(0, 10)}.json"`,
      },
    });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}

function formatAsMarkdown(data: Record<string, unknown>): string {
  const lines: string[] = [
    "# 11 — Export de Dados",
    "",
    `**Exportado em:** ${data.exportedAt}`,
    `**Versão:** ${data.version}`,
    `**Usuário:** ${data.userId}`,
    "",
  ];

  // Memories
  const memories = data.memories as
    Array<{ content: string; kind: string; created_at: string }> | undefined;
  if (memories && memories.length > 0) {
    lines.push("## Memórias", "");
    for (const m of memories) {
      lines.push(`- **[${m.kind}]** ${m.content} _(${m.created_at})_`);
    }
    lines.push("");
  }

  // Sessions
  const sessions = data.sessions as
    Array<{ id: string; status: string; created_at: string }> | undefined;
  if (sessions && sessions.length > 0) {
    lines.push("## Sessões do Agente", "");
    for (const s of sessions) {
      lines.push(`- **${s.id}** — ${s.status} _(${s.created_at})_`);
    }
    lines.push("");
  }

  // Plugins
  const plugins = data.plugins as
    Array<{ name: string; enabled: boolean }> | undefined;
  if (plugins && plugins.length > 0) {
    lines.push("## Plugins", "");
    for (const p of plugins) {
      lines.push(`- ${p.name} — ${p.enabled ? "enabled" : "disabled"}`);
    }
    lines.push("");
  }

  return lines.join("\n");
}
