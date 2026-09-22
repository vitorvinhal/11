import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { requireUser } from "../../../lib/auth-helpers";
import { loadRootEnv } from "../../../lib/server-env";

loadRootEnv();

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const sb = () =>
  createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
    process.env.SUPABASE_SERVICE_ROLE_KEY ?? "",
  );

async function lookupGeo(ip: string): Promise<{
  city: string | null;
  country: string | null;
  country_code: string | null;
}> {
  try {
    if (!ip || ip === "127.0.0.1" || ip === "::1" || ip === "::ffff:127.0.0.1")
      return { city: "Local", country: "Local", country_code: "LC" };
    const res = await fetch(`https://ipinfo.io/${ip}/json`, {
      signal: AbortSignal.timeout(2000),
    });
    if (!res.ok) return { city: null, country: null, country_code: null };
    const d = await res.json();
    const cc = d.country ?? null;
    return {
      city: d.city ?? null,
      country: d.region ?? cc,
      country_code: cc,
    };
  } catch {
    return { city: null, country: null, country_code: null };
  }
}

function getClientIp(req: Request): string | null {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  const real = req.headers.get("x-real-ip");
  if (real) return real;
  return null;
}

export async function GET(req: Request) {
  try {
    const auth = await requireUser(req);
    if (!auth)
      return NextResponse.json({ error: "Não autenticado" }, { status: 401 });

    const client = sb();

    const { data: sessions, error } = await client
      .from("device_sessions")
      .select("*")
      .eq("user_id", auth.userId)
      .order("last_active", { ascending: false });

    if (error) return NextResponse.json({ sessions: [], metrics: null });

    // Backfill IP/geo for sessions missing it (non-blocking)
    const ip = getClientIp(req);
    if (ip) {
      const needsGeo = (sessions ?? []).filter(
        (s) => !s.ip_address && s.user_id === auth.userId,
      );
      if (needsGeo.length > 0) {
        const geo = await lookupGeo(ip);
        void Promise.all(
          needsGeo.map((s) =>
            client
              .from("device_sessions")
              .update({
                ip_address: ip,
                ...(geo.city ? { city: geo.city } : {}),
                ...(geo.country ? { country: geo.country } : {}),
                ...(geo.country_code ? { country_code: geo.country_code } : {}),
              })
              .eq("id", s.id),
          ),
        );
        // Update local data too
        for (const s of needsGeo) {
          if (geo.city) s.city = geo.city;
          if (geo.country) s.country = geo.country;
          if (geo.country_code) s.country_code = geo.country_code;
          s.ip_address = ip;
        }
      }
    }

    // Activity log (last 30 days for metrics, 24h for chart)
    const thirtyDaysAgo = new Date(
      Date.now() - 30 * 24 * 60 * 60 * 1000,
    ).toISOString();
    const twentyFourHAgo = new Date(
      Date.now() - 24 * 60 * 60 * 1000,
    ).toISOString();
    const { data: activityAll } = await client
      .from("session_activity_log")
      .select("session_id, action, created_at")
      .eq("user_id", auth.userId)
      .gte("created_at", thirtyDaysAgo)
      .order("created_at", { ascending: false });

    const { data: activity } = await client
      .from("session_activity_log")
      .select("session_id, action, created_at")
      .eq("user_id", auth.userId)
      .gte("created_at", twentyFourHAgo)
      .order("created_at", { ascending: false });

    // Metrics — baseados em activity log real, não em created_at/last_active
    const allSessions = sessions ?? [];
    const platformCounts: Record<string, number> = {};

    for (const s of allSessions) {
      platformCounts[s.platform] = (platformCounts[s.platform] || 0) + 1;
    }

    const mostUsedPlatform =
      Object.entries(platformCounts).sort((a, b) => b[1] - a[1])[0]?.[0] ??
      null;

    // Tempo ativo real: contagem de minutos únicos com atividade (últimos 30 dias)
    const activeMinutesSet = new Set<string>();
    for (const a of activityAll ?? []) {
      const d = new Date(a.created_at);
      // Chave por minuto (YYYY-MM-DD HH:MM)
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")} ${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
      activeMinutesSet.add(key);
    }
    const totalActiveMinutes = activeMinutesSet.size;

    // Peak hour: usa timezone local do servidor
    const hourCounts: Record<number, number> = {};
    for (const a of activity ?? []) {
      const d = new Date(a.created_at);
      const h = d.getHours();
      hourCounts[h] = (hourCounts[h] || 0) + 1;
    }
    const peakHour = Object.entries(hourCounts).sort(
      (a, b) => b[1] - a[1],
    )[0]?.[0];

    const metrics = {
      totalSessions: allSessions.length,
      totalActiveMinutes,
      mostUsedPlatform,
      peakHour: peakHour !== undefined ? `${peakHour}:00` : null,
    };

    return NextResponse.json({
      sessions: allSessions,
      activity: activity ?? [],
      metrics,
    });
  } catch {
    return NextResponse.json({ sessions: [], metrics: null });
  }
}

export async function POST(req: Request) {
  try {
    const auth = await requireUser(req);
    if (!auth)
      return NextResponse.json({ error: "Não autenticado" }, { status: 401 });

    const body = await req.json();
    const { platform, device, browser, app_version, app_name } = body;
    const ip = getClientIp(req);
    const geo = ip ? await lookupGeo(ip) : null;

    const client = sb();

    // Upsert: mesma plataforma + browser = mesma sessão
    const { data: existing } = await client
      .from("device_sessions")
      .select("id")
      .eq("user_id", auth.userId)
      .eq("platform", platform ?? "unknown")
      .eq("browser", browser ?? "unknown")
      .limit(1)
      .maybeSingle();

    let sessionId: string;

    if (existing) {
      await client
        .from("device_sessions")
        .update({
          last_active: new Date().toISOString(),
          device,
          app_version: app_version ?? "unknown",
          app_name: app_name ?? "web",
          ip_address: ip,
          ...(geo?.city ? { city: geo.city } : {}),
          ...(geo?.country ? { country: geo.country } : {}),
          ...(geo?.country_code ? { country_code: geo.country_code } : {}),
        })
        .eq("id", existing.id);
      sessionId = existing.id;
    } else {
      const { data: inserted } = await client
        .from("device_sessions")
        .insert({
          user_id: auth.userId,
          platform: platform ?? "unknown",
          device: device ?? "unknown",
          browser: browser ?? "unknown",
          app_version: app_version ?? "unknown",
          app_name: app_name ?? "web",
          ip_address: ip,
          city: geo?.city,
          country: geo?.country,
          country_code: geo?.country_code,
        })
        .select("id")
        .single();
      sessionId = inserted?.id ?? "";
    }

    // Log activity
    if (sessionId) {
      await client.from("session_activity_log").insert({
        session_id: sessionId,
        user_id: auth.userId,
        action: "active",
        metadata: { platform, device, browser },
      });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false });
  }
}

export async function PATCH(req: Request) {
  try {
    const auth = await requireUser(req);
    if (!auth)
      return NextResponse.json({ error: "Não autenticado" }, { status: 401 });

    const body = await req.json();
    const { id, display_name } = body;
    if (!id)
      return NextResponse.json({ error: "id obrigatório" }, { status: 400 });

    const client = sb();

    await client
      .from("device_sessions")
      .update({ display_name: display_name || null })
      .eq("id", id)
      .eq("user_id", auth.userId);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false });
  }
}

export async function DELETE(req: Request) {
  try {
    const auth = await requireUser(req);
    if (!auth)
      return NextResponse.json({ error: "Não autenticado" }, { status: 401 });

    const url = new URL(req.url);
    const id = url.searchParams.get("id");
    const ids = url.searchParams.get("ids");

    const client = sb();

    // Bulk delete
    if (ids) {
      const idList = ids.split(",").filter(Boolean);
      await client
        .from("device_sessions")
        .delete()
        .in("id", idList)
        .eq("user_id", auth.userId);
      return NextResponse.json({ ok: true });
    }

    // Single delete
    if (!id)
      return NextResponse.json({ error: "id obrigatório" }, { status: 400 });

    await client
      .from("device_sessions")
      .delete()
      .eq("id", id)
      .eq("user_id", auth.userId);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false });
  }
}
