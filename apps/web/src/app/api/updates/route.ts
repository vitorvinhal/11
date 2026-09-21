import { NextResponse } from "next/server";
import { readFileSync } from "fs";
import { resolve } from "path";
import { loadRootEnv } from "../../../lib/server-env";

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

export async function GET() {
  let data: VersionJson = {
    version: "0.0.0",
    versionCode: 0,
    channel: "stable",
    name: "11",
    changelog: [],
  };
  try {
    const versionPath = resolve(process.cwd(), "public/version.json");
    data = { ...data, ...JSON.parse(readFileSync(versionPath, "utf8")) };
  } catch {
    /* fallback acima */
  }

  return NextResponse.json({
    version: data.version,
    versionCode: data.versionCode ?? 0,
    name: data.name ?? "11",
    channel: data.channel ?? "alpha",
    buildTime: data.buildTime ?? null,
    changelog: data.changelog ?? [],
    downloads: {
      desktop: process.env.NEXT_PUBLIC_DOWNLOAD_DESKTOP_URL ?? null,
      mobile: process.env.NEXT_PUBLIC_DOWNLOAD_MOBILE_URL ?? null,
      android: process.env.NEXT_PUBLIC_DOWNLOAD_MOBILE_ANDROID_URL ?? null,
      ios: process.env.NEXT_PUBLIC_DOWNLOAD_MOBILE_IOS_URL ?? null,
    },
  });
}
