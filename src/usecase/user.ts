import { Injectable } from '@nestjs/common';
import { DomainUser } from '../domain/user';
import { RepositoryUser } from '../repository/user';
import { IRepositoryUser } from './port/user';

@Injectable()
export class UseCaseUserFind {
  private readonly iRepositoryUser: IRepositoryUser;

  public constructor(repositoryUser: RepositoryUser) {
    this.iRepositoryUser = repositoryUser;
  }

  public getAll(): Promise<DomainUser[]> {
    return this.iRepositoryUser.findAll();
  }

  public getById(id: string): Promise<DomainUser> {
    return this.iRepositoryUser.findById(id);
  }
}

@Injectable()
export class UseCaseUserCreate {
  private readonly iRepositoryUser: IRepositoryUser;

  public constructor(repositoryUser: RepositoryUser) {
    this.iRepositoryUser = repositoryUser;
  }

  public create(domainUser: DomainUser) {
    return this.iRepositoryUser.create(domainUser);
  }
}
