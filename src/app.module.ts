import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SharedModule } from './shared/shared.module';
import { HealthModule } from './api/health-check/health.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: '.env',
    }),
    HealthModule,
    SharedModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
