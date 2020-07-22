export class DomainUser {
  constructor(
    private readonly _id: string,
    private readonly _name: string,
    private readonly _age: number,
    private readonly _email: string,
    private readonly _password: string,
    private readonly _role: string,
  ) {}

  public id(): string {
    return this._id;
  }

  public name(): string {
    return this._name;
  }

  public age(): number {
    return this._age;
  }

  public email(): string {
    return this._email;
  }

  public password(): string {
    return this._password;
  }

  public role(): string {
    return this._role;
  }
}
