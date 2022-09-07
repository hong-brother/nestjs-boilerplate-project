import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfig } from './config/app.config';
import { SwaggerSetUp } from './config/swagger.set.up';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const appConfig = new AppConfig();

  const document = new SwaggerSetUp(appConfig);
  document.createDocument();
  document.setUp(app);

  app.setGlobalPrefix(appConfig.globalPreFix);
  await app.listen(appConfig.port);
}
void bootstrap();
