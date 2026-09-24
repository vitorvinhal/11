import { NextResponse } from "next/server";
import { loadRootEnv } from "../../../lib/server-env";
import { requireUser } from "../../../lib/auth-unify";

loadRootEnv();

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const session = await requireUser(req);
    if (!session)
      return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
    const body = (await req.json()) as { audio?: string; mime?: string };
    const apiKey = (process.env.ELEVENLABS_KEY ?? "").trim();
    if (!body.audio)
      return NextResponse.json({ error: "áudio ausente" }, { status: 400 });
    if (!apiKey)
      return NextResponse.json(
        { error: "ELEVENLABS_KEY não configurada" },
        { status: 500 },
      );

    const format = body.mime ?? "audio/webm";
    const audioBuffer = Buffer.from(
      body.audio.replace(/^data:[^,]+,/, ""),
      "base64",
    );

    const form = new FormData();
    form.append(
      "file",
      new Blob([audioBuffer], { type: format }),
      `rec.${format.includes("ogg") ? "ogg" : "webm"}`,
    );
    form.append("model_id", "scribe_v1");
    form.append("language", "pt-BR");

    const res = await fetch("https://api.elevenlabs.io/v1/speech-to-text", {
      method: "POST",
      headers: { "xi-api-key": apiKey },
      body: form,
      signal: AbortSignal.timeout(60_000),
    });
    if (!res.ok) {
      const errText = await res.text();
      return NextResponse.json(
        { error: `ElevenLabs ${res.status}: ${errText.slice(0, 300)}` },
        { status: 502 },
      );
    }
    const data = (await res.json()) as { text?: string };
    return NextResponse.json({ text: data.text ?? "" });
  } catch (err) {
    return NextResponse.json(
      { error: (err as Error).message },
      { status: 500 },
    );
  }
}
