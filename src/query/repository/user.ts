import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { DomainUser } from '../../domain/user';
import { Repository } from 'typeorm';
import { User } from '../../_database/entity/user';
import { IRepositoryUser } from '../usecase/port/user';

@Injectable()
export class QueryRepositoryUser implements IRepositoryUser {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly repositoryUser: Repository<User>,
  ) {}

  /**
   * 全て取得
   */
  public async findAll(): Promise<DomainUser[]> {
    const users = await this.repositoryUser.find();

    return users.map(
      (u: User): DomainUser =>
        new DomainUser(u.id, u.name, u.age, u.email, '', u.role),
    );
  }

  /**
   * idで検索
   */
  public async findById(id: string): Promise<DomainUser> {
    const user = await this.repositoryUser.findOne(id);
    if (!user)
      throw new HttpException('not found user: ' + id, HttpStatus.FORBIDDEN);

    return new DomainUser(
      user.id,
      user.name,
      user.age,
      user.email,
      '',
      user.role,
    );
  }
}
