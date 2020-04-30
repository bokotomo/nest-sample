import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Design {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ nullable: false, length: 30 })
  title: string;
}
