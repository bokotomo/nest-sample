import { DomainUser } from '../../domain/user';

export interface IRepositoryUser {
  findAll(): Promise<DomainUser[]>;
  findById(id: string): Promise<DomainUser>;
  create(name: string, age: number);
}
