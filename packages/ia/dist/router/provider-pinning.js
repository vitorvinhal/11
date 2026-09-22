"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.providerPinning = exports.ProviderPinning = void 0;
const supabase_js_1 = require("@supabase/supabase-js");
const crypto = __importStar(require("crypto"));
/**
 * UUID determinístico (v4-like) a partir do sessionId, para caber na coluna
 * `model_sessions.session_id uuid` — antes usava md5-hex (32 chars) que o
 * Postgres rejeitava e a pinagem nunca persistia.
 */
function toUuid(sessionId) {
    const h = crypto.createHash('md5').update(sessionId).digest('hex');
    return `${h.slice(0, 8)}-${h.slice(8, 12)}-4${h.slice(13, 16)}-a${h.slice(17, 20)}-${h.slice(20, 32)}`;
}
/**
 * ProviderPinning — pinagem do provedor por sessão de conversa.
 * No Modo Auto o provedor só troca no fim da sessão OU em falha explícita
 * (timeout / 5xx / rate-limit), registrando o motivo.
 */
class ProviderPinning {
    pinMemory = new Map();
    _supabase = null;
    supa() {
        if (!this._supabase) {
            this._supabase = (0, supabase_js_1.createClient)(process.env.SUPABASE_URL ?? '', process.env.SUPABASE_SERVICE_ROLE_KEY ?? '');
        }
        return this._supabase;
    }
    currentProvider(sessionId) {
        return this.pinMemory.get(sessionId)?.provider ?? '9router';
    }
    /** Define o provider para a sessão (persistido). */
    async pin(sessionId, provider, reason) {
        this.pinMemory.set(sessionId, { provider, reason });
        const sessionKey = toUuid(sessionId);
        try {
            await this.supa().from('model_sessions').upsert({
                session_id: sessionKey,
                provider,
                reason,
                pinned_until: new Date(Date.now() + 30 * 60_000).toISOString(),
                updated_at: new Date().toISOString(),
            }, { onConflict: 'session_id' });
        }
        catch {
            // best-effort
        }
    }
    /** Releitura da persistência ao iniciar processo (Vercel serverless). */
    async hydrate(sessionId) {
        if (this.pinMemory.has(sessionId))
            return;
        const sessionKey = toUuid(sessionId);
        const { data } = await this.supa()
            .from('model_sessions')
            .select('provider')
            .eq('session_id', sessionKey)
            .single();
        if (data)
            this.pinMemory.set(sessionId, { provider: data.provider });
    }
    resetSession(sessionId) {
        this.pinMemory.delete(sessionId);
    }
}
exports.ProviderPinning = ProviderPinning;
exports.providerPinning = new ProviderPinning();
