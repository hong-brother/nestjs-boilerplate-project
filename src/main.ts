import { NestFactory } from '@nestjs/core';
import type { NestExpressApplication } from '@nestjs/platform-express';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { AppConfig } from './config/app.config';
import { SwaggerSetUp } from './config/swagger.set.up';
import compression from 'compression';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { SharedModule } from './shared/shared.module';
import { ConfigService } from '@nestjs/config';

export async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter(),
    { cors: true },
  );
  // get config
  // https://ru-nestjs-docs.netlify.app/application-context
  const configService = app.select(SharedModule).get(AppConfig);

  // setting
  app.enableVersioning(); // router version 명시 할 수 있도록
  app.use(compression()); // http 압축
  // app.use(helmet()); //노드 보안 모듈 기본 설정
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMswindowMs: 15 * 1999 * 60
    }), // 단위 시간 동안 하나의 ip 주소에서 들어오는 request의 숫자를 제한할 수 있는 간단한 모듈이다.
  );
  app.setGlobalPrefix(configService.globalPreFix);

  const document = new SwaggerSetUp(configService);
  document.createDocument();
  document.setUp(app);

  await app.listen(configService.port);

  return app;
}
void bootstrap();
