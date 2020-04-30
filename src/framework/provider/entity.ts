import { Connection } from 'typeorm';
import { User } from '../../entity/user';

export const providerEntitys = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(User),
    inject: ['DATABASE_CONNECTION'],
  },
];
