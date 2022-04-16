import { Injectable, Inject, UnauthorizedException } from '@nestjs/common';
import { DomainUser } from '../../domain/user';
import { Repository } from 'typeorm';
import { User } from '../../_database/entity/user';
import { ICommandRepositoryUser } from '../usecase/port/user';

/**
 * リポジトリ: ユーザー
 */
@Injectable()
export class CommandRepositoryUser implements ICommandRepositoryUser {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly repositoryUser: Repository<User>,
  ) {}

  private createHash(v: string): string {
    // TODO: Hash
    return v;
  }

  /**
   * 追加する
   */
  public async create(domainUser: DomainUser): Promise<void> {
    const user = new User();
    user.name = domainUser.name();
    user.age = domainUser.age();
    user.email = domainUser.email();
    user.password = this.createHash(domainUser.password());
    user.role = domainUser.role();
    await this.repositoryUser.save(user);
  }

  /**
   * loginチェック
   */
  public async login(email: string, password: string): Promise<DomainUser> {
    const user = await this.repositoryUser.findOne({
      where: {
        email,
        password,
      },
    });
    if (!user) throw new UnauthorizedException();

    return new DomainUser(user.id, '', 0, user.email, '', user.role);
  }
}
