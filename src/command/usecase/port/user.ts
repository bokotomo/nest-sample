import { DomainUser } from '../../domain/user';

export interface ICommandRepositoryUser {
  create: (domainUser: DomainUser) => Promise<void>;
}
