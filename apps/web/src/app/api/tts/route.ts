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
    const body = (await req.json()) as {
      text?: string;
      voice?: string;
      format?: "mp3" | "wav" | "pcm";
      speed?: number;
    };

    const apiKey = (process.env.FISH_API_KEY ?? "").trim();
    if (!apiKey)
      return NextResponse.json(
        { error: "FISH_API_KEY não configurada" },
        { status: 500 },
      );
    if (!body.text)
      return NextResponse.json({ error: "texto ausente" }, { status: 400 });

    const voiceId = body.voice ?? process.env.FISH_VOICE_ID ?? "";
    if (!voiceId)
      return NextResponse.json(
        { error: "FISH_VOICE_ID não configurado" },
        { status: 500 },
      );

    const res = await fetch("https://api.fish.audio/v1/tts", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        model: "s2.1-pro",
      },
      body: JSON.stringify({
        text: body.text,
        reference_id: voiceId,
        format: body.format ?? "mp3",
        sample_rate: 44100,
        mp3_bitrate: 128,
        prosody: {
          speed: body.speed ?? 1,
          volume: 0,
          normalize_loudness: true,
        },
        latency: "normal",
      }),
      signal: AbortSignal.timeout(60_000),
    });

    if (!res.ok) {
      const errText = await res.text();
      return NextResponse.json(
        { error: `Fish Audio ${res.status}: ${errText.slice(0, 300)}` },
        { status: 502 },
      );
    }

    const audioBuffer = await res.arrayBuffer();
    const base64 = Buffer.from(audioBuffer).toString("base64");
    const mime =
      body.format === "wav"
        ? "audio/wav"
        : body.format === "pcm"
          ? "audio/pcm"
          : "audio/mpeg";

    return NextResponse.json({
      audio: `data:${mime};base64,${base64}`,
      format: body.format ?? "mp3",
      voice: voiceId,
    });
  } catch (err) {
    return NextResponse.json(
      { error: (err as Error).message },
      { status: 500 },
    );
  }
}
