import {
  Controller,
  Post,
  Body,
  Get,
  HttpStatus,
  HttpCode,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RepositoryUser } from '../repository/user';
import { RequestLogin } from '../request/auth';
import { JwtAuthGuard } from '../service/jwt-auth.guard';
import { DomainRequest, DomainJWTClaim, DomainClaim } from '../domain/claim';

@Controller('auth')
export class ControllerAuth {
  constructor(
    private readonly repository: RepositoryUser,
    private readonly jwtService: JwtService,
  ) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  public async login(@Body() body: RequestLogin): Promise<object> {
    const user = await this.repository.login(body.email, body.password);
    const claim: DomainJWTClaim = {
      email: user.email(),
      sub: user.id(),
      role: user.role(),
    };
    const token = this.jwtService.sign(claim);
    return { token };
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  @HttpCode(HttpStatus.OK)
  getProfile(@Request() req: DomainRequest): DomainClaim {
    return req.user;
  }
}
