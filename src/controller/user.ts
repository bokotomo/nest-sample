import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { RepositoryUser } from '../repository/user';
import { ResponseUser } from '../adapter/response/user';
import { FindUserUseCase } from '../usecase/user';
import { RequestUserCreate } from '../request/user';

@Controller('users')
export class ControllerUser {
  constructor(
    private readonly repositoryUser: RepositoryUser,
    private readonly responseUser: ResponseUser,
  ) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  public async index() {
    const usecase = new FindUserUseCase(this.repositoryUser);
    const domainUsers = await usecase.getAll();
    return this.responseUser.index(domainUsers);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  public async show(@Param('id') id: string) {
    const usecase = new FindUserUseCase(this.repositoryUser);
    const domainUser = await usecase.getById(id);
    return this.responseUser.show(domainUser);
  }

  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  public async create(@Body() body: RequestUserCreate) {
    console.log(body);
    const usecase = new FindUserUseCase(this.repositoryUser);
    await usecase.create(body.name, body.age);
  }
}
