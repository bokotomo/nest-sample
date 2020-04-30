import {
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsString,
  IsNumber,
  IsPositive,
} from 'class-validator';

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
}