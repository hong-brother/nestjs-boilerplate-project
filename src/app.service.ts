import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppConfig } from './config/app.config';

@Injectable()
export class AppService implements OnApplicationBootstrap {
  constructor(private configService: ConfigService) {}

  getHello(): string {
    return 'Hello World!';
  }

  onApplicationBootstrap(): any {
    // const app = new AppConfig();
    // app.initialize();
  }
}
