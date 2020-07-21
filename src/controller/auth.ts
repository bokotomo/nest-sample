import { Controller, Post, Body, HttpStatus, HttpCode } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RepositoryUser } from '../repository/user';
import { RequestLogin } from '../request/auth';

@Controller('auth')
export class ControllerAuth {
  constructor(
    private readonly repository: RepositoryUser,
    private readonly jwtService: JwtService,
  ) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  public async login(@Body() body: RequestLogin) {
    const user = await this.repository.login(body.email, body.password);
    const claim = { email: user.email(), sub: user.id() };
    const token = this.jwtService.sign(claim);
    return { token };
  }
}
