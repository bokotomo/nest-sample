import { Helper } from './helper/helper';
import { Role } from './helper/constant';

describe('design', () => {
  const helper = new Helper();

  beforeAll(async () => await helper.setup());

  afterAll(async () => await helper.close());

  afterEach(async () => await helper.repository.trancateAll());

  it('designの詳細を返す', async () => {
    await helper.repository.insertDesign('title');
    const res = await helper.request.get('/designs/1', Role.Normal, {});
    expect(res.body).toEqual({ id: 1 });
    expect(res.status).toEqual(200);
  });

  it('該当するdesignが無い', async () => {
    const res = await helper.request.get('/designs/1', Role.Normal, {});
    expect(res.body).toEqual({
      message: 'not found design: 1',
      statusCode: 403,
    });
    expect(res.status).toEqual(403);
  });

  it('designの一覧を返す', async () => {
    await helper.repository.insertDesign('title1');
    await helper.repository.insertDesign('title2');
    const res = await helper.request.get('/designs', Role.Normal, {});
    expect(res.body).toEqual([
      { id: 1, name: 'title1' },
      { id: 2, name: 'title2' },
    ]);
    expect(res.status).toEqual(200);
  });

  it('designの作成をする', async () => {
    const res = await helper.request.post('/designs/create', Role.Normal, {
      title: 'title1',
    });
    expect(res.status).toEqual(201);
    // TODO: レコードのチェックもする
  });
});
