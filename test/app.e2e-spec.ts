import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/framework/app.module';
import { ValidationPipe } from '@nestjs/common';

describe('users', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  afterEach(async () => {
    console.log('trancate');
  });

  it('create', async () => {
    // モックは使わず、DBクエリなど追加する
    const res = await request(app.getHttpServer())
      .post('/users/create')
      .send({
        name: 'tatro',
        age: 1,
      });
    expect(res.status).toBe(201);
  });

  it('create show', async () => {
    const res = await request(app.getHttpServer()).get('/users/8');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: 8, name: 'tatro' });
  });
});
