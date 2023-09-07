import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { TerminusModule } from '@nestjs/terminus';
import { HealthService } from './health.service';
import { HttpModule } from '@nestjs/axios';
import { PrismaModule } from '../../common/providers/database/postgresql/prisma.module';
import { TweetsRepository } from '../../common/repositories/tweets.repository';

@Module({
  imports: [TerminusModule, HttpModule, PrismaModule],
  providers: [HealthService, TweetsRepository],
  controllers: [HealthController],
})
export class HealthModule {}
