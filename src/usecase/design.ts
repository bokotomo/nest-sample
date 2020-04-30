import { Injectable } from '@nestjs/common';
import { DomainDesign } from '../domain/design';
import { RepositoryDesign } from '../repository/design';
import { IRepositoryDesign } from './port/design';

@Injectable()
export class UseCaseDesignFind {
  private readonly iRepositoryDesign: IRepositoryDesign;

  constructor(private readonly repositoryDesign: RepositoryDesign) {
    this.iRepositoryDesign = repositoryDesign;
  }

  public getAll(): Promise<DomainDesign[]> {
    return this.iRepositoryDesign.findAll();
  }

  public getById(id: string): Promise<DomainDesign> {
    return this.iRepositoryDesign.findById(id);
  }
}

@Injectable()
export class UseCaseDesignCreate {
  private readonly iRepositoryDesign: IRepositoryDesign;

  constructor(private readonly repositoryDesign: RepositoryDesign) {
    this.iRepositoryDesign = repositoryDesign;
  }

  public create(title: string) {
    return this.iRepositoryDesign.create(title);
  }
}
