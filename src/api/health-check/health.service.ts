import { HealthCheckService as checkService, HttpHealthIndicator, HealthCheckResult } from '@nestjs/terminus';
import { ConfigService } from '@nestjs/config';
export class HealthService {
  constructor(
    private readonly health: checkService,
    private readonly http: HttpHealthIndicator,
    private readonly config: ConfigService,
  ) {}

  pingPong(): Promise<HealthCheckResult> {
    return this.health.check([
      () => this.http.pingCheck('nestjs', `http://localhost:${this.config.get('HTTP_PORT') || 3000}/api-doc`),
    ]);
  }
}
