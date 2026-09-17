import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { BridgeModule } from './bridge/bridge.module';
import { StoreModule } from './store/store.module';
import { DeployModule } from './deploy/deploy.module';
import { HealthController } from './health/health.controller';

@Module({
  imports: [AuthModule, BridgeModule, StoreModule, DeployModule],
  controllers: [HealthController],
  providers: [],
})
export class AppModule {}