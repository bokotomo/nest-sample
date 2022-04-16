import { Injectable } from '@nestjs/common';
import { DomainUser } from '../domain/user';
import { CommandRepositoryUser } from '../repository/user';
import { ICommandRepositoryUser } from './port/user';

/**
 * ユースケース: ユーザー
 */
@Injectable()
export class CommandUseCaseUserCreate {
  private readonly iRepositoryUser: ICommandRepositoryUser;

  public constructor(repositoryUser: CommandRepositoryUser) {
    this.iRepositoryUser = repositoryUser;
  }

  public async create(domainUser: DomainUser): Promise<void> {
    await this.iRepositoryUser.create(domainUser);
  }
}
