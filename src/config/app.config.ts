import { readFileSync } from 'fs';
import { join } from 'path';
import yaml from 'js-yaml';
import ip from 'ip';
import { Logger } from '@nestjs/common';
import os from 'os';

export class AppConfig {
  private readonly logger = new Logger(AppConfig.name);
  private readonly _protocol: string = 'http';
  private _config: Record<string, any>;
  private _ip: string;
  private _port: string;
  private _group: string;
  private _project: string;
  private _globalPrefix = '/api';
  private static YAML_CONFIG_FILENAME = 'config.yaml';

  constructor() {
    this.load();
    this.initialize();
  }

  static getConfig() {
    console.log(join(__dirname, '..', '..', 'config', 'config.yml'));
    return yaml.load(
      readFileSync(join(__dirname, '..', '..', 'config', 'config.yml'), 'utf8'),
    ) as Record<string, any>;
  }

  private load(): void {
    this._config = yaml.load(
      readFileSync(join(__dirname, '..', '..', 'config', 'config.yml'), 'utf8'),
    ) as Record<string, any>;
    this._ip = ip.address();
    this._port =
      this._config[process.env.NODE_ENV || 'local']['common']['http-port'];
  }

  get protocol(): string {
    return this._protocol;
  }

  get config(): Record<string, any> {
    return this._config;
  }

  get ip(): string {
    return this._ip;
  }

  get port(): string {
    return this._port;
  }

  get group(): string {
    return this._group;
  }

  get project(): string {
    return this._project;
  }

  get globalPreFix(): string {
    return this._globalPrefix;
  }

  private log(): void {
    this.logger.log('~~~~');
  }

  private initialize(): void {
    this.logger.log('');
    this.logger.log(
      '========================================================================================================',
    );
    this.logger.log(`node version: ${process.version}`);
    this.logger.log(`node env: ${process.env.NODE_ENV || 'local'}`);
    this.logger.log(`cpu core: ${os.cpus().length}`);
    this.logger.log(`host platform: ${process.platform}`);
    this.logger.log(`host architecture: ${process.arch}`);
    this.logger.log(`hostname: ${os.hostname()}`);
    this.logger.log(`user home: ${os.userInfo().username}`);
    this.logger.log(`user home directory: ${os.userInfo().homedir}`);
    this.logger.log(`server api ip: ${this._ip}`);
    this.logger.log(
      `${this._protocol}://${this._ip}:${this._port}${this.globalPreFix}/document`,
    );
    this.logger.log(
      '========================================================================================================',
    );
  }
}
