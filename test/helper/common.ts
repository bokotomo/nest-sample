import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { Connection } from 'typeorm';
import { User } from '../../src/entity/user';
import { Design } from '../../src/entity/design';

export class Helper {
  constructor(
    private readonly app: INestApplication,
    private readonly conn: Connection,
  ) {}
  token: string;

  async trancateAll() {
    await this.conn.query('TRUNCATE table user');
    await this.conn.query('TRUNCATE table design');
  }

  async setupToken() {
    await this.insertUser('', 'email', 'password1', 'admin');
    const res = await this.post(
      '/auth/login',
      {
        email: 'email',
        password: 'password1',
      },
      false,
    );
    await this.trancateAll();
    this.token = res.body.token;
  }

  private getHeader(isAuth: boolean) {
    if (!isAuth) return { 'Content-Type': 'application/json' };
    const Authorization = `Bearer ${this.token}`;
    return { Authorization, 'Content-Type': 'application/json' };
  }

  async post(url: string, data: object, isAuth: boolean) {
    const header = this.getHeader(isAuth);
    return await request(this.app.getHttpServer())
      .post(url)
      .set(header)
      .send(data);
  }

  async get(url: string, data: object, isAuth: boolean) {
    const header = this.getHeader(isAuth);
    return await request(this.app.getHttpServer())
      .get(url)
      .set(header)
      .send(data);
  }

  async insertUser(
    name: string,
    email: string,
    password: string,
    role: string,
  ) {
    const u = new User();
    u.name = name;
    u.email = email;
    u.age = 0;
    u.password = password;
    u.role = role;
    await this.conn.getRepository(User).insert(u);
  }

  async insertDesign(title: string) {
    const d = new Design();
    d.title = title;
    await this.conn.getRepository(Design).insert(d);
  }
}
