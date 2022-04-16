import { DomainDesign } from '../../../domain/design';

export interface IRepositoryDesign {
  findAll(): Promise<DomainDesign[]>;
  findById(id: string): Promise<DomainDesign>;
}
