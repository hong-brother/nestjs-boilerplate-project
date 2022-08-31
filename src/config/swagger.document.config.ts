import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { OpenAPIObject } from '@nestjs/swagger/dist/interfaces';
import { AppConfig } from './app.config';

export class SwaggerDocumentConfig {
  private readonly appConfig: AppConfig;
  private readonly document: DocumentBuilder;
  private title: string;
  private version: number;

  constructor(appConfig: AppConfig) {
    this.document = new DocumentBuilder();
    this.appConfig = appConfig;
  }
  createDocument(): DocumentBuilder {
    this.document.setTitle('cloud-node-drive');
    this.document.addServer(
      `${this.appConfig.getProtocol()}://localhost:${this.appConfig.getPort()}`,
    );
    this.document.setBasePath('api');
    this.document.addTag('auth');
    return this.document;
  }

  setUp(app) {
    const doc = SwaggerModule.createDocument(app, this.document.build());
    SwaggerModule.setup('api-doc', app, doc);
  }
}
