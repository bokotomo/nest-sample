import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/framework/app.module';
import { Brackets, createConnection, createQueryBuilder } from 'typeorm';
import { User } from '../src/entity/user';
import { RepositoryUser } from '../src/repository/user';
import { DomainUser } from '../src/domain/user';
import { Repository } from 'typeorm';

describe('users', () => {
  let app: INestApplication;
  let ru: Repository<User>;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
    ru = app.get<Repository<User>>('USER_REPOSITORY');
  });

  afterAll(async () => {
    console.log('end');
    await app.close();
  });

  afterEach(async () => {
    console.log('trancate');
  });

  it('login', async () => {
    const t = new User();
    t.name = '';
    t.email = 'email';
    t.age = 0;
    t.password = 'zxcvbnm0';
    t.role = '';
    await ru.insert(t);
    const res = await request(app.getHttpServer())
      .post('/auth/login')
      .set({ 'Content-Type': 'application/json' })
      .send({ email: 'email', password: 'zxcvbnm0' });
    console.log(res.body);
    expect(res.status).toBe(200);
  });

  // it('show', async () => {
  //   // const url = 'http://localhost:3001';
  //   const token =""
  //   const Authorization = `Bearer ${token}`;
  //   const res = await request(app.getHttpServer())
  //     .get('/users/6')
  //     .set({ Authorization });
  //   console.log(res.body);
  //   // expect(res.status).toBe(200);
  //   // expect(res.body).toEqual({ id: 8, name: 'tatro' });
  // });

  // it('create', async () => {
  //   // モックは使わず、DBクエリなど追加する
  //   const res = await request(app.getHttpServer())
  //     .post('/users/create')
  //     .send({
  //       name: 'tatro',
  //       age: 1,
  //     });
  //   expect(res.status).toBe(201);
  // });

  // it('create show', async () => {
  //   const url = 'http://localhost:3001';
  //   const token =
  //     'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFAYS5hIiwic3ViIjozMiwicm9sZSI6IiIsImlhdCI6MTU5NjkzODYyOSwiZXhwIjoxNTk2OTQwNDI5fQ.bYdABYtuLTClCawQqhkF_UeND-uKykk6rNzfb3ZpkjzHOWVugSSnsRyfReXfLtttnHreuRNOE5AaRdemJsVvvi3gke7KQx2bwiU86nr3VcEkp2u0z86G11YMDk59CDzTNy3gm2ktRxAu-hc-3Pj232CLiBX9rIlKnfFbtPHr343k_dn7FWlEO7H59ETjJGPCivuNyqqc3UVKIfP-67Q-WpNIS5Bz37ARJaorAvH2_qvtv-PCYGZw-xYS097HKqWPQPf1ameFaQYLFketaFHljMpSxCTI-_SgVGlGRJt5FKikv1fU4WXlb_CdG7Uzxp-3RSZH6QxezDAKUssVbPHlMPZsYzqZoakQa-Zm6wO2OD-Y9Zcs_npNa_O6CHjUvpLQPoPXBccawsbe_teOwsoWnm6eAINd_BqFNZQTocTsnczFW8tBEKV7fVl1WWmhJmwCeMhowUf1eM0dII5L-flrJ8dWak7x8VJ1sAcCMhP79S9ei0T1djs_X0lJ2_a5PZeJIW_YhkZTNC8ghtBdwcZ1r28CDnqfRB8VhISinERtJh7wks0b-czGDJ7v9F1YpQbzSDHgjh8Og7Ec8KQxYDW2hdRmngoC-zWuwU1zKwVrzYB3JYW_vzmNZd42qcpBx5KjYoAKsQl6h0ML-pqv_WrJJ6u6knsFk6YYzF-eGbuukeQ';
  //   const Authorization = `Bearer ${token}`;
  //   const res = await request(url)
  //     .get('/users')
  //     .set({ Authorization });
  //   console.log(res.body);
  //   // expect(res.status).toBe(200);
  //   // expect(res.body).toEqual({ id: 8, name: 'tatro' });
  // });
});
