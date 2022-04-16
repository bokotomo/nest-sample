import { Test, TestingModule } from '@nestjs/testing';
import { QueryControllerUser } from './user';
import { QueryRepositoryUser } from '../../query/repository/user';
import { QueryResponseUser } from '../../query/adapter/response/user';

describe('User', () => {
  let controllerUser: QueryControllerUser;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [QueryControllerUser],
      providers: [QueryRepositoryUser, QueryResponseUser],
    }).compile();

    controllerUser = app.get<QueryControllerUser>(QueryControllerUser);
  });

  describe('root', () => {
    it('should return id', async () => {
      expect(await controllerUser.index()).toBe({ id: 'id', name: '' });
    });
  });
});
