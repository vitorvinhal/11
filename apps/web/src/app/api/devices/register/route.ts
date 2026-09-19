/**
 * Devices — Registro e pareamento do Agente de Dispositivo.
 *
 * POST /api/devices/register — cria/atualiza um device pareado (retorna secret na criação).
 * GET  /api/devices/register — lista os devices pareados do usuário.
 */

import { NextResponse } from "next/server";
import { requireUser } from "../../../../lib/auth-helpers";
import { loadRootEnv } from "../../../../lib/server-env";
import { registerDevice, getDevices } from "../../../../lib/device-registry";
import { RegisterDeviceInput } from "@11/shared";

loadRootEnv();

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const auth = await requireUser(req);
    if (!auth) {
      return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
    }

    const body = (await req.json()) as RegisterDeviceInput;
    const result = await registerDevice(auth.sb, body, auth.userId);

    return NextResponse.json({ success: true, ...result });
  } catch (err) {
    console.error("[devices/register] Erro:", err);
    return NextResponse.json(
      { error: (err as Error).message },
      { status: 500 },
    );
  }
}

export async function GET(req: Request) {
  try {
    const auth = await requireUser(req);
    if (!auth) {
      return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
    }

    const devices = await getDevices(auth.sb, auth.userId);
    return NextResponse.json({ devices });
  } catch (err) {
    console.error("[devices/register] Erro:", err);
    return NextResponse.json(
      { error: (err as Error).message },
      { status: 500 },
    );
  }
}
