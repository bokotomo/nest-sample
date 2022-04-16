import { CommandUseCaseUserCreate } from '../../command/usecase/user';
import { CommandUseCaseDesignCreate } from '../../command/usecase/design';
import { QueryUseCaseUserFind } from '../../query/usecase/user';
import { QueryUseCaseDesignFind } from '../../query/usecase/design';

export const providerUseCases = [
  CommandUseCaseUserCreate,
  CommandUseCaseDesignCreate,

  QueryUseCaseUserFind,
  QueryUseCaseDesignFind,
];
