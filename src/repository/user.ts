import { Injectable, Inject } from '@nestjs/common';
import { DomainUser } from '../domain/user';
import { Repository } from 'typeorm';
import { Users } from '../entity/user';

@Injectable()
export class RepositoryUser {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<Users>,
  ) {}

  public async findAll(): Promise<DomainUser> {
    const data = this.userRepository.find();
    console.log(data);
    return new DomainUser('id', 'name');
  }
}
