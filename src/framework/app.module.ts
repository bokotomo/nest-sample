import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { providerEntitys } from './provider/entity';
import { providerRepositorys } from './provider/repository';
import { providerResponses } from './provider/response';
import { databaseProviders } from './provider/database';
import { providerUseCases } from './provider/usecase';
import { providerAdapterDomains } from './provider/adapterDomain';
import { providerControllers } from './provider/controller';

const envFile = process.env.NODE_ENV === 'test' ? '.env.test' : '.env';
const envFilePath = __dirname + '/../../env/' + envFile;

@Module({
  imports: [ConfigModule.forRoot({ envFilePath, isGlobal: true })],
  controllers: providerControllers,
  providers: [
    ...providerEntitys,
    ...providerResponses,
    ...providerRepositorys,
    ...providerUseCases,
    ...providerAdapterDomains,
    ...databaseProviders,
  ],
  exports: [...databaseProviders],
})
export class AppModule {}
