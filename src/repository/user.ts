import { Injectable, Inject } from '@nestjs/common';
import { DomainUser } from '../domain/user';
import { Repository } from 'typeorm';
import { User } from '../entity/user';

@Injectable()
export class RepositoryUser {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  public async findAll(): Promise<DomainUser> {
    const data = await this.userRepository.find();
    console.log(data);
    return new DomainUser('id', 'name');
  }
}
