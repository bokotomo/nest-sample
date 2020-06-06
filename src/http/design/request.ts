import { IsNotEmpty, MinLength, MaxLength, IsString } from 'class-validator';

export class RequestCreate {
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(30)
  readonly title: string;
}
