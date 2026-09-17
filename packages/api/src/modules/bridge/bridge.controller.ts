import { Body, Controller, Get, Post, Query, UseGuards, Req } from '@nestjs/common';
import { Request } from 'express';
import { OpsService } from './ops.service';
import { AuditLogService } from './audit-log.service';
import { RateLimitGuard } from './rate-limit.guard';
import { SessionGuard } from '../auth/session.guard';

/**
 * BridgeController — expõe APENAS operações nomeadas e validadas.
 * Sem endpoint genérico de execução de shell.
 */
@Controller('ops')
@UseGuards(RateLimitGuard, SessionGuard)
export class BridgeController {
  constructor(
    private readonly ops: OpsService,
    private readonly audit: AuditLogService
  ) {}

  private async auditOp(req: Request, operation: string, payload: unknown, err?: unknown) {
    await this.audit.record(
      (req as any).user?.sub,
      operation,
      mapObj(payload as Record<string, unknown> | undefined, err as Error | undefined)
    );
  }

  @Get('list-files')
  async listFiles(@Req() req: Request, @Query('path') path: string) {
    if (!path) return { error: 'path é obrigatório' };
    try {
      const result = await this.ops.listFiles({ path });
      await this.auditOp(req, 'list-files', { path });
      return result;
    } catch (err) { await this.auditOp(req, 'list-files', { path }, err); throw err; }
  }

  @Get('read-file')
  async readFile(@Req() req: Request, @Query('path') path: string) {
    if (!path) return { error: 'path é obrigatório' };
    try {
      const result = await this.ops.readFile({ path });
      await this.auditOp(req, 'read-file', { path });
      return result;
    } catch (err) { await this.auditOp(req, 'read-file', { path }, err); throw err; }
  }

  @Post('write-file')
  async writeFile(@Req() req: Request, @Body() body: { path?: string; content?: string }) {
    if (!body?.path || body.content === undefined) return { error: 'path e content são obrigatórios' };
    try {
      const result = await this.ops.writeFile({ path: body.path, content: body.content });
      await this.auditOp(req, 'write-file', { path: body.path, bytes: result.bytes });
      return result;
    } catch (err) { await this.auditOp(req, 'write-file', { path: body.path }, err); throw err; }
  }

  @Post('run-build')
  async runBuild(@Req() req: Request, @Body() body: { path?: string; script?: string }) {
    if (!body?.path) return { error: 'path é obrigatório' };
    try {
      const result = await this.ops.runBuild({ path: body.path, script: body.script });
      await this.auditOp(req, 'run-build', { path: body.path, script: body.script });
      return result;
    } catch (err) { await this.auditOp(req, 'run-build', { path: body.path }, err); throw err; }
  }

  @Post('run-command')
  async runCommand(@Req() req: Request, @Body() body: { command?: string; args?: string[]; cwd?: string }) {
    if (!body?.command) return { error: 'command é obrigatório' };
    try {
      const result = await this.ops.runCommand({ command: body.command, args: body.args, cwd: body.cwd });
      await this.auditOp(req, 'run-command', { command: body.command, args: body.args, cwd: body.cwd });
      return result;
    } catch (err) { await this.auditOp(req, 'run-command', { command: body.command }, err); throw err; }
  }

  @Post('run-tests')
  async runTests(@Req() req: Request, @Body() body: { path?: string; command?: string }) {
    if (!body?.path) return { error: 'path é obrigatório' };
    try {
      const result = await this.ops.runTests({ path: body.path, command: body.command });
      await this.auditOp(req, 'run-tests', { path: body.path, command: body.command });
      return result;
    } catch (err) { await this.auditOp(req, 'run-tests', { path: body.path }, err); throw err; }
  }
}

function mapObj(o: Record<string, unknown> | undefined, err?: Error): Record<string, unknown> {
  const base = o ? { ...o } : {};
  if (err) base.error = err.message;
  return base;
}