import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Design } from '../../_database/entity/design';
import { DomainDesign } from '../../domain/design';
import { IRepositoryDesign } from '../usecase/port/design';

@Injectable()
export class QueryRepositoryDesign implements IRepositoryDesign {
  constructor(
    @Inject('DESIGN_REPOSITORY')
    private readonly repositoryDesign: Repository<Design>,
  ) {}

  /**
   * 全て取得
   */
  public async findAll(): Promise<DomainDesign[]> {
    const designs = await this.repositoryDesign.find();
    return designs.map(
      (design: Design) => new DomainDesign(design.id, design.title),
    );
  }

  /**
   * idで検索
   */
  public async findById(id: string): Promise<DomainDesign> {
    const design = await this.repositoryDesign.findOne(id);
    if (!design)
      throw new HttpException('not found design: ' + id, HttpStatus.FORBIDDEN);
    return new DomainDesign(design.id, design.title);
  }
}
