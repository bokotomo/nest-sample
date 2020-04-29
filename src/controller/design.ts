import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { ServiceDesign } from '../service/design';
import { ResponseDesign } from '../response/design';
import { Response } from 'express';

@Controller('designs')
export class ControllerDesign {
  constructor(
    private readonly serviceDesign: ServiceDesign,
    private readonly responseDesign: ResponseDesign,
  ) {}

  @Get()
  public index(@Res() res: Response) {
    const domainDesign = this.serviceDesign.index();
    res.status(HttpStatus.OK).json(this.responseDesign.index(domainDesign));
  }
}
