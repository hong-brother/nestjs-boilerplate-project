import { SetMetadata } from '@nestjs/common';

export const TYPEORM__REPOSITORY = 'TYPEORM__REPOSITORY';

// eslint-disable-next-line @typescript-eslint/ban-types
export function RepositoryPattern(entity: Function): ClassDecorator {
  return SetMetadata(TYPEORM__REPOSITORY, entity);
}
