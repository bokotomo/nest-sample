import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ nullable: false, length: 30 })
  name: string;

  @Column({ type: 'int', nullable: false, unsigned: true })
  age: number;

  @Column({ nullable: false, length: 50 })
  email: string;

  @Column({ nullable: false, length: 50 })
  password: string;

  @Column({ nullable: false, length: 10 })
  role: string;
}
