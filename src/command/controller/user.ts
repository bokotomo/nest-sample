import {
  Controller,
  Post,
  Body,
  HttpStatus,
  HttpCode,
  UseGuards,
} from '@nestjs/common';
import { CommandAdapterDomainUser } from '../adapter/domain/user';
import { CommandUseCaseUserCreate } from '../usecase/user';
import { RequestUserCreate } from '../interface/request/user';
import { JwtAuthGuard } from '../../_common/jwt-auth.guard';
import { Roles } from '../../_common/roles.decorator';
import { RolesGuard } from '../../_common/roles.guard';

/**
 * コマンド_コントローラー: ユーザー
 */
@Controller('users')
export class CommandControllerUser {
  constructor(
    private readonly useCaseUserCreate: CommandUseCaseUserCreate,
    private readonly adapterDomain: CommandAdapterDomainUser,
  ) {}

  /**
   * ユーザー追加
   */
  @Roles('admin')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  public async create(@Body() body: RequestUserCreate): Promise<void> {
    // 以下の adapterDomain は過剰に役割を分離させてる。
    // const domainUser = new DomainUser('', body.name, body.age)でもおk
    const domainUser = this.adapterDomain.create(body);
    await this.useCaseUserCreate.create(domainUser);
  }
}
