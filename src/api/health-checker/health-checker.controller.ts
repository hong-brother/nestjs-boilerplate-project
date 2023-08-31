import { Controller, Get } from '@nestjs/common';
import {
  HealthCheck,
  HealthCheckService,
  HttpHealthIndicator,
} from '@nestjs/terminus';
import { ApiTags } from '@nestjs/swagger';
import { HealthCheckerService } from './health-checker.service';

@ApiTags('health-checker')
@Controller('health')
export class HealthCheckerController {
  constructor(
    private healthCheck: HealthCheckService,
    private healthCheckerService: HealthCheckerService,
    private http: HttpHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  async check() {
    return this.healthCheck.check([
      () => this.http.pingCheck('nestjs', 'https://docs.nestjs.com'),
    ]);
  }

  @Get('/system-version')
  async getSystemVersion() {
    return await this.healthCheckerService.getVersions();
  }
}
