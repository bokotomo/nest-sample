import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Design } from '../../_database/entity/design';
import { ICommandRepositoryDesign } from '../usecase/port/design';

/**
 * リポジトリ: デザイン
 */
@Injectable()
export class CommandRepositoryDesign implements ICommandRepositoryDesign {
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
}
