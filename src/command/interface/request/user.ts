import {
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsString,
  IsNumber,
  IsPositive,
} from 'class-validator';

/**
 * ユーザー作成
 */
export class RequestUserCreate {
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(30)
  readonly name: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly age: number;

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

  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(10)
  readonly role: string;
}
