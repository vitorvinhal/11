import { Module } from '@nestjs/common';
import { BridgeController } from './bridge.controller';
import { OpsService } from './ops.service';
import { AuditLogService } from './audit-log.service';
import { RateLimitGuard } from './rate-limit.guard';
import { SessionGuard } from '../auth/session.guard';

@Module({
  controllers: [BridgeController],
  providers: [OpsService, AuditLogService, RateLimitGuard, SessionGuard],
})
export class BridgeModule {}