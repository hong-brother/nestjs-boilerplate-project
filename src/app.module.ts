import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AppConfig } from './config/app.config';
import { SharedModule } from './shared/shared.module';
import { HealthCheckerModule } from './modules/health-checker/health-checker.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormConfigService } from './database/typeorm-config.service';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [AppConfig.getConfig],
      isGlobal: true,
      cache: true,
    }),
    HealthCheckerModule,
    SharedModule,
    TypeOrmModule.forRootAsync({
      useClass: TypeormConfigService,
      dataSourceFactory: async (options) => {
        const dataSource = await new DataSource(options).initialize();
        return dataSource;
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
