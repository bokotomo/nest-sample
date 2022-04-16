import { Injectable } from '@nestjs/common';
import { DomainDesign } from '../../domain/design';
import { QueryRepositoryDesign } from '../repository/design';
import { IRepositoryDesign } from './port/design';

/**
 * ユースケース: デザイン
 */
@Injectable()
export class QueryUseCaseDesignFind {
  private readonly iRepositoryDesign: IRepositoryDesign;

  constructor(repositoryDesign: QueryRepositoryDesign) {
    this.iRepositoryDesign = repositoryDesign;
  }

  public async getAll(): Promise<DomainDesign[]> {
    return await this.iRepositoryDesign.findAll();
  }

  public async getById(id: string): Promise<DomainDesign> {
    return await this.iRepositoryDesign.findById(id);
  }
}
