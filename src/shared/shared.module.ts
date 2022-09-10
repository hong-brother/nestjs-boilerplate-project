import { HttpModule } from '@nestjs/axios';
import { Global, Module } from '@nestjs/common';
import { GeneratorService } from './services/generator.service';

const providers = [GeneratorService];
// @Global()
@Module({
  providers,
  imports: [HttpModule],
  exports: [...providers, HttpModule],
})
export class SharedModule {}
