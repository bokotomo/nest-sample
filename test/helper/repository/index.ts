import { Connection } from 'typeorm';
import { User } from '../../../src/_database/entity/user';
import { Design } from '../../../src/_database/entity/design';

export class Repository {
  constructor(private readonly c: Connection) {}

  async trancateAll(): Promise<void> {
    await this.c.query('TRUNCATE TABLE user');
    await this.c.query('TRUNCATE TABLE design');
  }

  async insertUser(u: User[]): Promise<void> {
    await this.c.getRepository(User).insert(u);
  }

  async insertDesign(d: Design[]): Promise<void> {
    await this.c.getRepository(Design).insert(d);
  }
}
