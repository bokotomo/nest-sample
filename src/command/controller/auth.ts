import { Controller, Post, Body, HttpStatus, HttpCode } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CommandRepositoryUser } from '../repository/user';
import { RequestLogin } from '../interface/request/auth';
import { CommandResponseAuthLogin } from '../interface/response/auth';
import { DomainJWTClaim } from '../../_common/interface/claim';

/**
 * コマンド_コントローラー: 認証
 */
@Controller('auth')
export class CommandControllerAuth {
  constructor(
    private readonly repository: CommandRepositoryUser,
    private readonly jwtService: JwtService,
  ) {}

  /**
   * ログイン
   */
  @Post('login')
  @HttpCode(HttpStatus.OK)
  public async login(
    @Body() body: RequestLogin,
  ): Promise<CommandResponseAuthLogin> {
    const user = await this.repository.login(body.email, body.password);

    const claim: DomainJWTClaim = {
      email: user.email(),
      sub: user.id(),
      role: user.role(),
    };
    const token = this.jwtService.sign(claim);

    return { token };
  }
}
