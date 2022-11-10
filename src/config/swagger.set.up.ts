import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppConfig } from './app.config';
import { readFileSync } from 'fs';
import { join } from 'path';

export class SwaggerSetUp {
  private readonly appConfig: AppConfig;
  private readonly document: DocumentBuilder;

  constructor(appConfig: AppConfig) {
    this.document = new DocumentBuilder();
    this.appConfig = appConfig;
  }

  createDocument() {
    this.document.setTitle(process.env.npm_package_name);
    this.document.setVersion(process.env.npm_package_version);
    this.document.addServer(
      `${this.appConfig.protocol}://localhost:${this.appConfig.port}`,
    );
    this.document.addServer(
      `${this.appConfig.protocol}://${this.appConfig.ip}:${this.appConfig.port}`,
    );
    this.document.setDescription(this.description());
    return this.document;
  }

  setUp(app) {
    const doc = SwaggerModule.createDocument(app, this.document.build());
    SwaggerModule.setup(
      `${this.appConfig.getCommon('prefix')}/document`,
      app,
      doc,
    );
  }

  private description() {
    return readFileSync(join(__dirname, 'docs', 'api-document.md'), 'utf8');
  }
}
