import { Injectable, Logger } from '@nestjs/common';
import { HealthCheckerRepository } from './health-checker.repository';

@Injectable()
export class HealthCheckerService {
  private readonly logger = new Logger(HealthCheckerService.name);

  constructor(private healthCheckerRepository: HealthCheckerRepository) {}

  async getVersions() {
    return await this.healthCheckerRepository.find();
  }
}
