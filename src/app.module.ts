import { Module } from '@nestjs/common';
import { ControllerUser } from './controller/user';
import { ControllerDesign } from './controller/design';
import { ServiceUser } from './service/user';
import { ServiceDesign } from './service/design';
import { RepositoryUser } from './repository/user';
import { RepositoryDesign } from './repository/design';
import { ResponseUser } from './response/user';
import { ResponseDesign } from './response/design';

const providerResponses = [ResponseUser, ResponseDesign];
const providerServices = [ServiceUser, ServiceDesign];
const providerRepositorys = [RepositoryUser, RepositoryDesign];
const providers = [
  ...providerServices,
  ...providerRepositorys,
  ...providerResponses,
];
@Module({
  imports: [],
  controllers: [ControllerUser, ControllerDesign],
  providers,
})
export class AppModule {}
