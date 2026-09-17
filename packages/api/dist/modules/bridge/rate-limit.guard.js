"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RateLimitGuard = void 0;
const common_1 = require("@nestjs/common");
/**
 * RateLimitGuard — janela fixa em memória para /ops/*.
 * Limite por usuário/IP: RATE_LIMIT_MAX chamadas por janela de RATE_LIMIT_WINDOW_MS.
 */
let RateLimitGuard = class RateLimitGuard {
    buckets = new Map();
    max = Number(process.env.RATE_LIMIT_MAX ?? 60);
    windowMs = Number(process.env.RATE_LIMIT_WINDOW_MS ?? 60_000);
    canActivate(context) {
        const req = context.switchToHttp().getRequest();
        const key = req.user?.sub || req.ip || 'anonymous';
        const now = Date.now();
        const bucket = this.buckets.get(key);
        if (!bucket || now >= bucket.resetAt) {
            this.buckets.set(key, { count: 1, resetAt: now + this.windowMs });
            return true;
        }
        if (bucket.count >= this.max) {
            throw new common_1.HttpException({ statusCode: common_1.HttpStatus.TOO_MANY_REQUESTS, error: 'Rate limit exceeded' }, common_1.HttpStatus.TOO_MANY_REQUESTS);
        }
        bucket.count += 1;
        return true;
    }
};
exports.RateLimitGuard = RateLimitGuard;
exports.RateLimitGuard = RateLimitGuard = __decorate([
    (0, common_1.Injectable)()
], RateLimitGuard);
