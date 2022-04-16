export interface ICommandRepositoryDesign {
  create(title: string): Promise<void>;
}
