import { NestFactory, Reflector } from '@nestjs/core';
import type { NestExpressApplication } from '@nestjs/platform-express';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { AppConfig } from './config/app.config';
import { SwaggerSetUp } from './config/swagger.set.up';
import compression from 'compression';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { SharedModule } from './shared/shared.module';
import {
  HttpStatus,
  UnprocessableEntityException,
  ValidationPipe,
} from '@nestjs/common';

function disableUpgradeInsecureRequests(app, helmet) {
  const defaultDirectives = helmet.contentSecurityPolicy.getDefaultDirectives();
  delete defaultDirectives['upgrade-insecure-requests'];

  app.use(
    helmet.contentSecurityPolicy({
      directives: {
        ...defaultDirectives,
      },
    }),
  );
}

export async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter(),
    { cors: true },
  );
  // get config
  // https://ru-nestjs-docs.netlify.app/application-context
  const appConfig = app.select(SharedModule).get(AppConfig);

  // setting
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*.*.*.*'); // update to match the domain you will make the request from
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept',
    );
    next();
  });
  app.enableVersioning(); // router version 명시 할 수 있도록
  app.setGlobalPrefix(appConfig.getCommon('prefix'));
  app.use(compression()); // http 압축
  app.use(helmet()); //노드 보안 모듈 기본 설정
  disableUpgradeInsecureRequests(app, helmet);
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMswindowMs: 15 * 1999 * 60
    }), // 단위 시간 동안 하나의 ip 주소에서 들어오는 request의 숫자를 제한할 수 있는 간단한 모듈이다.
  );

  // globalFilters
  // const reflector = app.get(Reflector);
  // app.useGlobalFilters(
  //   new HttpExceptionFilter(reflector),
  //   new QueryFailedFilter(reflector),
  // );

  // useGlobalInterceptors
  // app.useGlobalInterceptors(
  //   new ClassSerializerInterceptor(reflector),
  //   new TranslationInterceptor(
  //     app.select(SharedModule).get(TranslationService),
  //   ),
  // );

  // global Pipes
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      transform: true, // auto-transformation 기능 활성화, DTO에 정의된 부분을 자동으로 적용하기 위해서는 true 이여야 한다.
      dismissDefaultMessages: true,
      exceptionFactory: (errors) => new UnprocessableEntityException(errors),
    }),
  );

  // swagger
  const document = new SwaggerSetUp(appConfig);
  document.createDocument();
  document.setUp(app);

  await app.listen(appConfig.port);

  app.enableShutdownHooks();

  return app;
}
void bootstrap();
