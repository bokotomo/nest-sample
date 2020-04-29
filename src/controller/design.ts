import { Controller, Get, Res, Param, HttpStatus } from '@nestjs/common';
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

  @Get(':id')
  public show(@Res() res: Response, @Param('id') id: string) {
    const domainDesign = this.serviceDesign.show(id);
    res.status(HttpStatus.OK).json(this.responseDesign.index(domainDesign));
  }
}
