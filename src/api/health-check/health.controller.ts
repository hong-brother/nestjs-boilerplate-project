import { Controller, Get } from '@nestjs/common';
import { HealthCheck, HealthCheckService, HttpHealthIndicator } from '@nestjs/terminus';
import { ApiTags } from '@nestjs/swagger';
import { HealthService } from './health.service';

@ApiTags('health-check')
@Controller('health')
export class HealthController {
  constructor(
    private healthCheck: HealthCheckService,
    private healthCheckerService: HealthService,
    private http: HttpHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  async check() {
    return this.healthCheck.check([() => this.http.pingCheck('nestjs', 'https://docs.nestjs.com')]);
  }

  @Get('/system-version')
  async getSystemVersion() {
    // return await this.healthCheckerService.getVersions();
  }
}
