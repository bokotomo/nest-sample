export class DomainDesign {
  constructor(private readonly _id: string, private readonly _title: string) {}

  public id(): string {
    return this._id;
  }

  public title(): string {
    return this._title;
  }
}
