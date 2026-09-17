import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';

interface TimerBucket {
  count: number;
  resetAt: number;
}

/**
 * RateLimitGuard — janela fixa em memória para /ops/*.
 * Limite por usuário/IP: RATE_LIMIT_MAX chamadas por janela de RATE_LIMIT_WINDOW_MS.
 */
@Injectable()
export class RateLimitGuard implements CanActivate {
  private readonly buckets = new Map<string, TimerBucket>();

  private readonly max: number = Number(process.env.RATE_LIMIT_MAX ?? 60);
  private readonly windowMs: number = Number(process.env.RATE_LIMIT_WINDOW_MS ?? 60_000);

  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest();
    const key = req.user?.sub || req.ip || 'anonymous';
    const now = Date.now();

    const bucket = this.buckets.get(key);
    if (!bucket || now >= bucket.resetAt) {
      this.buckets.set(key, { count: 1, resetAt: now + this.windowMs });
      return true;
    }

    if (bucket.count >= this.max) {
      throw new HttpException(
        { statusCode: HttpStatus.TOO_MANY_REQUESTS, error: 'Rate limit exceeded' },
        HttpStatus.TOO_MANY_REQUESTS
      );
    }

    bucket.count += 1;
    return true;
  }
}