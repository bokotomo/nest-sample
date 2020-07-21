import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { providerEntitys } from './provider/entity';
import { providerRepositorys } from './provider/repository';
import { providerResponses } from './provider/response';
import { databaseProviders } from './provider/database';
import { providerUseCases } from './provider/usecase';
import { providerAdapterDomains } from './provider/adapterDomain';
import { providerControllers } from './provider/controller';

const envFile = process.env.NODE_ENV === 'test' ? '.env.test' : '.env';
const envFilePath = './env/' + envFile;

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    PassportModule,
    JwtModule.register({
      secret: 'himitudayo',
      signOptions: { expiresIn: '60s' },
    }),
  ],
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
