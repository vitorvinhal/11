import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
  ConnectedSocket,
  MessageBody,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Server, Socket } from 'socket.io';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { PtyManagerService, PtySession } from './pty-manager.service';

interface AuthenticatedSocket extends Socket {
  userId?: string;
  sessionId?: string;
}

@WebSocketGateway({
  cors: { origin: true },
  namespace: '/terminal',
  transports: ['websocket', 'polling'],
})
export class TerminalGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server!: Server;
  private readonly logger = new Logger(TerminalGateway.name);
  private readonly supabase: SupabaseClient;
  private readonly socketSessions = new Map<string, string>();
  private readonly outputCleanups = new Map<string, () => void>();
  private readonly exitCleanups = new Map<string, () => void>();

  constructor(private readonly ptyManager: PtyManagerService) {
    this.supabase = createClient(
      process.env.SUPABASE_URL ?? '',
      process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_ANON_KEY ?? ''
    );
  }

  async handleConnection(client: AuthenticatedSocket): Promise<void> {
    try {
      const token = client.handshake.auth?.token ?? client.handshake.query?.token;
      if (!token || typeof token !== 'string') {
        client.emit('error', { message: 'Token ausente' });
        client.disconnect();
        return;
      }

      const { data, error } = await this.supabase.auth.getUser(token);
      if (error || !data.user) {
        client.emit('error', { message: 'Token invalido' });
        client.disconnect();
        return;
      }

      client.userId = data.user.id;
      this.logger.log(`WS connected: ${client.id} user=${client.userId}`);
      client.emit('connected', { userId: client.userId });
    } catch (err) {
      this.logger.error(`WS auth failed: ${(err as Error).message}`);
      client.emit('error', { message: 'Autenticacao falhou' });
      client.disconnect();
    }
  }

  handleDisconnect(client: AuthenticatedSocket): void {
    const sessionId = this.socketSessions.get(client.id);
    if (sessionId) {
      this.cleanupSessionListeners(sessionId);
      this.socketSessions.delete(client.id);
    }
    this.logger.log(`WS disconnected: ${client.id}`);
  }

  @SubscribeMessage('create-session')
  async handleCreateSession(
    @ConnectedSocket() client: AuthenticatedSocket,
    @MessageBody() data: { sessionId: string; cols?: number; rows?: number; cwd?: string },
  ): Promise<void> {
    if (!client.userId) return;

    try {
      const session = await this.ptyManager.createSession(client.userId, data.sessionId, {
        cols: data.cols, rows: data.rows, cwd: data.cwd,
      });

      this.socketSessions.set(client.id, session.id);

      this.setupSessionListeners(client, session);

      client.emit('session-created', {
        sessionId: session.id,
        cwd: session.cwd,
        command: session.command,
      });
    } catch (err) {
      client.emit('error', { message: (err as Error).message });
    }
  }

  @SubscribeMessage('input')
  handleInput(
    @ConnectedSocket() client: AuthenticatedSocket,
    @MessageBody() data: { sessionId: string; data: string },
  ): void {
    if (!client.userId) return;
    const session = this.ptyManager.getSession(data.sessionId);
    if (!session || session.userId !== client.userId) return;
    this.ptyManager.writeToSession(data.sessionId, data.data);
  }

  @SubscribeMessage('resize')
  handleResize(
    @ConnectedSocket() client: AuthenticatedSocket,
    @MessageBody() data: { sessionId: string; cols: number; rows: number },
  ): void {
    if (!client.userId) return;
    const session = this.ptyManager.getSession(data.sessionId);
    if (!session || session.userId !== client.userId) return;
    this.ptyManager.resizeSession(data.sessionId, data.cols, data.rows);
  }

  @SubscribeMessage('kill-session')
  handleKillSession(
    @ConnectedSocket() client: AuthenticatedSocket,
    @MessageBody() data: { sessionId: string },
  ): void {
    if (!client.userId) return;
    const session = this.ptyManager.getSession(data.sessionId);
    if (!session || session.userId !== client.userId) return;
    this.ptyManager.killSession(data.sessionId);
    client.emit('session-killed', { sessionId: data.sessionId });
  }

  @SubscribeMessage('list-sessions')
  handleListSessions(@ConnectedSocket() client: AuthenticatedSocket): void {
    if (!client.userId) return;
    const sessions = this.ptyManager.getUserSessions(client.userId);
    client.emit('session-list', sessions.map((s) => ({
      id: s.id, cwd: s.cwd, command: s.command,
      createdAt: s.createdAt, lastActivity: s.lastActivity,
    })));
  }

  @SubscribeMessage('inject-command')
  handleInjectCommand(
    @ConnectedSocket() client: AuthenticatedSocket,
    @MessageBody() data: { sessionId: string; command: string },
  ): void {
    if (!client.userId) return;
    const session = this.ptyManager.getSession(data.sessionId);
    if (!session || session.userId !== client.userId) return;
    this.ptyManager.writeToSession(data.sessionId, data.command + '\n');
  }

  @SubscribeMessage('read-buffer')
  handleReadBuffer(
    @ConnectedSocket() client: AuthenticatedSocket,
    @MessageBody() data: { sessionId: string },
  ): void {
    if (!client.userId) return;
    const session = this.ptyManager.getSession(data.sessionId);
    if (!session || session.userId !== client.userId) return;
    client.emit('buffer-data', { sessionId: data.sessionId, cwd: session.cwd });
  }

  private setupSessionListeners(client: AuthenticatedSocket, session: PtySession): void {
    const outputCleanup = this.ptyManager.onSessionOutput(session.id, (data) => {
      client.emit('output', { sessionId: session.id, data });
    });

    const exitCleanup = this.ptyManager.onSessionExit(session.id, (exitCode) => {
      client.emit('session-exit', { sessionId: session.id, exitCode });
      this.socketSessions.delete(client.id);
    });

    this.outputCleanups.set(session.id, outputCleanup);
    this.exitCleanups.set(session.id, exitCleanup);
  }

  private cleanupSessionListeners(sessionId: string): void {
    this.outputCleanups.get(sessionId)?.();
    this.exitCleanups.get(sessionId)?.();
    this.outputCleanups.delete(sessionId);
    this.exitCleanups.delete(sessionId);
  }
}
