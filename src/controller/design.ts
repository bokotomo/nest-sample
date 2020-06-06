import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ResponseDesign } from '../adapter/response/design';
import { UseCaseDesignFind, UseCaseDesignCreate } from '../usecase/design';
import { RequestDesignCreate } from '../request/design';

@Controller('designs')
export class ControllerDesign {
  constructor(
    private readonly response: ResponseDesign,
    private readonly useCaseDesignFind: UseCaseDesignFind,
    private readonly useCaseDesignCreate: UseCaseDesignCreate,
  ) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  public async index() {
    const domainDesigns = await this.useCaseDesignFind.getAll();
    return this.response.index(domainDesigns);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  public async show(@Param('id') id: string) {
    const domainDesign = await this.useCaseDesignFind.getById(id);
    return this.response.show(domainDesign);
  }

  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  public async create(@Body() body: RequestDesignCreate) {
    await this.useCaseDesignCreate.create(body.title);
  }
}
