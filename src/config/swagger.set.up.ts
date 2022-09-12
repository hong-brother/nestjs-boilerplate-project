import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { AppConfig } from './app.config';

export class SwaggerSetUp {
  private readonly appConfig: AppConfig;
  private readonly document: DocumentBuilder;

  constructor(appConfig: AppConfig) {
    this.document = new DocumentBuilder();
    this.appConfig = appConfig;
  }

  createDocument() {
    // this.document.setTitle(this.appConfig.get('project'));
    // this.document.addServer();
    this.document.setDescription(this.description());
    return this.document;
  }

  setUp(app) {
    const doc = SwaggerModule.createDocument(app, this.document.build());
    // SwaggerModule.setup(
    //   `${this.appConfig.get('globalPrefix')}/document`,
    //   app,
    //   doc,
    // );
  }

  private description() {
    return `### boilerplate`;
  }
}
