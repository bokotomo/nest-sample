import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'mysql',
        host: process.env.DATABASE_HOST as string,
        port: parseInt(process.env.DATABASE_PORT),
        username: process.env.DATABASE_USERNAME as string,
        password: process.env.DATABASE_PASSWORD as string,
        database: process.env.DATABASE_DB as string,
        entities: [__dirname + '/../../entity/*.js'],
        synchronize: true,
      }),
  },
];
