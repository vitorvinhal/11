import { Module } from '@nestjs/common';
import { PtyManagerService } from './pty-manager.service';
import { TerminalGateway } from './terminal.gateway';

@Module({
  providers: [PtyManagerService, TerminalGateway],
  exports: [PtyManagerService],
})
export class TerminalModule {}
