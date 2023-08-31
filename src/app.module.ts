import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppConfig } from './config/app.config';
import { SharedModule } from './shared/shared.module';
import { HealthCheckerModule } from './api/health-checker/health-checker.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: '.env',
    }),
    HealthCheckerModule,
    SharedModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
