import { HttpModule } from '@nestjs/axios';
import { Global, Module } from '@nestjs/common';
import { GeneratorService } from './services/generator.service';
import { ConfigService } from '@nestjs/config';
import { AppConfig } from '../config/app.config';

const providers = [AppConfig, GeneratorService];
// @Global()
@Module({
  providers,
  imports: [HttpModule],
  exports: [...providers, HttpModule],
})
export class SharedModule {}
