import { DomainUser } from '../../domain/user';

export abstract class IRepositoryUser {
  abstract async findAll(): Promise<DomainUser[]>;
  abstract async findById(id: string): Promise<DomainUser>;
  abstract async create(name: string, age: number);
}
