import { DomainUser } from '../domain/user';
import { IRepositoryUser } from './port/user';

export class UseCaseUserFind {
  private readonly repositoryUser: IRepositoryUser;

  public constructor(repositoryUser: IRepositoryUser) {
    this.repositoryUser = repositoryUser;
  }

  public getAll(): Promise<DomainUser[]> {
    return this.repositoryUser.findAll();
  }

  public getById(id: string): Promise<DomainUser> {
    return this.repositoryUser.findById(id);
  }
}

export class UseCaseUserCreate {
  private readonly repositoryUser: IRepositoryUser;

  public constructor(repositoryUser: IRepositoryUser) {
    this.repositoryUser = repositoryUser;
  }

  public create(name: string, age: number) {
    return this.repositoryUser.create(name, age);
  }
}
