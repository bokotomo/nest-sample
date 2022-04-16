import { Controller, Get, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { QueryResponseDesign } from '../../query/adapter/response/design';
import { QueryUseCaseDesignFind } from '../../query/usecase/design';
import {
  QueryResponseDesignIndex,
  QueryResponseDesignShow,
} from '../../query/interface/response/design';

/**
 * クエリー_コントローラー: デザイン
 */
@Controller('designs')
export class QueryControllerDesign {
  constructor(
    private readonly response: QueryResponseDesign,
    private readonly useCaseDesignFind: QueryUseCaseDesignFind,
  ) {}

  /**
   * デザイン一覧
   */
  @Get()
  @HttpCode(HttpStatus.OK)
  public async index(): Promise<QueryResponseDesignIndex[]> {
    const domainDesigns = await this.useCaseDesignFind.getAll();
    return this.response.index(domainDesigns);
  }

  /**
   * デザイン取得
   */
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  public async show(@Param('id') id: string): Promise<QueryResponseDesignShow> {
    const domainDesign = await this.useCaseDesignFind.getById(id);
    return this.response.show(domainDesign);
  }
}
