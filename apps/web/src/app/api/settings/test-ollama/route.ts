import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const { endpoint } = await req.json();
    const url = endpoint ?? "http://localhost:11434";

    const res = await fetch(`${url}/api/tags`, {
      signal: AbortSignal.timeout(5000),
    });

    if (!res.ok) {
      return NextResponse.json({ ok: false, error: `HTTP ${res.status}` });
    }

    const data = await res.json();
    const models = (data?.models ?? []).map((m: any) => ({
      name: m.name,
      size: m.size ?? 0,
    }));

    return NextResponse.json({ ok: true, models });
  } catch (err) {
    return NextResponse.json({
      ok: false,
      error: (err as Error).message,
    });
  }
}

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const endpoint =
      url.searchParams.get("endpoint") ?? "http://localhost:11434";

    const res = await fetch(`${endpoint}/api/tags`, {
      signal: AbortSignal.timeout(5000),
    });

    if (!res.ok) {
      return NextResponse.json({ ok: false, error: `HTTP ${res.status}` });
    }

    const data = await res.json();
    const models = (data?.models ?? []).map((m: any) => ({
      name: m.name,
      size: m.size ?? 0,
    }));

    return NextResponse.json({ ok: true, models });
  } catch (err) {
    return NextResponse.json({
      ok: false,
      error: (err as Error).message,
    });
  }
}
