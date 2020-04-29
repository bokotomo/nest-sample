import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { ServiceUser } from '../service/user';
import { ResponseUser } from '../response/user';
import { Response } from 'express';

@Controller('users')
export class ControllerUser {
  constructor(
    private readonly serviceUser: ServiceUser,
    private readonly responseUser: ResponseUser,
  ) {}

  @Get()
  public index(@Res() res: Response) {
    const domainUser = this.serviceUser.index();
    res.status(HttpStatus.OK).json(this.responseUser.index(domainUser));
  }
}
