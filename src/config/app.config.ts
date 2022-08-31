import * as fs from 'fs';
import { join } from 'path';
import yaml from 'js-yaml';
import ip from 'ip';
import { Logger } from '@nestjs/common';
import os from 'os';

export class AppConfig {
  private readonly PROTOCOL: string = 'http';
  private ip: string;
  private port: string;
  private config: [];

  constructor() {
    this.load();
    this.initialize();
  }

  static getConfig(): [] {
    return yaml.load(fs.readFileSync(join(__dirname, `config.yml`), 'utf8'));
  }

  private load(): void {
    this.config = yaml.load(
      fs.readFileSync(join(__dirname, `config.yml`), 'utf8'),
    );
    this.ip = ip.address();
    this.port =
      this.config[process.env.NODE_ENV || 'local']['common']['http-port'];
  }

  public getConfig(): [] {
    return this.config;
  }

  public getPort(): string {
    return this.port;
  }

  public getIp(): string {
    return this.ip;
  }

  public getProtocol(): string {
    return this.PROTOCOL;
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
    Logger.log(`server api ip: ${this.ip}`);
    Logger.log(`${this.PROTOCOL}://${this.ip}:${this.port}/document`);
    Logger.log(
      '========================================================================================================',
    );
  }
}
