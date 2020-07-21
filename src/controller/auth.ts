import {
  Controller,
  Post,
  Body,
  HttpStatus,
  HttpCode,
  UnauthorizedException,
} from '@nestjs/common';
import { RepositoryUser } from '../repository/user';
import { RequestLogin } from '../request/auth';

@Controller('auth')
export class ControllerAuth {
  constructor(private readonly repository: RepositoryUser) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  public async login(@Body() body: RequestLogin) {
    const isLogin = await this.repository.login(body.email, body.password);
    if (!isLogin) throw new UnauthorizedException();
    const token = 'OK';
    return { token };
  }
}
