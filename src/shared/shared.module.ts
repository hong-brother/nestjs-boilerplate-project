import { HttpModule } from '@nestjs/axios';
import { Global, Module } from '@nestjs/common';
import { GeneratorService } from '../common/providers/generator.service';
import { AppConfig } from '../config/app.config';

const providers = [AppConfig, GeneratorService];
@Global()
@Module({
  providers,
  imports: [HttpModule],
  exports: [...providers, HttpModule],
})
export class SharedModule {}
