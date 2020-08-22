import { Injectable } from '@nestjs/common';
import { DomainDesign } from '../domain/design';
import { RepositoryDesign } from '../repository/design';
import { IRepositoryDesign } from './port/design';

@Injectable()
export class UseCaseDesignFind {
  private readonly iRepositoryDesign: IRepositoryDesign;

  constructor(repositoryDesign: RepositoryDesign) {
    this.iRepositoryDesign = repositoryDesign;
  }

  public async getAll(): Promise<DomainDesign[]> {
    return await this.iRepositoryDesign.findAll();
  }

  public async getById(id: string): Promise<DomainDesign> {
    return await this.iRepositoryDesign.findById(id);
  }
}

@Injectable()
export class UseCaseDesignCreate {
  private readonly iRepositoryDesign: IRepositoryDesign;

  constructor(repositoryDesign: RepositoryDesign) {
    this.iRepositoryDesign = repositoryDesign;
  }

  public create(title: string): void {
    this.iRepositoryDesign.create(title);
  }
}
