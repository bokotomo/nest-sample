import { Test, TestingModule } from '@nestjs/testing';
import { ControllerUser } from './user';
import { RepositoryUser } from '../repository/user';
import { ResponseUser } from '../adapter/response/user';

describe('User', () => {
  let controllerUser: ControllerUser;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ControllerUser],
      providers: [RepositoryUser, ResponseUser],
    }).compile();

    controllerUser = app.get<ControllerUser>(ControllerUser);
  });

  describe('root', () => {
    it('should return id', async () => {
      expect(await controllerUser.index()).toBe({ id: 'id', name: '' });
    });
  });
});
