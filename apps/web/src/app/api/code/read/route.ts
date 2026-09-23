import { NextRequest, NextResponse } from "next/server";
import { verifyToken, checkRateLimit } from "../../services/security";
import { getSession } from "../session-manager";
import { loadRootEnv } from "../../../../lib/server-env";

loadRootEnv();

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const user = await verifyToken(req);
    if (!user)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    if (!checkRateLimit(user.userId))
      return NextResponse.json(
        { error: "Rate limit exceeded" },
        { status: 429 },
      );

    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get("id");
    if (!sessionId)
      return NextResponse.json(
        { error: "Session ID required" },
        { status: 400 },
      );

    const session = getSession(sessionId);
    if (!session)
      return NextResponse.json({ error: "Session not found" }, { status: 404 });
    if (session.userId !== user.userId)
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });

    const { output, error, exitCode, status } = session;
    return NextResponse.json({ output, error, exitCode, status });
  } catch (e) {
    console.error("GET /api/code/read error:", e);
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}
