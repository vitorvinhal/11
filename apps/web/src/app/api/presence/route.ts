/**
 * Presença tempo real — heartbeat e lista de usuários ativos.
 *
 * POST /api/presence — { action: "heartbeat" | "list", page? }
 * Heartbeat: registra o usuário como ativo (TTL 30s)
 * Lista: retorna usuários ativos na página
 */

import { NextResponse } from "next/server";
import { requireUser } from "../../../lib/auth-helpers";
import { getServerClient } from "../../../lib/server-supabase";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Cache em memória para presença (Vercel: reinicia a cada ~60s, mas é suficiente)
const presenceCache = new Map<
  string,
  {
    userId: string;
    name: string;
    page: string;
    lastSeen: number;
    color: string;
  }
>();

const PRESENCE_TTL_MS = 30_000; // 30 segundos
const COLORS = [
  "#00d1ff",
  "#a855f7",
  "#22c55e",
  "#f59e0b",
  "#ef4444",
  "#06b6d4",
  "#8b5cf6",
  "#10b981",
];

function getColor(idx: number): string {
  return COLORS[idx % COLORS.length];
}

export async function POST(req: Request) {
  const auth = await requireUser(req);
  if (!auth) {
    return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
  }

  let body: { action?: string; page?: string };
  try {
    body = (await req.json()) as { action?: string; page?: string };
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const action = body.action ?? "heartbeat";
  const page = body.page ?? "/";
  const now = Date.now();

  // Limpa presence expirada
  for (const [key, val] of Array.from(presenceCache.entries())) {
    if (now - val.lastSeen > PRESENCE_TTL_MS) {
      presenceCache.delete(key);
    }
  }

  if (action === "heartbeat") {
    const colorIdx = presenceCache.size;
    presenceCache.set(auth.userId, {
      userId: auth.userId,
      name: auth.userId.slice(0, 8),
      page,
      lastSeen: now,
      color: getColor(colorIdx),
    });

    return NextResponse.json({ ok: true });
  }

  if (action === "list") {
    const active = Array.from(presenceCache.values()).filter(
      (p) => now - p.lastSeen < PRESENCE_TTL_MS && (!page || p.page === page),
    );

    return NextResponse.json({ users: active });
  }

  return NextResponse.json({ error: "Ação desconhecida" }, { status: 400 });
}
