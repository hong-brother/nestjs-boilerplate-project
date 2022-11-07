import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { AppConfig } from '../config/app.config';
import { Injectable } from '@nestjs/common';
import { SystemVersionEntity } from './entities/system-version.entity';

@Injectable()
export class TypeormConfigService implements TypeOrmOptionsFactory {
  constructor(private appConfig: AppConfig) {}
  createTypeOrmOptions(
    connectionName?: string,
  ): Promise<TypeOrmModuleOptions> | TypeOrmModuleOptions {
    return {
      type: this.appConfig.get('database.type'),
      // url: this.appConfig.get('database.url'),
      host: this.appConfig.get('database.host'),
      port: this.appConfig.get('database.port'),
      username: this.appConfig.get('database.username'),
      password: this.appConfig.get('database.password'),
      database: this.appConfig.get('database.name'),
      synchronize: Boolean(this.appConfig.get('database.synchronize')),
      dropSchema: false,
      keepConnectionAlive: true,
      logging: this.appConfig.get('database.logging'),
      // entities: [__dirname + '/src/database/entities/*.entity{.ts,.js}'],
      entities: [SystemVersionEntity],
      migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
      cli: {
        // entitiesDir: 'src',
        migrationsDir: 'src/database/migrations',
        // subscribersDir: 'subscriber',
      },
      // extra: {
      //   // based on https://node-postgres.com/api/pool
      //   // max connection pool size
      //   max: this.appConfig.get('database.maxConnections'),
      //   ssl: this.appConfig.get('database.sslEnabled')
      //     ? {
      //         rejectUnauthorized: this.appConfig.get(
      //           'database.rejectUnauthorized',
      //         ),
      //         ca: this.appConfig.get('database.ca') ?? undefined,
      //         key: this.appConfig.get('database.key') ?? undefined,
      //         cert: this.appConfig.get('database.cert') ?? undefined,
      //       }
      //     : undefined,
      // },
    } as TypeOrmModuleOptions;
  }
}
