import { Logger as NestLogger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter, NestExpressApplication } from '@nestjs/platform-express';
import { SharedModule } from './shared/shared.module';
import { HttpStatus, UnprocessableEntityException, ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { middleware } from './app.middleware';
import { swaggerConfig } from './config/swagger.config';
import { ConfigService } from '@nestjs/config';

declare const module: any;
async function bootstrap(): Promise<string> {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, new ExpressAdapter(), { cors: true });
  const config = app.select(SharedModule).get(ConfigService);
  // setting
  app.enableCors();
  app.enableVersioning(); // router version 명시 할 수 있도록
  app.setGlobalPrefix('/api');
  app.useGlobalFilters(new HttpExceptionFilter());

  // express Middleware
  middleware(app, config);

  app.set('trust proxy', 1); // client ip를 가져오기 위한
  //global pipes
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
  swaggerConfig(app);

  await app.listen(config.get('HTTP_PORT') || 3000);
  // app.enableShutdownHooks();

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
  return app.getUrl();
}

(async (): Promise<void> => {
  try {
    await bootstrap();
    NestLogger.log(`http://localhost:${process.env.HTTP_PORT || 3000}/api-doc`, 'Bootstrap');
  } catch (error) {
    NestLogger.error(error, 'Bootstrap');
  }
})();
