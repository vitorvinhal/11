"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestDeploy = requestDeploy;
exports.runDeploy = runDeploy;
const supabase_js_1 = require("@supabase/supabase-js");
/**
 * Deploy tool — governado pelo DeployBroker (ver packages/api/src/modules/deploy).
 *  - NUNCA usa credenciais estáticas de Vercel/Supabase.
 *  - Solicita request (pending) → humano aprova → recebe token curto.
 *  - Token é utilizado 1x via runner.
 */
let _supabase = null;
function supa() {
    if (!_supabase) {
        _supabase = (0, supabase_js_1.createClient)(process.env.SUPABASE_URL ?? '', process.env.SUPABASE_SERVICE_ROLE_KEY ?? '');
    }
    return _supabase;
}
async function requestDeploy(action, metadata = {}) {
    const { data, error } = await supa()
        .from('deploy_requests')
        .insert({ user_id: metadata.sub ?? 'agent', action, metadata })
        .select()
        .single();
    if (error)
        throw new Error(`Falha ao solicitar deploy: ${error.message}`);
    return { requestId: data.id, status: 'pending' };
}
async function runDeploy(token, scope) {
    const url = process.env.API_URL ?? 'http://localhost:4000';
    const res = await fetch(`${url}/deploy/execute`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ token, scope }),
    });
    if (!res.ok)
        throw new Error(`deploy executado com erro ${res.status}`);
    return { ok: true };
}
