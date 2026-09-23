"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedPersonas = seedPersonas;
const supabase_js_1 = require("@supabase/supabase-js");
const supabase = (0, supabase_js_1.createClient)(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);
/** Cliente mantido para personalização futura de estilos por usuário (opcional). */
void supabase;
/**
 * Seed — NÃO cria perfis fixos obrigatórios.
 * Multi-tenant puro: qualquer usuário que criar conta tem dados isolados.
 * Este seed apenas exemplifica como PERSONALIZAR estilos por usuário
 * (opcional, sob demanda), sem pré-aterar contas no sistema.
 */
async function seedPersonas() {
    // Multi-tenant: sem perfis fixos. O sistema cria conta sob demanda
    // via AuthGate + RPC `select_one`. Este seed é intencionalmente NO-OP
    // para garantir que nenhum Vitor/Giovana/Renata pré-criado existe.
    console.warn("Seed de personas desativado — sistema 100% multi-tenant.");
}
if (require.main === module) {
    seedPersonas();
}
