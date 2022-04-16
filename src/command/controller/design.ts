import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { CommandUseCaseDesignCreate } from '../usecase/design';
import { RequestDesignCreate } from '../interface/request/design';
import { JwtAuthGuard } from '../../_common/jwt-auth.guard';
import { Roles } from '../../_common/roles.decorator';
import { RolesGuard } from '../../_common/roles.guard';

/**
 * コマンド_コントローラー: デザイン
 */
@Controller('designs')
export class CommandControllerDesign {
  constructor(
    private readonly useCaseDesignCreate: CommandUseCaseDesignCreate,
  ) {}

  /**
   * デザイン追加
   */
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  public async create(@Body() body: RequestDesignCreate): Promise<void> {
    await this.useCaseDesignCreate.create(body.title);
  }
}
