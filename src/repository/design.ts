import { Injectable } from '@nestjs/common';
import { DomainDesign } from '../domain/design';
import { IRepositoryDesign } from '../usecase/port/design';

@Injectable()
export class RepositoryDesign extends IRepositoryDesign {
  public async findAll(): Promise<DomainDesign[]> {
    return [new DomainDesign('id', 'name')];
  }

  public async findById(id: string): Promise<DomainDesign> {
    return new DomainDesign(id, 'name');
  }
}
