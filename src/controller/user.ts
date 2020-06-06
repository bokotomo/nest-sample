import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { ResponseUser } from '../adapter/response/user';
import { AdapterDomainUser } from '../adapter/domain/user';
import { UseCaseUserFind, UseCaseUserCreate } from '../usecase/user';
import { RequestUserCreate } from '../request/user';

@Controller('users')
export class ControllerUser {
  constructor(
    private readonly response: ResponseUser,
    private readonly useCaseUserFind: UseCaseUserFind,
    private readonly useCaseUserCreate: UseCaseUserCreate,
    private readonly adapterDomain: AdapterDomainUser,
  ) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  public async index() {
    const domainUsers = await this.useCaseUserFind.getAll();
    return this.response.index(domainUsers);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  public async show(@Param('id') id: string) {
    const domainUser = await this.useCaseUserFind.getById(id);
    return this.response.show(domainUser);
  }

  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  public async create(@Body() body: RequestUserCreate) {
    // 以下の adapterDomain は過剰に役割を分離させてる。
    // const domainUser = new DomainUser('', body.name, body.age)でもおk
    const domainUser = this.adapterDomain.create(body);
    await this.useCaseUserCreate.create(domainUser);
  }
}
