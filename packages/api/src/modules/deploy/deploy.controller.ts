import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { DeployBrokerService } from './deploy-broker.service';
import { SessionGuard } from '../auth/session.guard';

/**
 * DeployController — governança de deploy.
 *  - IA só cria requests (pending) e NUNCA tem credenciais estáticas.
 *  - Humano aprova e recebe token curto de escopo mínimo.
 *  - Circuit breaker + rollback de um clique no mesmo controlador.
 */
@Controller('deploy')
@UseGuards(SessionGuard)
export class DeployController {
  constructor(private readonly broker: DeployBrokerService) {}

  @Post('request')
  request(
    @Req() req: Request,
    @Body() body: { action: 'vercel' | 'supabase' | 'database' | 'web'; target?: string; metadata?: Record<string, unknown> }
  ) {
    const userId = (req as any).user?.sub ?? 'agent';
    return this.broker.requestDeploy(userId, {
      action: body.action,
      target: body.target,
      metadata: body.metadata,
    });
  }

  @Post('approve/:requestId')
  approve(@Param('requestId') requestId: string, @Req() req: Request) {
    const approverId = (req as any).user?.sub ?? 'human'; // substitua por guard RBAC de admin
    return this.broker.approveDeploy(requestId, approverId);
  }

  @Post('execute')
  execute(@Body() body: { token: string }) {
    return this.broker.executeWithToken(body.token, async () => {
      // Runner real fica em packages/cli (scripts/deploy). Aqui registramos o objetivo.
      return { ok: true, revision: `deploy-${Date.now()}` };
    });
  }

  @Post('rollback/:requestId')
  rollback(@Param('requestId') requestId: string) {
    return this.broker.rollback(requestId);
  }

  @Get('circuit')
  circuit() {
    return this.broker.circuitStatus();
  }
}