import { Injectable } from '@nestjs/common';
import { DomainDesign } from '../../../domain/design';
import {
  QueryResponseDesignIndex,
  QueryResponseDesignShow,
} from '../../interface/response/design';

/**
 * ドメインをレスポンスに変換: デザイン
 */
@Injectable()
export class QueryResponseDesign {
  /**
   * レスポンス：デザイン一覧取得
   */
  public index(designs: DomainDesign[]): QueryResponseDesignIndex[] {
    return designs.map((design: DomainDesign): QueryResponseDesignIndex => {
      return {
        id: design.id(),
        name: design.title(),
      };
    });
  }

  /**
   * レスポンス：デザイン詳細取得
   */
  public show(design: DomainDesign): QueryResponseDesignShow {
    return {
      id: design.id(),
    };
  }
}
