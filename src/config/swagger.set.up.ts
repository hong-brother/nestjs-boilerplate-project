import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { OpenAPIObject } from '@nestjs/swagger/dist/interfaces';
import { AppConfig } from './app.config';

export class SwaggerSetUp {
  private readonly appConfig: AppConfig;
  private readonly document: DocumentBuilder;

  constructor(appConfig: AppConfig) {
    this.document = new DocumentBuilder();
    this.appConfig = appConfig;
  }

  createDocument() {
    this.document.setTitle(this.appConfig.project);
    // this.document.addServer();
    this.document.setDescription(this.description());
    return this.document;
  }

  setUp(app) {
    const doc = SwaggerModule.createDocument(app, this.document.build());
    SwaggerModule.setup(`${this.appConfig.globalPreFix}/document`, app, doc);
  }

  private description() {
    return `### boilerplate`;
  }
}