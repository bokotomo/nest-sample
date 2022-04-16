import { CommandControllerUser } from '../../command/controller/user';
import { CommandControllerDesign } from '../../command/controller/design';
import { CommandControllerAuth } from '../../command/controller/auth';
import { QueryControllerUser } from '../../query/controller/user';
import { QueryControllerDesign } from '../../query/controller/design';
import { QueryControllerAuth } from '../../query/controller/auth';

export const providerControllers = [
  CommandControllerAuth,
  CommandControllerUser,
  CommandControllerDesign,

  QueryControllerAuth,
  QueryControllerUser,
  QueryControllerDesign,
];
