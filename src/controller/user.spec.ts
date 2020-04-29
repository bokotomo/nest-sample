import { Test, TestingModule } from '@nestjs/testing';
import { ControllerUser } from './user';
import { ServiceUser } from '../service/user';

describe('AppController', () => {
  let controllerUser: ControllerUser;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ControllerUser],
      providers: [ServiceUser],
    }).compile();

    controllerUser = app.get<ControllerUser>(ControllerUser);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(controllerUser.index()).toBe({ id: 'id' });
    });
  });
});
