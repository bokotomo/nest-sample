import { DomainDesign } from '../../domain/design';

export abstract class IRepositoryDesign {
  abstract async findAll(): Promise<DomainDesign[]>;
  abstract async findById(id: string): Promise<DomainDesign>;
}
