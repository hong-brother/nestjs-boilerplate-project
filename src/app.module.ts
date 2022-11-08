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
import { SystemVersionEntity } from './database/entities/system-version.entity';

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
        debugger;
        const system = new SystemVersionEntity();
        system.appTitle = 'test';
        system.appVersion = Number(1);
        system.id = 7;
        const dataSource = await new DataSource(options).initialize();
        await dataSource
          .createQueryBuilder()
          .insert()
          .into(SystemVersionEntity)
          .values([system])
          .orUpdate(['app_title', 'app_version'], ['id'])
          .execute();

        debugger;
        return dataSource;
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
