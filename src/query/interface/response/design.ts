/**
 * デザイン一覧取得
 */
export interface QueryResponseDesignIndex {
  readonly id: string;
  readonly name: string;
}

/**
 * デザイン詳細取得
 */
export interface QueryResponseDesignShow {
  readonly id: string;
}
