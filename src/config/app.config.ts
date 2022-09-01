import * as fs from 'fs';
import { join } from 'path';
import yaml from 'js-yaml';
import ip from 'ip';
import { Logger } from '@nestjs/common';
import os from 'os';

export class AppConfig {
  private readonly _protocol: string = 'http';
  private _config: [];
  private _ip: string;
  private _port: string;
  private _group: string;
  private _project: string;

  constructor() {
    this.load();
    this.initialize();
  }

  static getConfig(): [] {
    return yaml.load(fs.readFileSync(join(__dirname, `config.yml`), 'utf8'));
  }

  private load(): void {
    this._config = yaml.load(
      fs.readFileSync(join(__dirname, `config.yml`), 'utf8'),
    );
    this._ip = ip.address();
    this._port =
      this._config[process.env.NODE_ENV || 'local']['common']['http-port'];
  }

  get protocol(): string {
    return this._protocol;
  }

  get config(): [] {
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

  private initialize(): void {
    Logger.log('');
    Logger.log(
      '========================================================================================================',
    );
    Logger.log(`node version: ${process.version}`);
    Logger.log(`node env: ${process.env.NODE_ENV || 'local'}`);
    Logger.log(`cpu core: ${os.cpus().length}`);
    Logger.log(`host platform: ${process.platform}`);
    Logger.log(`host architecture: ${process.arch}`);
    Logger.log(`hostname: ${os.hostname()}`);
    Logger.log(`user home: ${os.userInfo().username}`);
    Logger.log(`user home directory: ${os.userInfo().homedir}`);
    Logger.log(`server api ip: ${this._ip}`);
    Logger.log(`${this._protocol}://${this._ip}:${this._port}/document`);
    Logger.log(
      '========================================================================================================',
    );
  }
}
