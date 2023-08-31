import { Module } from '@nestjs/common';
import { HealthCheckerController } from './health-checker.controller';
import { TerminusModule } from '@nestjs/terminus';

@Module({
  imports: [TerminusModule],
  controllers: [HealthCheckerController],
})
export class HealthCheckerModule {}
