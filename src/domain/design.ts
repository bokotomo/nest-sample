/**
 * ドメイン: デザイン
 */
export class DomainDesign {
  constructor(
    private readonly _id: string = '',
    private readonly _title: string = '',
  ) {}

  /** デザインID */
  public id(): string {
    return this._id;
  }

  /** タイトル */
  public title(): string {
    return this._title;
  }
}
