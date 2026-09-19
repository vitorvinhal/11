import { NextResponse } from "next/server";
import { readFileSync } from "fs";
import { resolve } from "path";

export async function GET() {
  try {
    const versionPath = resolve(process.cwd(), "public/version.json");
    const versionData = JSON.parse(readFileSync(versionPath, "utf8"));
    return NextResponse.json(versionData);
  } catch (e) {
    return NextResponse.json(
      { version: "0.0.0", channel: "stable", name: "11", changelog: [] },
      { status: 200 },
    );
  }
}
