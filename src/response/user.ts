import { Injectable } from '@nestjs/common';
import { DomainUser } from '../domain/user';

@Injectable()
export class ResponseUser {
  public index(user: DomainUser): object {
    return { id: user.getId() };
  }
}
