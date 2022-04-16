import {
  Controller,
  Get,
  HttpStatus,
  HttpCode,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../_common/jwt-auth.guard';
import { DomainRequest, DomainClaim } from '../../_common/interface/claim';

/**
 * クエリー_コントローラー: 認証
 */
@Controller('auth')
export class QueryControllerAuth {
  /**
   * ユーザー情報取得
   */
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  @HttpCode(HttpStatus.OK)
  getProfile(@Request() req: DomainRequest): DomainClaim {
    return req.user;
  }
}
