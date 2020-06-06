import { Injectable } from '@nestjs/common';
import { DomainUser } from '../../domain/user';
import { RequestCreate } from './request';

// AdapterDomainUser 一応追加したが大体の場合ここまではやらなくてもおk
@Injectable()
export class AdapterDomainUser {
  public create(body: RequestCreate): DomainUser {
    return new DomainUser('', body.name, body.age);
  }
}

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
