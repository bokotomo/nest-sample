export class DomainDesign {
  private readonly _id: string;
  private readonly _title: string;

  constructor(id: string, title: string) {
    this._id = id;
    this._title = title;
  }

  public id(): string {
    return this._id;
  }

  public title(): string {
    return this._title;
  }
}
