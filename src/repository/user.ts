import { Injectable } from '@nestjs/common';
import { DomainUser } from '../domain/user';

@Injectable()
export class RepositoryUser {
  public findAll(): DomainUser {
    return new DomainUser('id', 'name');
  }
}
