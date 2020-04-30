import { Controller, Get, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { RepositoryDesign } from '../repository/design';
import { ResponseDesign } from '../adapter/response/design';
import { FindDesignUseCase } from '../usecase/design';

@Controller('designs')
export class ControllerDesign {
  constructor(
    private readonly repositoryDesign: RepositoryDesign,
    private readonly responseDesign: ResponseDesign,
  ) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  public async index() {
    const usecase = new FindDesignUseCase(this.repositoryDesign);
    const domainDesigns = await usecase.getAll();
    return this.responseDesign.index(domainDesigns);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  public async show(@Param('id') id: string) {
    const usecase = new FindDesignUseCase(this.repositoryDesign);
    const domainDesign = await usecase.getById(id);
    return this.responseDesign.show(domainDesign);
  }
}
