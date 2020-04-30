import { Connection } from 'typeorm';
import { User } from '../../entity/user';
import { Design } from '../../entity/design';

export const providerEntitys = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(User),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'DESIGN_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Design),
    inject: ['DATABASE_CONNECTION'],
  },
];
