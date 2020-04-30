import { Injectable } from '@nestjs/common';
import { DomainUser } from '../../domain/user';

@Injectable()
export class ResponseUser {
  public index(users: DomainUser[]): object {
    return users.map(user => {
      return { id: user.id(), name: user.name() };
    });
  }

  public show(user: DomainUser): object {
    return { id: user.id(), name: user.name() };
  }
}
