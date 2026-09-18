import { NextResponse } from "next/server";
import { requireUser } from "../../../lib/auth-helpers";
import { loadRootEnv } from "../../../lib/server-env";
import { createClient } from "@supabase/supabase-js";

loadRootEnv();

/**
 * POST /api/import — Importar dados em lote
 * Aceita JSON com memories, plugins, skills
 */
export async function POST(req: Request) {
  try {
    const auth = await requireUser(req);
    if (!auth) {
      return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
    }
    const { userId } = auth;

    const body = (await req.json()) as {
      memories?: Array<{ content: string; kind?: string }>;
      plugins?: Array<{ id: string; name: string; enabled?: boolean }>;
      skills?: Array<{ id: string; enabled?: boolean }>;
    };

    const sb = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
    );

    const results: {
      memoriesImported: number;
      pluginsImported: number;
      skillsImported: number;
      errors: string[];
    } = {
      memoriesImported: 0,
      pluginsImported: 0,
      skillsImported: 0,
      errors: [],
    };

    // Import memories (max 100 per request)
    if (body.memories && Array.isArray(body.memories)) {
      const memories = body.memories.slice(0, 100);
      for (const m of memories) {
        try {
          const { error } = await sb.from("memories").insert({
            user_id: userId,
            content: m.content,
            kind: m.kind ?? "imported",
          });
          if (error) {
            results.errors.push(`Memory: ${error.message}`);
          } else {
            results.memoriesImported++;
          }
        } catch {
          results.errors.push("Memory: insert failed");
        }
      }
    }

    // Import plugins
    if (body.plugins && Array.isArray(body.plugins)) {
      for (const p of body.plugins) {
        try {
          const { error } = await sb.from("plugins").upsert({
            id: p.id,
            user_id: userId,
            name: p.name,
            description: `Imported plugin: ${p.name}`,
            version: "1.0.0",
            author: "import",
            enabled: p.enabled ?? true,
          });
          if (error) {
            results.errors.push(`Plugin ${p.id}: ${error.message}`);
          } else {
            results.pluginsImported++;
          }
        } catch {
          results.errors.push(`Plugin ${p.id}: upsert failed`);
        }
      }
    }

    // Import skills (enabled/disabled state)
    if (body.skills && Array.isArray(body.skills)) {
      for (const s of body.skills) {
        try {
          const { error } = await sb.from("skills").upsert({
            id: s.id,
            user_id: userId,
            name: s.id,
            enabled: s.enabled ?? true,
          });
          if (error) {
            results.errors.push(`Skill ${s.id}: ${error.message}`);
          } else {
            results.skillsImported++;
          }
        } catch {
          results.errors.push(`Skill ${s.id}: upsert failed`);
        }
      }
    }

    return NextResponse.json({
      success: true,
      imported: {
        memories: results.memoriesImported,
        plugins: results.pluginsImported,
        skills: results.skillsImported,
      },
      errors: results.errors,
      timestamp: new Date().toISOString(),
    });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}
