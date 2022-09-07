import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfig } from './config/app.config';
import { SwaggerDocumentConfig } from './config/swagger.document.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const appConfig = new AppConfig();

  const document = new SwaggerDocumentConfig(appConfig);
  document.createDocument();
  document.setUp(app);

  app.setGlobalPrefix('/api');
  await app.listen(3000);
}
bootstrap().then(() => {});
