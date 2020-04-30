import { DomainDesign } from '../domain/design';
import { IRepositoryDesign } from './port/design';

export class FindDesignUseCase {
  private readonly repositoryDesign: IRepositoryDesign;

  public constructor(repositoryDesign: IRepositoryDesign) {
    this.repositoryDesign = repositoryDesign;
  }

  public getAll(): Promise<DomainDesign[]> {
    return this.repositoryDesign.findAll();
  }

  public getById(id: string): Promise<DomainDesign> {
    return this.repositoryDesign.findById(id);
  }
}
