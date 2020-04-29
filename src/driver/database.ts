import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'mysql',
        host: 'localhost',
        // host: 'nest-sample-db', // envで分ける
        port: 3388,
        username: 'root',
        password: 'dev',
        database: 'dev',
        entities: [__dirname + '/../entity/*.js'],
        synchronize: true,
      }),
  },
];
