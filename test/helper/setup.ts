import { Test, TestingModule } from '@nestjs/testing';
import { ValidationPipe, INestApplication } from '@nestjs/common';
import { createConnection, Connection } from 'typeorm';
import { AppModule } from '../../src/framework/app.module';
import { Helper } from '../helper/common';

export class Setup {
  private async setupApp(): Promise<INestApplication> {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    const app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
    return app;
  }

  private async createConnect(): Promise<Connection> {
    return await createConnection({
      name: 'e2e_test_connection',
      type: 'mysql',
      host: process.env.DATABASE_HOST as string,
      port: parseInt(process.env.DATABASE_PORT as string),
      username: process.env.DATABASE_USERNAME as string,
      password: process.env.DATABASE_PASSWORD as string,
      database: process.env.DATABASE_DB as string,
      entities: [__dirname + '/../../src/entity/*.{ts,js}'],
      synchronize: false,
      logging: false,
    });
  }

  async setup(): Promise<Helper> {
    const app = await this.setupApp();
    const connection = await this.createConnect();
    const helper = new Helper(app, connection);
    await helper.setupToken();
    return helper;
  }
}
