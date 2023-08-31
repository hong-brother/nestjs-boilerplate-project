import { INestApplication } from '@nestjs/common';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import { ConfigService } from '@nestjs/config';
import helmet from 'helmet';

export function middleware(app: INestApplication, config: ConfigService): INestApplication {
  app.use(compression());
  app.use(cookieParser());

  app.use(
    helmet({
      contentSecurityPolicy: process.env.NODE_ENV === 'production' ? undefined : false,
      crossOriginEmbedderPolicy: process.env.NODE_ENV === 'production' ? undefined : false,
    }),
  );
  app.enableCors();
  return app;
}
