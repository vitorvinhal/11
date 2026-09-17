import { CanActivate, ExecutionContext } from '@nestjs/common';
/**
 * RateLimitGuard — janela fixa em memória para /ops/*.
 * Limite por usuário/IP: RATE_LIMIT_MAX chamadas por janela de RATE_LIMIT_WINDOW_MS.
 */
export declare class RateLimitGuard implements CanActivate {
    private readonly buckets;
    private readonly max;
    private readonly windowMs;
    canActivate(context: ExecutionContext): boolean;
}
