import { NextResponse } from "next/server";
import { existsSync, readFileSync } from "fs";
import { resolve } from "path";
import { loadRootEnv } from "../../../lib/server-env";
import { requireUser } from "../../../lib/auth-unify";

loadRootEnv();

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type VersionJson = {
  version: string;
  versionCode: number;
  name?: string;
  channel?: string;
  buildTime?: string;
  changelog?: string[];
};

function findVersionJson(): VersionJson | null {
  const candidates = [
    resolve(process.cwd(), "public/version.json"),
    resolve(process.cwd(), "apps/web/public/version.json"),
  ];
  for (const p of candidates) {
    try {
      if (!existsSync(p)) continue;
      return JSON.parse(readFileSync(p, "utf8"));
    } catch {
      /* próxima candidate */
    }
  }
  return null;
}

export async function GET(req: Request) {
  const session = await requireUser(req);
  if (!session)
    return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
  const data: VersionJson = findVersionJson() ?? {
    version: "0.0.0",
    versionCode: 0,
    channel: "stable",
    name: "11",
    changelog: [],
  };

  return NextResponse.json({
    version: data.version,
    versionCode: data.versionCode ?? 0,
    name: data.name ?? "11",
    channel: data.channel ?? "alpha",
    buildTime: data.buildTime ?? null,
    changelog: data.changelog ?? [],
    downloads: {
      desktop:
        process.env.NEXT_PUBLIC_DOWNLOAD_DESKTOP_URL ??
        "/downloads/11-desktop-setup.exe",
      msi:
        process.env.NEXT_PUBLIC_DOWNLOAD_DESKTOP_MSI_URL ??
        "/downloads/11-desktop_x64_en-US.msi",
      mobile:
        process.env.NEXT_PUBLIC_DOWNLOAD_MOBILE_URL ??
        "/downloads/11-mobile.apk",
      android:
        process.env.NEXT_PUBLIC_DOWNLOAD_MOBILE_ANDROID_URL ??
        "/downloads/11-mobile.apk",
      ios: process.env.NEXT_PUBLIC_DOWNLOAD_MOBILE_IOS_URL ?? null,
    },
  });
}
