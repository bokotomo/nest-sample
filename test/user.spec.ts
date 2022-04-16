import { Helper } from './helper/helper';
import { Role } from './helper/constant';
import { User } from '../src/_database/entity/user';

describe('user', () => {
  const helper = new Helper();

  beforeAll(async () => await helper.setup());

  afterAll(async () => await helper.close());

  afterEach(async () => await helper.repository.trancateAll());

  it('ユーザの詳細を返す', async () => {
    const u = new User();
    u.name = 'name';
    u.email = 'email';
    u.password = '';
    u.role = '';
    u.age = 0;
    await helper.repository.insertUser([u]);
    const res = await helper.request.get('/users/1', Role.Normal, {});
    expect(res.body).toEqual({ id: 1, name: 'name' });
    expect(res.status).toEqual(200);
  });

  it('該当するユーザが無い', async () => {
    const res = await helper.request.get('/users/1', Role.Normal, {});
    expect(res.body).toEqual({ message: 'not found user: 1', statusCode: 403 });
    expect(res.status).toEqual(403);
  });

  it('ユーザの一覧を返す', async () => {
    const u = new User();
    u.name = 'name1';
    u.email = 'email1';
    u.password = '';
    u.role = '';
    u.age = 0;
    const u2 = new User();
    u2.name = 'name2';
    u2.email = 'email2';
    u2.password = '';
    u2.role = '';
    u2.age = 0;
    await helper.repository.insertUser([u, u2]);
    const res = await helper.request.get('/users', Role.Normal, {});
    expect(res.body).toEqual([
      { id: 1, name: 'name1' },
      { id: 2, name: 'name2' },
    ]);
    expect(res.status).toEqual(200);
  });

  it('ユーザの作成をする', async () => {
    const res = await helper.request.post('/users/create', Role.Normal, {
      name: 'name1',
      age: 10,
      email: 'a@a.a',
      password: 'password1',
      role: 'admin',
    });
    expect(res.status).toEqual(201);
    // TODO: レコードのチェックもする
  });
});
