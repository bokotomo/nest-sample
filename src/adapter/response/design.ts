import { Injectable } from '@nestjs/common';
import { DomainDesign } from '../../domain/design';

@Injectable()
export class ResponseDesign {
  public index(designs: DomainDesign[]): object {
    return designs.map(design => {
      return { id: design.id(), name: design.title() };
    });
  }
  public show(design: DomainDesign): object {
    return { id: design.id() };
  }
}
