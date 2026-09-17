// Utilitários para acesso ao estado da IA
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import type { AgentState } from "../types";

let sb: SupabaseClient | null = null;

function getClient(): SupabaseClient {
  if (!sb) {
    sb = createClient(
      process.env.SUPABASE_URL ?? "", 
      process.env.SUPABASE_ANON_KEY ?? ""
    );
  }
  return sb;
}

export async function getAgentState(userId: string): Promise<AgentState | null> {
  const { data, error } = await getClient()
    .from("agent_states")
    .select("mood, updated_at")
    .eq("user_id", userId)
    .single();
  if (error) return null;
  return { mood: data.mood, lastUpdated: data.updated_at } as AgentState;
}

export async function setAgentState(userId: string, mood: AgentState["mood"]) {
  await getClient().from("agent_states").upsert({
    user_id: userId,
    mood,
    updated_at: new Date().toISOString(),
  });
}