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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const supabase_js_1 = require("@supabase/supabase-js");
const session_guard_1 = require("./session.guard");
const supabase = (0, supabase_js_1.createClient)(process.env.SUPABASE_URL ?? '', process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_ANON_KEY ?? '');
let AuthController = class AuthController {
    /** Magic Link: qualquer pessoa cria sua conta automaticamente (sem perfis fixos). */
    async magicLink(body) {
        if (!body?.email)
            return { error: 'email é obrigatório' };
        const { error } = await supabase.auth.signInWithOtp({ email: body.email });
        if (error)
            return { error: error.message };
        return { message: `Magic link enviado para ${body.email}` };
    }
    /** Me: retorna o usuário autenticado (cria perfil sob demanda se ainda não existe). */
    async me(req) {
        const user = req.user;
        // Cria perfil implicitamente (isolamento multi-tenant via auth.uid()).
        await supabase.from('users').upsert({ id: user.sub, email: user.email ?? '', name: 'Novo Usuário' }).select();
        return { id: user.sub, email: user.email, tenant: user.sub };
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('magic-link'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "magicLink", null);
__decorate([
    (0, common_1.Get)('me'),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "me", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth')
], AuthController);
