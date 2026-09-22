"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { createClient, SupabaseClient, User } from "@supabase/supabase-js";
import { getPlatform } from "./platform";
import { registerAppDevice } from "./device-client";

let cachedClient: SupabaseClient | null = null;

function getSupabase(): SupabaseClient {
  if (cachedClient) return cachedClient;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";
  cachedClient = createClient(
    url || "https://placeholder.supabase.co",
    key || "placeholder",
  );
  return cachedClient;
}

export interface AuthContextValue {
  supabase: SupabaseClient;
  user: User | null;
  loading: boolean;
  signUp: (email: string, password: string) => Promise<{ error?: string }>;
  signIn: (email: string, password: string) => Promise<{ error?: string }>;
  signInWithGoogle: () => Promise<{ error?: string }>;
  signOut: () => Promise<void>;
  getAccessToken: () => Promise<string | null>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

async function registerDeviceSession(token: string) {
  try {
    const platform = getPlatform();
    const browser =
      typeof navigator !== "undefined"
        ? (navigator.userAgent.split(" ").pop() ?? "unknown")
        : "unknown";
    const device =
      typeof navigator !== "undefined"
        ? navigator.platform || "unknown"
        : "unknown";

    // Detect app name from platform
    const appName =
      platform === "desktop-app"
        ? "desktop"
        : platform === "mobile-app"
          ? "mobile"
          : platform === "mobile-web"
            ? "mobile-web"
            : "web";

    // Get version from version.json
    let appVersion = "unknown";
    try {
      const vr = await fetch("/version.json");
      if (vr.ok) {
        const vj = await vr.json();
        appVersion = vj.version ?? "unknown";
      }
    } catch {
      /* ignore */
    }

    await fetch("/api/devices", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        platform,
        device,
        browser,
        app_version: appVersion,
        app_name: appName,
      }),
    });

    // Pareamento do Agente de Dispositivo (só apps nativos).
    void registerAppDevice(token);
  } catch {
    /* best-effort */
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const supabase = getSupabase();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      const u = data.session?.user ?? null;
      setUser(u);
      if (data.session?.access_token) {
        void registerDeviceSession(data.session.access_token);
      }
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
      if (session?.access_token) {
        void registerDeviceSession(session.access_token);
      }
    });
    return () => sub.subscription.unsubscribe();
  }, [supabase]);

  const signUp = async (email: string, password: string) => {
    const { error } = await supabase.auth.signUp({ email, password });
    return { error: error?.message };
  };

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { error: error?.message };
  };

  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: window.location.origin },
    });
    return { error: error?.message };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  const getAccessToken = async (): Promise<string | null> => {
    const { data } = await supabase.auth.getSession();
    return data.session?.access_token ?? null;
  };

  return (
    <AuthContext.Provider
      value={{
        supabase,
        user,
        loading,
        signUp,
        signIn,
        signInWithGoogle,
        signOut,
        getAccessToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth deve ser usado dentro de <AuthProvider>");
  return ctx;
}
