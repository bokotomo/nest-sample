import {
  Controller,
  Get,
  Param,
  HttpStatus,
  HttpCode,
  UseGuards,
} from '@nestjs/common';
import { QueryResponseUser } from '../../query/adapter/response/user';
import { QueryUseCaseUserFind } from '../../query/usecase/user';
import {
  QueryResponseUserIndex,
  QueryResponseUserShow,
} from '../../query/interface/response/user';
import { JwtAuthGuard } from '../../_common/jwt-auth.guard';

/**
 * クエリー_コントローラー: ユーザー
 */
@Controller('users')
export class QueryControllerUser {
  constructor(
    private readonly response: QueryResponseUser,
    private readonly useCaseUserFind: QueryUseCaseUserFind,
  ) {}

  /**
   * ユーザー一覧
   */
  @UseGuards(JwtAuthGuard)
  @Get()
  @HttpCode(HttpStatus.OK)
  public async index(): Promise<QueryResponseUserIndex[]> {
    const domainUsers = await this.useCaseUserFind.getAll();
    return this.response.index(domainUsers);
  }

  /**
   * ユーザー取得
   */
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  public async show(@Param('id') id: string): Promise<QueryResponseUserShow> {
    const domainUser = await this.useCaseUserFind.getById(id);
    return this.response.show(domainUser);
  }
}
