import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { DomainUser } from '../domain/user';
import { Repository } from 'typeorm';
import { User } from '../entity/user';
import { IRepositoryUser } from '../usecase/port/user';

@Injectable()
export class RepositoryUser implements IRepositoryUser {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly repositoryUser: Repository<User>,
  ) {}

  public async create(domainUser: DomainUser) {
    const user = new User();
    // user.id = 'unique_id';
    user.name = domainUser.name();
    user.age = domainUser.age();
    await this.repositoryUser.save(user);
  }

  public async findAll(): Promise<DomainUser[]> {
    const users = await this.repositoryUser.find();
    return users.map(user => new DomainUser(user.id, user.name, user.age));
  }

  public async findById(id: string): Promise<DomainUser> {
    const user = await this.repositoryUser.findOne(id);
    // errはreturnで返した方が良さそうだけど、迷う
    if (!user)
      throw new HttpException('not found user: ' + id, HttpStatus.FORBIDDEN);
    return new DomainUser(user.id, user.name, user.age);
  }
}
