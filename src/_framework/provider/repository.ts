import { CommandRepositoryUser } from '../../command/repository/user';
import { CommandRepositoryDesign } from '../../command/repository/design';
import { QueryRepositoryUser } from '../../query/repository/user';
import { QueryRepositoryDesign } from '../../query/repository/design';

export const providerRepositorys = [
  CommandRepositoryUser,
  CommandRepositoryDesign,

  QueryRepositoryUser,
  QueryRepositoryDesign,
];
