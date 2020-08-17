import { Test, TestingModule } from '@nestjs/testing';
import { ValidationPipe, INestApplication } from '@nestjs/common';
import { Connection } from 'typeorm';
import { AppModule } from '../../src/framework/app.module';
import { Helper } from '../helper/common';

export class Setup {
  private app: INestApplication;
  private conn: Connection;

  private async setupApp() {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    this.app = moduleFixture.createNestApplication();
    this.app.useGlobalPipes(new ValidationPipe());
    await this.app.init();
  }

  private async createConnect() {
    this.conn = this.app.get<Connection>('DATABASE_CONNECTION');
  }

  async setup(): Promise<Helper> {
    await this.setupApp();
    await this.createConnect();
    const helper = new Helper(this.app, this.conn);
    await helper.setupToken();
    return helper;
  }

  async close() {
    await this.app.close();
    await this.conn.close();
  }
}
