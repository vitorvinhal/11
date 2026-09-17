import { Module } from '@nestjs/common';
import { DeployController } from './deploy.controller';
import { DeployBrokerService } from './deploy-broker.service';
import { SessionGuard } from '../auth/session.guard';

@Module({
  controllers: [DeployController],
  providers: [DeployBrokerService, SessionGuard],
})
export class DeployModule {}