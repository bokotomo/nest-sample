import { Injectable } from '@nestjs/common';
import { DomainUser } from '../../domain/user';
import {
  QueryResponseUserIndex,
  QueryResponseUserShow,
} from '../../interface/response/user';

/**
 * ドメインをレスポンスに変換: ユーザー
 */
@Injectable()
export class QueryResponseUser {
  /**
   * レスポンス：ユーザー一覧取得
   */
  public index(users: DomainUser[]): QueryResponseUserIndex[] {
    return users.map((user: DomainUser): QueryResponseUserIndex => {
      return {
        id: user.id(),
        name: user.name(),
      };
    });
  }

  /**
   * レスポンス：ユーザー詳細取得
   */
  public show(user: DomainUser): QueryResponseUserShow {
    return {
      id: user.id(),
      name: user.name(),
    };
  }
}
