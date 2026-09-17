"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAgentState = getAgentState;
exports.setAgentState = setAgentState;
// Utilitários para acesso ao estado da IA
const supabase_js_1 = require("@supabase/supabase-js");
let sb = null;
function getClient() {
    if (!sb) {
        sb = (0, supabase_js_1.createClient)(process.env.SUPABASE_URL ?? "", process.env.SUPABASE_ANON_KEY ?? "");
    }
    return sb;
}
async function getAgentState(userId) {
    const { data, error } = await getClient()
        .from("agent_states")
        .select("mood, updated_at")
        .eq("user_id", userId)
        .single();
    if (error)
        return null;
    return { mood: data.mood, lastUpdated: data.updated_at };
}
async function setAgentState(userId, mood) {
    await getClient().from("agent_states").upsert({
        user_id: userId,
        mood,
        updated_at: new Date().toISOString(),
    });
}
