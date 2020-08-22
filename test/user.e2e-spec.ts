import { Helper } from './helper/helper';
import { Role } from './helper/constant';

describe('user', () => {
  const helper = new Helper();

  beforeAll(async () => await helper.setup());

  afterAll(async () => await helper.close());

  afterEach(async () => await helper.repository.trancateAll());

  it('ユーザの詳細を返す', async () => {
    await helper.repository.insertUser('name', 'email', '', '');
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
    await helper.repository.insertUser('name1', 'email', '', '');
    await helper.repository.insertUser('name2', 'email', '', '');
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
