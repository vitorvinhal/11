import { NextResponse } from "next/server";
import { requireUser } from "@/lib/auth-helpers";
import { listWebhooks, createWebhook, WEBHOOK_EVENTS } from "@/lib/webhooks";

export async function GET(request: Request) {
  const auth = await requireUser(request);
  if (!auth) {
    return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
  }

  const hooks = listWebhooks(auth.userId);
  return NextResponse.json({
    webhooks: hooks.map((h) => ({
      id: h.id,
      url: h.url,
      events: h.events,
      active: h.active,
      createdAt: h.createdAt,
      lastTriggeredAt: h.lastTriggeredAt,
      failCount: h.failCount,
    })),
    availableEvents: WEBHOOK_EVENTS,
  });
}

export async function POST(request: Request) {
  const auth = await requireUser(request);
  if (!auth) {
    return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
  }

  let body: { url?: string; events?: string[] };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  if (!body.url || !body.events || !Array.isArray(body.events)) {
    return NextResponse.json(
      { error: "Campos obrigatórios: url, events[]" },
      { status: 400 },
    );
  }

  const invalidEvents = body.events.filter(
    (e) => !WEBHOOK_EVENTS.includes(e as (typeof WEBHOOK_EVENTS)[number]),
  );
  if (invalidEvents.length > 0) {
    return NextResponse.json(
      { error: `Eventos inválidos: ${invalidEvents.join(", ")}` },
      { status: 400 },
    );
  }

  const webhook = createWebhook(auth.userId, body.url, body.events);

  return NextResponse.json(
    {
      id: webhook.id,
      url: webhook.url,
      events: webhook.events,
      secret: webhook.secret,
      active: webhook.active,
      createdAt: webhook.createdAt,
    },
    { status: 201 },
  );
}
