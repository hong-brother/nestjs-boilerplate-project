import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AppConfig } from './config/app.config';
import { SharedModule } from './shared/shared.module';
import { HealthCheckerModule } from './modules/health-checker/health-checker.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [AppConfig.getConfig],
      isGlobal: true,
      cache: true,
    }),
    HealthCheckerModule,
    SharedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
