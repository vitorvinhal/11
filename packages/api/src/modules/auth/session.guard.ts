import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

/**
 * SessionGuard — valida o token JWT do Supabase Auth em cada request.
 * Sem perfis fixos: qualquer usuário autenticado tem acesso e seus dados
 * são isolados por `sub` (auth.uid() no banco via policies).
 */
@Injectable()
export class SessionGuard implements CanActivate {
  private readonly supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      process.env.SUPABASE_URL ?? '',
      process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_ANON_KEY ?? ''
    );
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const header: string | undefined = req.headers['authorization'];
    if (!header?.startsWith('Bearer ')) throw new UnauthorizedException('Token ausente');

    const jwt = header.slice('Bearer '.length);
    const { data, error } = await this.supabase.auth.getUser(jwt);
    if (error || !data.user) throw new UnauthorizedException('Sessão inválida');

    (req as any).user = { sub: data.user.id, email: data.user.email };
    return true;
  }
}