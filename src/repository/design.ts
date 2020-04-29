import { Injectable } from '@nestjs/common';
import { DomainDesign } from '../domain/design';

@Injectable()
export class RepositoryDesign {
  public findAll(): DomainDesign {
    return new DomainDesign('id', 'name');
  }
}
