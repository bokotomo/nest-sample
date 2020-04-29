import { Injectable } from '@nestjs/common';
import { RepositoryUser } from '../repository/user';
import { DomainUser } from '../domain/user';

@Injectable()
export class ServiceUser {
  constructor(private readonly repositoryUser: RepositoryUser) {}

  public async index(): Promise<DomainUser> {
    return this.repositoryUser.findAll();
  }
}
