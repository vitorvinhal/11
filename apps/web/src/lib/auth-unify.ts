import { getAuthClient } from "./server-supabase";
import { NextRequest } from "next/server";

/** Unified auth helper. Returns userId if authenticated, else null. */
export async function requireUser(
  req: Request | NextRequest,
): Promise<{ userId: string; email: string } | null> {
  const hasSupabase = !!process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!hasSupabase) {
    if (process.env.NODE_ENV === "production") return null;
    return { userId: "dev-user", email: "" };
  }
  const auth = getAuthClient(req as any);
  const { data } = await auth.auth.getUser();
  if (!data?.user) return null;
  return { userId: data.user.id, email: data.user.email ?? "" };
}
