import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

const providers = [ConfigService];
@Global()
@Module({
  providers,
  imports: [],
  exports: [...providers],
})
export class SharedModule {}
