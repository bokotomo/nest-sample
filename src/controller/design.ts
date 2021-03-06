import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { ResponseDesign } from '../adapter/response/design';
import { UseCaseDesignFind, UseCaseDesignCreate } from '../usecase/design';
import { RequestDesignCreate } from '../request/design';
import { JwtAuthGuard } from '../service/jwt-auth.guard';
import { Roles } from '../service/roles.decorator';
import { RolesGuard } from '../service/roles.guard';

@Controller('designs')
export class ControllerDesign {
  constructor(
    private readonly response: ResponseDesign,
    private readonly useCaseDesignFind: UseCaseDesignFind,
    private readonly useCaseDesignCreate: UseCaseDesignCreate,
  ) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  public async index(): Promise<object> {
    const domainDesigns = await this.useCaseDesignFind.getAll();
    return this.response.index(domainDesigns);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  public async show(@Param('id') id: string): Promise<object> {
    const domainDesign = await this.useCaseDesignFind.getById(id);
    return this.response.show(domainDesign);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  public async create(@Body() body: RequestDesignCreate): Promise<void> {
    await this.useCaseDesignCreate.create(body.title);
  }
}
