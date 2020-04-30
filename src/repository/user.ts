import { Injectable, Inject } from '@nestjs/common';
import { DomainUser } from '../domain/user';
import { Repository } from 'typeorm';
import { User } from '../entity/user';
import { IRepositoryUser } from '../usecase/port/user';

@Injectable()
export class RepositoryUser implements IRepositoryUser {
  constructor(
    @Inject('USER_REPOSITORY')
    private repositoryUser: Repository<User>,
  ) {}

  public async create(name: string, age: number) {
    const user = new User();
    // user.id = 'unique_id';
    user.name = name;
    user.age = age;
    await this.repositoryUser.save(user);
  }

  public async findAll(): Promise<DomainUser[]> {
    const users = (await this.repositoryUser.find()) as User[];
    return users.map(user => new DomainUser(user.id, user.name));
  }

  public async findById(id: string): Promise<DomainUser> {
    const user = (await this.repositoryUser.findOne(id)) as User;
    return new DomainUser(user.id, user.name);
  }
}
