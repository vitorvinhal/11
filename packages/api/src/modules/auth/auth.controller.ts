import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { createClient } from '@supabase/supabase-js';
import { SessionGuard } from './session.guard';

const supabase = createClient(
  process.env.SUPABASE_URL ?? '',
  process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_ANON_KEY ?? ''
);

@Controller('auth')
export class AuthController {
  /** Magic Link: qualquer pessoa cria sua conta automaticamente (sem perfis fixos). */
  @Post('magic-link')
  async magicLink(@Body() body: { email?: string }): Promise<any> {
    if (!body?.email) return { error: 'email é obrigatório' };
    const { error } = await supabase.auth.signInWithOtp({ email: body.email });
    if (error) return { error: error.message };
    return { message: `Magic link enviado para ${body.email}` };
  }

  /** Me: retorna o usuário autenticado (cria perfil sob demanda se ainda não existe). */
  @Get('me')
  @UseGuards(SessionGuard)
  async me(@Req() req: Request): Promise<any> {
    const user = (req as any).user as { sub: string; email?: string };
    // Cria perfil implicitamente (isolamento multi-tenant via auth.uid()).
    await supabase.from('users').upsert({ id: user.sub, email: user.email ?? '', name: 'Novo Usuário' }).select();
    return { id: user.sub, email: user.email, tenant: user.sub };
  }
}