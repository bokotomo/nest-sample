import { Injectable } from '@nestjs/common';
import { DomainUser } from '../../domain/user';
import { RequestUserCreate } from '../../request/user';

// 一応追加したが、大体の場合ここまではやらなくてもおk
@Injectable()
export class AdapterDomainUser {
  public create(body: RequestUserCreate): DomainUser {
    return new DomainUser(
      '',
      body.name,
      body.age,
      body.email,
      body.password,
      body.role,
    );
  }
}
