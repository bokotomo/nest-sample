import { Injectable } from '@nestjs/common';
import { RepositoryDesign } from '../repository/design';
import { DomainDesign } from '../domain/design';

@Injectable()
export class ServiceDesign {
  constructor(private readonly repositoryDesign: RepositoryDesign) {}

  public index(): DomainDesign {
    return this.repositoryDesign.findAll();
  }
}
