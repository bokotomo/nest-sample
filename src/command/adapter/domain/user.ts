import { Injectable } from '@nestjs/common';
import { DomainUser } from '../../domain/user';
import { RequestUserCreate } from '../../interface/request/user';

/**
 * リクエストをドメインに変換: ユーザー
 */
@Injectable()
export class CommandAdapterDomainUser {
  /**
   * ユーザ追加
   */
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
