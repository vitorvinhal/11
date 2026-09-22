import { NextResponse } from "next/server";
import { readFileSync } from "fs";
import { resolve } from "path";

export async function GET() {
  try {
    const versionPath = resolve(process.cwd(), "public/version.json");
    const versionData = JSON.parse(readFileSync(versionPath, "utf8"));
    return NextResponse.json(versionData);
  } catch {
    try {
      // Fallback: try from next root
      const alt = resolve(
        process.cwd(),
        ".next/standalone/public/version.json",
      );
      const versionData = JSON.parse(readFileSync(alt, "utf8"));
      return NextResponse.json(versionData);
    } catch {
      return NextResponse.json(
        {
          version: "2.10.15-alpha",
          channel: "alpha",
          name: "11",
          changelog: [
            "Redesign completo do Settings dialog",
            "Sessões: renomear, status de segurança, métricas, revogação em massa",
            "Filtro e busca de sessões",
            "Geolocalização por IP",
            "Timeline de atividade 24h",
            "Todas as abas do Settings reestilizadas",
          ],
        },
        { status: 200 },
      );
    }
  }
}
