import { CanActivate, ExecutionContext } from '@nestjs/common';
/**
 * SessionGuard — valida o token JWT do Supabase Auth em cada request.
 * Sem perfis fixos: qualquer usuário autenticado tem acesso e seus dados
 * são isolados por `sub` (auth.uid() no banco via policies).
 */
export declare class SessionGuard implements CanActivate {
    private readonly supabase;
    constructor();
    canActivate(context: ExecutionContext): Promise<boolean>;
}
