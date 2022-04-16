import { Test, TestingModule } from '@nestjs/testing';
import { ValidationPipe, INestApplication } from '@nestjs/common';
import { Connection } from 'typeorm';
import { AppModule } from '../../src/_framework/app.module';
import { HttpRequest } from './request';
import { Repository } from './repository';
import { User } from '../../src/_database/entity/user';

export class Helper {
  private app: INestApplication;
  private conn: Connection;
  public request: HttpRequest;
  public repository: Repository;

  private async setupApp(): Promise<void> {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    this.app = moduleFixture.createNestApplication();
    this.app.useGlobalPipes(new ValidationPipe());
    await this.app.init();
  }

  private async createConnect(): Promise<Connection> {
    return this.app.get<Connection>('DATABASE_CONNECTION');
  }

  private async setupToken(): Promise<string> {
    const u = new User();
    u.name = '';
    u.email = 'email';
    u.password = 'password1';
    u.role = 'admin';
    u.age = 0;
    await this.repository.insertUser([u]);
    const res = await this.request.postNotAuth('/auth/login', {
      email: 'email',
      password: 'password1',
    });
    await this.repository.trancateAll();
    return res.body.token;
  }

  async setup(): Promise<void> {
    await this.setupApp();
    this.conn = await this.createConnect();
    this.repository = new Repository(this.conn);
    this.request = new HttpRequest(this.app.getHttpServer(), '');
    const token = await this.setupToken();
    const tokenAdmin = await this.setupToken();
    await this.request.setToken(token, tokenAdmin);
  }

  async close(): Promise<void> {
    await this.app.close();
    await this.conn.close();
  }
}
