import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('system_version')
export class SystemVersionEntity {
  @PrimaryColumn({ name: 'id' })
  id: number;

  @Column({
    name: 'app_version',
    type: 'varchar',
    length: 10,
    comment: 'app version',
  })
  appVersion: string;

  @Column({
    name: 'app_title',
    type: 'varchar',
    length: 50,
    comment: 'app title',
  })
  appTitle: string;
}
