import { Connection } from 'typeorm';
import { Users } from '../entity/user';

export const userProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Users),
    inject: ['DATABASE_CONNECTION'],
  },
];
