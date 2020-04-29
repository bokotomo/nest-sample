import { Test, TestingModule } from '@nestjs/testing';
import { ControllerUser } from './user';
import { ServiceUser } from '../service/user';

describe('User', () => {
  let controllerUser: ControllerUser;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ControllerUser],
      providers: [ServiceUser],
    }).compile();

    controllerUser = app.get<ControllerUser>(ControllerUser);
  });

  describe('root', () => {
    it('should return id', () => {
      expect(controllerUser.index()).toBe({ id: 'id' });
    });
  });
});
