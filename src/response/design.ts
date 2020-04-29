import { Injectable } from '@nestjs/common';
import { DomainDesign } from '../domain/design';

@Injectable()
export class ResponseDesign {
  public index(design: DomainDesign): object {
    return { id: design.id() };
  }
  public show(design: DomainDesign): object {
    return { id: design.id() };
  }
}
