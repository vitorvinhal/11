import { NextResponse } from "next/server";
import { getOpenApiJson } from "@/lib/openapi";

export async function GET() {
  const spec = getOpenApiJson();
  return new NextResponse(spec, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
