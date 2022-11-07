import { Module } from '@nestjs/common';
import { HealthCheckerController } from './health-checker.controller';
import { TerminusModule } from '@nestjs/terminus';
import { HealthCheckerService } from './health-checker.service';
import { TypeOrmRepositoryModule } from '../../database/type-orm-repository.module';
import { HealthCheckerRepository } from './health-checker.repository';

@Module({
  imports: [
    TerminusModule,
    TypeOrmRepositoryModule.forRepositoryPattern([HealthCheckerRepository]),
  ],
  providers: [HealthCheckerService],
  controllers: [HealthCheckerController],
})
export class HealthCheckerModule {}
