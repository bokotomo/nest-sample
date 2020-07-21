import { IsNotEmpty, MinLength, MaxLength, IsString } from 'class-validator';

export class RequestLogin {
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(30)
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(30)
  readonly password: string;
}
