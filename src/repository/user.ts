import { Injectable, Inject } from '@nestjs/common';
import { DomainUser } from '../domain/user';
import { Repository } from 'typeorm';
import { User } from '../entity/user';
import { IRepositoryUser } from '../usecase/port/user';

@Injectable()
export class RepositoryUser extends IRepositoryUser {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {
    super();
  }

  public async create(name: string, age: number) {
    const user = new User();
    // user.id = 'id';
    user.name = name;
    user.age = age;
    await this.userRepository.save(user);
  }

  public async findAll(): Promise<DomainUser[]> {
    const data = await this.userRepository.find();
    console.log(data);
    return [new DomainUser('id', 'name')];
  }

  public async findById(id: string): Promise<DomainUser> {
    return new DomainUser(id, 'name');
  }
}
