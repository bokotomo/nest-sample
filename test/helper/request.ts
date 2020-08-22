import * as request from 'supertest';
import { Role } from './constant';

export class HttpRequest {
  private tokenAdmin: string;
  private token: string;
  constructor(
    private readonly host: string,
    private readonly basePath: string = '',
  ) {}

  private getHeader(role: Role): object {
    const token = role === Role.Admin ? this.tokenAdmin : this.token;
    const Authorization = `Bearer ${token}`;
    return { Authorization, 'Content-Type': 'application/json' };
  }

  async setToken(token: string, tokenAdmin: string): Promise<void> {
    this.token = token;
    this.tokenAdmin = tokenAdmin;
  }

  async getNotAuth(url: string, query: object = {}): Promise<request.Response> {
    const path = `${this.basePath}${url}`;
    return await request(this.host)
      .get(path)
      .set({ 'Content-Type': 'application/json' })
      .send(query);
  }

  async postNotAuth(url: string, data: object = {}): Promise<request.Response> {
    const path = `${this.basePath}${url}`;
    return await request(this.host)
      .post(path)
      .set({ 'Content-Type': 'application/json' })
      .send(data);
  }

  async putNotAuth(url: string, data: object = {}): Promise<request.Response> {
    const path = `${this.basePath}${url}`;
    return await request(this.host)
      .put(path)
      .set({ 'Content-Type': 'application/json' })
      .send(data);
  }

  async deleteNotAuth(
    url: string,
    data: object = {},
  ): Promise<request.Response> {
    const path = `${this.basePath}${url}`;
    return await request(this.host)
      .delete(path)
      .set({ 'Content-Type': 'application/json' })
      .send(data);
  }

  async get(
    url: string,
    role: Role,
    query: object = {},
  ): Promise<request.Response> {
    const header = this.getHeader(role);
    const path = `${this.basePath}${url}`;
    return await request(this.host)
      .get(path)
      .set(header)
      .send(query);
  }

  async post(
    url: string,
    role: Role,
    data: object = {},
  ): Promise<request.Response> {
    const header = this.getHeader(role);
    const path = `${this.basePath}${url}`;
    return await request(this.host)
      .post(path)
      .set(header)
      .send(data);
  }

  async put(
    url: string,
    role: Role,
    data: object = {},
  ): Promise<request.Response> {
    const header = this.getHeader(role);
    const path = `${this.basePath}${url}`;
    return await request(this.host)
      .put(path)
      .set(header)
      .send(data);
  }

  async delete(
    url: string,
    role: Role,
    data: object = {},
  ): Promise<request.Response> {
    const header = this.getHeader(role);
    const path = `${this.basePath}${url}`;
    return await request(this.host)
      .delete(path)
      .set(header)
      .send(data);
  }
}
