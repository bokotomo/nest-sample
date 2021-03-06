import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Design } from '../entity/design';
import { DomainDesign } from '../domain/design';
import { IRepositoryDesign } from '../usecase/port/design';

@Injectable()
export class RepositoryDesign implements IRepositoryDesign {
  constructor(
    @Inject('DESIGN_REPOSITORY')
    private readonly repositoryDesign: Repository<Design>,
  ) {}

  /**
   * 追加する
   */
  public async create(title: string): Promise<void> {
    const design = new Design();
    // user.id = 'unique_id';
    design.title = title;
    await this.repositoryDesign.save(design);
  }

  /**
   * 全て取得
   */
  public async findAll(): Promise<DomainDesign[]> {
    const designs = await this.repositoryDesign.find();
    return designs.map(design => new DomainDesign(design.id, design.title));
  }

  /**
   * idで検索
   */
  public async findById(id: string): Promise<DomainDesign> {
    const design = await this.repositoryDesign.findOne(id);
    // errはreturnで返した方が良さそうだけど、迷う
    if (!design)
      throw new HttpException('not found design: ' + id, HttpStatus.FORBIDDEN);
    return new DomainDesign(design.id, design.title);
  }
}
