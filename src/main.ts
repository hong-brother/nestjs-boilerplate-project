import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfig } from './config/app.config';
import { SwaggerDocumentConfig } from './config/swagger.document.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const appConfig = new AppConfig();
  new SwaggerDocumentConfig(appConfig).setUp(app);
  await app.listen(3000);
  app.setGlobalPrefix('/api');
}
bootstrap();
