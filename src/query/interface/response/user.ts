/**
 * ユーザー一覧取得
 */
export interface QueryResponseUserIndex {
  readonly id: string;
  readonly name: string;
}

/**
 * ユーザー詳細取得
 */
export interface QueryResponseUserShow {
  readonly id: string;
  readonly name: string;
}
