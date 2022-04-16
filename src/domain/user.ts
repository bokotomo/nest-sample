/**
 * ドメイン: ユーザー
 */
export class DomainUser {
  constructor(
    private readonly _id: string = '',
    private readonly _name: string = '',
    private readonly _age: number = 0,
    private readonly _email: string = '',
    private readonly _password: string = '',
    private readonly _role: string = '',
  ) {}

  /** ユーザーID */
  public id(): string {
    return this._id;
  }

  /** ユーザー名 */
  public name(): string {
    return this._name;
  }

  /** 年齢 */
  public age(): number {
    return this._age;
  }

  /** メール */
  public email(): string {
    return this._email;
  }

  /** パスワード */
  public password(): string {
    return this._password;
  }

  /** 役割 */
  public role(): string {
    return this._role;
  }
}
