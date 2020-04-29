import { Module } from '@nestjs/common';
import { databaseProviders } from './driver/database';
import { ControllerUser } from './controller/user';
import { ControllerDesign } from './controller/design';
import { ServiceUser } from './service/user';
import { ServiceDesign } from './service/design';
import { RepositoryUser } from './repository/user';
import { RepositoryDesign } from './repository/design';
import { ResponseUser } from './response/user';
import { ResponseDesign } from './response/design';
import { userProviders } from './providers/user';

const providerResponses = [ResponseUser, ResponseDesign];
const providerServices = [ServiceUser, ServiceDesign];
const providerRepositorys = [RepositoryUser, RepositoryDesign];
const providers = [
  ...providerServices,
  ...providerRepositorys,
  ...providerResponses,
  ...databaseProviders,
  ...userProviders,
];
@Module({
  imports: [],
  controllers: [ControllerUser, ControllerDesign],
  providers,
  exports: [...databaseProviders],
})
export class AppModule {}
