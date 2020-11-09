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

  public async getAll(): Promise<DomainUser[]> {
    return await this.iRepositoryUser.findAll();
  }

  public async getById(id: string): Promise<DomainUser> {
    return await this.iRepositoryUser.findById(id);
  }
}

@Injectable()
export class UseCaseUserCreate {
  private readonly iRepositoryUser: IRepositoryUser;

  public constructor(repositoryUser: RepositoryUser) {
    this.iRepositoryUser = repositoryUser;
  }

  public async create(domainUser: DomainUser): Promise<void> {
    await this.iRepositoryUser.create(domainUser);
  }
}
