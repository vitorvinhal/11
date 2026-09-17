import { Request } from 'express';
export declare class AuthController {
    /** Magic Link: qualquer pessoa cria sua conta automaticamente (sem perfis fixos). */
    magicLink(body: {
        email?: string;
    }): Promise<any>;
    /** Me: retorna o usuário autenticado (cria perfil sob demanda se ainda não existe). */
    me(req: Request): Promise<any>;
}
