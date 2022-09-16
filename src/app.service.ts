import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppConfig } from './config/app.config';

@Injectable()
export class AppService implements OnApplicationBootstrap {
  constructor(private appConfig: AppConfig) {}

  getHello(): string {
    return 'Hello World!';
  }

  onApplicationBootstrap(): any {
    this.appConfig.initialize();
  }
}
