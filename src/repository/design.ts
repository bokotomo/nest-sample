import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Design } from '../entity/design';
import { DomainDesign } from '../domain/design';
import { IRepositoryDesign } from '../usecase/port/design';

@Injectable()
export class RepositoryDesign implements IRepositoryDesign {
  constructor(
    @Inject('DESIGN_REPOSITORY')
    private repositoryDesign: Repository<Design>,
  ) {}

  public async create(title: string) {
    const design = new Design();
    // user.id = 'unique_id';
    design.title = title;
    await this.repositoryDesign.save(design);
  }

  public async findAll(): Promise<DomainDesign[]> {
    const designs = (await this.repositoryDesign.find()) as Design[];
    return designs.map(design => new DomainDesign(design.id, design.title));
  }

  public async findById(id: string): Promise<DomainDesign> {
    const design = (await this.repositoryDesign.findOne(id)) as Design;
    return new DomainDesign(design.id, design.title);
  }
}
