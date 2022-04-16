import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

/**
 * デザイン
 */
@Entity()
export class Design {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ nullable: false, length: 30 })
  title: string;
}
