import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('system_version')
export class SystemVersionEntity {
  @PrimaryGeneratedColumn(`uuid`, { name: 'id' })
  id: string;

  @Column({
    name: 'app_version',
    type: 'integer',
    comment: 'app version',
  })
  appVersion: number;

  @Column({
    name: 'app_title',
    type: 'varchar',
    length: 10,
    comment: 'app title',
  })
  appTitle: string;
}
