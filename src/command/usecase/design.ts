import { Injectable } from '@nestjs/common';
import { CommandRepositoryDesign } from '../repository/design';
import { ICommandRepositoryDesign } from './port/design';

/**
 * ユースケース: デザイン
 */
@Injectable()
export class CommandUseCaseDesignCreate {
  private readonly iRepositoryDesign: ICommandRepositoryDesign;

  constructor(repositoryDesign: CommandRepositoryDesign) {
    this.iRepositoryDesign = repositoryDesign;
  }

  public async create(title: string): Promise<void> {
    await this.iRepositoryDesign.create(title);
  }
}
