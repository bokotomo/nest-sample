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
import { UseCaseUserFind, UseCaseUserCreate } from '../usecase/user';
import { RequestUserCreate } from '../request/user';

@Controller('users')
export class ControllerUser {
  constructor(
    private readonly responseUser: ResponseUser,
    private readonly useCaseUserFind: UseCaseUserFind,
    private readonly useCaseUserCreate: UseCaseUserCreate,
  ) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  public async index() {
    const domainUsers = await this.useCaseUserFind.getAll();
    return this.responseUser.index(domainUsers);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  public async show(@Param('id') id: string) {
    const domainUser = await this.useCaseUserFind.getById(id);
    return this.responseUser.show(domainUser);
  }

  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  public async create(@Body() body: RequestUserCreate) {
    await this.useCaseUserCreate.create(body.name, body.age);
  }
}
