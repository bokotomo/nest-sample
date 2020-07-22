import {
  Injectable,
  Inject,
  HttpException,
  HttpStatus,
  UnauthorizedException,
} from '@nestjs/common';
import { DomainUser } from '../domain/user';
import { Repository } from 'typeorm';
import { User } from '../entity/user';
import { IRepositoryUser } from '../usecase/port/user';

@Injectable()
export class RepositoryUser implements IRepositoryUser {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly repositoryUser: Repository<User>,
  ) {}

  private createHash(v: string): string {
    // TODO: Hash
    return v;
  }

  public async create(domainUser: DomainUser) {
    const user = new User();
    user.name = domainUser.name();
    user.age = domainUser.age();
    user.email = domainUser.email();
    user.password = this.createHash(domainUser.password());
    user.role = domainUser.role();
    await this.repositoryUser.save(user);
  }

  public async findAll(): Promise<DomainUser[]> {
    const users = await this.repositoryUser.find();
    return users.map(
      user =>
        new DomainUser(user.id, user.name, user.age, user.email, '', user.role),
    );
  }

  public async findById(id: string): Promise<DomainUser> {
    const user = await this.repositoryUser.findOne(id);
    // errはreturnで返した方が良さそうだけど、迷う
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

  public async login(email: string, password: string): Promise<DomainUser> {
    const user = await this.repositoryUser.findOne({
      where: { email, password },
    });
    // [TODO]: 良くはない
    if (!user) throw new UnauthorizedException();
    return new DomainUser(user.id, '', 0, user.email, '', user.role);
  }
}
