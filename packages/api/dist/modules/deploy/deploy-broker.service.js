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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeployBrokerService = void 0;
const common_1 = require("@nestjs/common");
const supabase_js_1 = require("@supabase/supabase-js");
const crypto = __importStar(require("crypto"));
const TOKEN_TTL_MS = Number(process.env.DEPLOY_TOKEN_TTL_MS ?? 5 * 60 * 1000); // 5 min
const CIRCUIT_MAX_PER_HOUR = Number(process.env.DEPLOY_CIRCUIT_MAX_PER_HOUR ?? 5);
/**
 * DeployBrokerService — substitui credenciais estáticas por tokens de curta duração
 * e escopo mínimo. Aprovação humana é obrigatória antes de qualquer release.
 * Inclui circuit breaker (máx. N deploys/hora) e rollback de um clique.
 */
let DeployBrokerService = class DeployBrokerService {
    supabase;
    circuit = new Map();
    constructor() {
        this.supabase = (0, supabase_js_1.createClient)(process.env.SUPABASE_URL ?? '', process.env.SUPABASE_SERVICE_ROLE_KEY ?? '');
    }
    /** 1) IA solicita deploy: cria request pendente. */
    async requestDeploy(userId, input) {
        const { data, error } = await this.supabase
            .from('deploy_requests')
            .insert({ user_id: userId, action: input.action, target: input.target ?? null, metadata: input.metadata ?? {} })
            .select()
            .single();
        if (error)
            throw new Error(`Falha ao criar request: ${error.message}`);
        return { requestId: data.id, status: 'pending', message: 'Aguardando aprovação humana' };
    }
    /** 2) Humano aprova: emite token curto, escopo mínimo, com hash armazenado. */
    async approveDeploy(requestId, approverId) {
        const { data: req, error: reqErr } = await this.supabase
            .from('deploy_requests')
            .select('*')
            .eq('id', requestId)
            .single();
        if (reqErr || !req)
            throw new Error('Request não encontrado');
        if (req.status !== 'pending')
            throw new Error('Request já decidido');
        // Circuit breaker: ignora se já estourou o limite por hora.
        this.assertNotTripped();
        const token = crypto.randomBytes(32).toString('hex');
        const tokenHash = crypto.createHash('sha256').update(token).digest('hex');
        const expiresAt = new Date(Date.now() + TOKEN_TTL_MS).toISOString();
        const scope = req.action;
        await this.supabase.from('deploy_tokens').insert({
            request_id: requestId,
            scope,
            token_hash: tokenHash,
            expires_at: expiresAt,
        });
        await this.supabase
            .from('deploy_requests')
            .update({ status: 'approved', decided_by: approverId, decided_at: new Date().toISOString() })
            .eq('id', requestId);
        this.recordDeploy(requestId);
        return { token, expiresInMs: TOKEN_TTL_MS };
    }
    /** 3) O token gerado permite 1 execução de release (bandeira `used`). */
    async executeWithToken(token, runner) {
        const tokenHash = crypto.createHash('sha256').update(token).digest('hex');
        const { data, error } = await this.supabase
            .from('deploy_tokens')
            .select('*')
            .eq('token_hash', tokenHash)
            .single();
        if (error || !data)
            throw new Error('Token inválido');
        const row = data;
        if (row.used)
            throw new Error('Token já utilizado');
        if (new Date(row.expires_at).getTime() < Date.now())
            throw new Error('Token expirado');
        const result = await runner(row.scope);
        await this.supabase.from('deploy_tokens').update({ used: true }).eq('token_hash', tokenHash);
        await this.supabase.from('deploy_history').insert({
            request_id: row.request_id,
            action: row.scope,
            revision: result.revision ?? null,
            status: result.ok ? 'done' : 'failed',
            finished_at: new Date().toISOString(),
        });
        return result;
    }
    /** 4) Rollback de um clique: regrava deploy anterior (revision) no histórico. */
    async rollback(requestId) {
        const { data, error } = await this.supabase
            .from('deploy_history')
            .select('*')
            .eq('request_id', requestId)
            .order('created_at', { ascending: false })
            .limit(2);
        if (error || !data || data.length < 2) {
            throw new Error('Sem revisão anterior para rollback');
        }
        const prev = data[1];
        await this.supabase.from('deploy_history').insert({
            action: prev.action,
            target: 'production',
            revision: prev.revision ?? null,
            status: 'rollback',
            finished_at: new Date().toISOString(),
        });
        return { ok: true, revision: prev.revision };
    }
    /** Circuit breaker: máximo N deploys por janela de 1h. */
    assertNotTripped() {
        const now = Date.now();
        const keys = Array.from(this.circuit.keys());
        for (const k of keys) {
            this.circuit.set(k, (this.circuit.get(k) ?? []).filter((t) => now - t < 3600_000));
        }
        const windowKey = new Date(Math.floor(now / 3600_000) * 3600_000).toISOString();
        const count = this.circuit.get(windowKey)?.length ?? 0;
        if (count >= CIRCUIT_MAX_PER_HOUR) {
            throw new Error(`Circuit breaker: limite de ${CIRCUIT_MAX_PER_HOUR} deploys/hora atingido`);
        }
    }
    recordDeploy(requestId) {
        const key = new Date().toISOString().slice(0, 13); // por hora
        const arr = this.circuit.get(key) ?? [];
        arr.push(requestId);
        this.circuit.set(key, arr);
    }
    circuitStatus() {
        const recent = {};
        for (const [k, v] of this.circuit.entries())
            recent[k] = v.length;
        return { maxPerHour: CIRCUIT_MAX_PER_HOUR, recent };
    }
};
exports.DeployBrokerService = DeployBrokerService;
exports.DeployBrokerService = DeployBrokerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], DeployBrokerService);
