export class DomainUser {
  private readonly _id: string;
  private readonly _name: string;

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;
  }

  public id(): string {
    return this._id;
  }

  public name(): string {
    return this._name;
  }
}
