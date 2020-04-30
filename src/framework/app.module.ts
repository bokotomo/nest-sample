import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ControllerUser } from '../controller/user';
import { ControllerDesign } from '../controller/design';
import { providerEntitys } from './provider/entity';
import { providerRepositorys } from './provider/repository';
import { providerResponses } from './provider/response';
import { databaseProviders } from './provider/database';
import { providerUseCases } from './provider/usecase';

const envFilePath = './env/.env';
@Module({
  imports: [ConfigModule.forRoot({ envFilePath, isGlobal: true })],
  controllers: [ControllerUser, ControllerDesign],
  providers: [
    ...providerEntitys,
    ...providerResponses,
    ...providerRepositorys,
    ...providerUseCases,
    ...databaseProviders,
  ],
  exports: [...databaseProviders],
})
export class AppModule {}
