import { UseCaseUserFind, UseCaseUserCreate } from '../../usecase/user';
import { UseCaseDesignFind, UseCaseDesignCreate } from '../../usecase/design';

export const providerUseCases = [
  UseCaseUserFind,
  UseCaseUserCreate,
  UseCaseDesignFind,
  UseCaseDesignCreate,
];
