import { Repository } from 'typeorm';
import { SystemVersionEntity } from '../../database/entities/system-version.entity';
import { RepositoryPattern } from '../../database/repository-pattern.decorator';

@RepositoryPattern(SystemVersionEntity)
export class HealthCheckerRepository extends Repository<SystemVersionEntity> {}
