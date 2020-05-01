export class DomainUser {
  constructor(
    private readonly _id: string,
    private readonly _name: string,
    private readonly _age: number,
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
}
