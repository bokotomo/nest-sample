import { Helper } from './helper/helper';
import { Role } from './helper/constant';
import { Design } from '../src/entity/design';

describe('design', () => {
  const helper = new Helper();

  beforeAll(async () => await helper.setup());

  afterAll(async () => await helper.close());

  afterEach(async () => await helper.repository.trancateAll());

  it('designの詳細を返す', async () => {
    const d = new Design();
    d.title = 'title';
    await helper.repository.insertDesign([d]);
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
    const d = new Design();
    d.title = 'title1';
    const d2 = new Design();
    d2.title = 'title2';
    await helper.repository.insertDesign([d, d2]);
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
