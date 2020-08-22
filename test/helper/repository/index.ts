import { Connection } from 'typeorm';
import { User } from '../../../src/entity/user';
import { Design } from '../../../src/entity/design';

export class Repository {
  constructor(private readonly c: Connection) {}

  async trancateAll() {
    await this.c.query('TRUNCATE table user');
    await this.c.query('TRUNCATE table design');
  }

  async insertUser(
    name: string,
    email: string,
    password: string,
    role: string,
  ) {
    const u = new User();
    u.name = name;
    u.email = email;
    u.age = 0;
    u.password = password;
    u.role = role;
    await this.c.getRepository(User).insert(u);
  }

  async insertDesign(title: string) {
    const d = new Design();
    d.title = title;
    await this.c.getRepository(Design).insert(d);
  }
}
