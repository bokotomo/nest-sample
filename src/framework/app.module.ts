import { Module } from '@nestjs/common';
import { ControllerUser } from '../controller/user';
import { ControllerDesign } from '../controller/design';
import { providerEntitys } from './provider/entity';
import { providerRepositorys } from './provider/repository';
import { providerResponses } from './provider/response';
import { databaseProviders } from '../driver/database';

@Module({
  controllers: [ControllerUser, ControllerDesign],
  providers: [
    ...providerEntitys,
    ...providerResponses,
    ...providerRepositorys,
    ...databaseProviders,
  ],
  exports: [...databaseProviders],
})
export class AppModule {}
