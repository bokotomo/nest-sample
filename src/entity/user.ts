import { Entity, Column } from 'typeorm';

@Entity()
export class Users {
  @Column()
  id: string;
  @Column()
  name: string;
}
