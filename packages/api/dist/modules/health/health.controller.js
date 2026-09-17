"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthController = void 0;
const common_1 = require("@nestjs/common");
const supabase_js_1 = require("@supabase/supabase-js");
/**
 * HealthController — endpoint leve que valida conectividade com o Supabase.
 * Usado por: /api/keep-alive (CI), start.sh do túnel e monitoramento.
 */
let HealthController = class HealthController {
    supabase = (0, supabase_js_1.createClient)(process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL ?? 'https://uacqekmejviqddrbnfhg.supabase.co', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? process.env.SUPABASE_ANON_KEY ?? '');
    async health() {
        return { status: 'ok', ts: new Date().toISOString() };
    }
    async keepAlive() {
        const started = Date.now();
        try {
            await this.supabase.rpc('select_one'); // fallback abaixo se rpc não existir
            return { status: 'ok', db: true, latencyMs: Date.now() - started };
        }
        catch {
            // RPC pode não existir ainda — `{ data }` consulta trivial para validar conexão.
            const { error } = await this.supabase.from('agent_states').select('user_id').limit(1);
            if (error)
                throw error;
            return { status: 'ok', db: true, latencyMs: Date.now() - started };
        }
    }
};
exports.HealthController = HealthController;
__decorate([
    (0, common_1.Get)('health'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HealthController.prototype, "health", null);
__decorate([
    (0, common_1.Get)('keep-alive'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HealthController.prototype, "keepAlive", null);
exports.HealthController = HealthController = __decorate([
    (0, common_1.Controller)()
], HealthController);
