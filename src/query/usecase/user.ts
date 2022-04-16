import { Injectable } from '@nestjs/common';
import { DomainUser } from '../../domain/user';
import { QueryRepositoryUser } from '../repository/user';
import { IRepositoryUser } from './port/user';

/**
 * ユースケース: ユーザー
 */
@Injectable()
export class QueryUseCaseUserFind {
  private readonly iRepositoryUser: IRepositoryUser;

  public constructor(repositoryUser: QueryRepositoryUser) {
    this.iRepositoryUser = repositoryUser;
  }

  public async getAll(): Promise<DomainUser[]> {
    return await this.iRepositoryUser.findAll();
  }

  public async getById(id: string): Promise<DomainUser> {
    return await this.iRepositoryUser.findById(id);
  }
}
