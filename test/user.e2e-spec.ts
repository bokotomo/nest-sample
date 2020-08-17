import { Helper } from './helper/common';
import { Setup } from './helper/setup';

describe('user', () => {
  let helper: Helper;
  let setup: Setup;

  beforeAll(async () => {
    setup = new Setup();
    helper = await setup.setup();
  });

  afterAll(async () => {
    await setup.close();
  });

  afterEach(async () => {
    await helper.trancateAll();
  });

  it('ユーザの詳細を返す', async () => {
    await helper.insertUser('name', 'email', '', '');
    const res = await helper.get('/users/1', {}, true);
    expect(res.body).toEqual({ id: 1, name: 'name' });
    expect(res.status).toEqual(200);
  });

  it('該当するユーザが無い', async () => {
    const res = await helper.get('/users/1', {}, true);
    expect(res.body).toEqual({ message: 'not found user: 1', statusCode: 403 });
    expect(res.status).toEqual(403);
  });

  it('ユーザの一覧を返す', async () => {
    await helper.insertUser('name1', 'email', '', '');
    await helper.insertUser('name2', 'email', '', '');
    const res = await helper.get('/users', {}, true);
    expect(res.body).toEqual([
      { id: 1, name: 'name1' },
      { id: 2, name: 'name2' },
    ]);
    expect(res.status).toEqual(200);
  });

  it('ユーザの作成をする', async () => {
    const res = await helper.post(
      '/users/create',
      {
        name: 'name1',
        age: 10,
        email: 'a@a.a',
        password: 'password1',
        role: 'admin',
      },
      true,
    );
    expect(res.status).toEqual(201);
    // TODO: レコードのチェックもする
  });
});
