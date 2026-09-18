import { NextResponse } from "next/server";
import type { CanonicalMessage } from "@11/ia";
import { modelGateway } from "@11/ia";
import { loadRootEnv } from "../../../lib/server-env";
import { requireUser } from "../../../lib/auth-helpers";

loadRootEnv();

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface CompareMsg {
  role: "user" | "assistant" | "system";
  content: string;
}

interface CompareBody {
  messages?: CompareMsg[];
  sessionId?: string;
  providers?: string[];
}

const DEFAULT_COMPARE = ["9router", "gemini", "openrouter"];

function toCanonical(messages: CompareMsg[]): CanonicalMessage[] {
  return messages.map((m) => ({
    role: m.role,
    content: [{ type: "text", text: m.content }],
  }));
}

/**
 * POST /api/compare
 * Modo comparação lado a lado — emite a mesma consulta para até 3 provedores.
 * Body: { messages, sessionId, providers? }
 */
export async function POST(req: Request) {
  try {
    const auth = await requireUser(req);
    if (!auth) {
      return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
    }

    const body = (await req.json()) as CompareBody;
    const { messages, sessionId, providers } = body;
    if (!messages?.length || !sessionId) {
      return NextResponse.json(
        { error: "messages e sessionId são obrigatórios" },
        { status: 400 },
      );
    }

    const targets = (providers?.length ? providers : DEFAULT_COMPARE).filter(
      Boolean,
    );
    const results = await modelGateway.compare(
      toCanonical(messages),
      sessionId,
      targets,
    );

    return NextResponse.json({ results });
  } catch (err) {
    return NextResponse.json(
      { error: (err as Error).message },
      { status: 500 },
    );
  }
}
