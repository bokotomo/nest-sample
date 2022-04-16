import { IsNotEmpty, MinLength, MaxLength, IsString } from 'class-validator';

/**
 * デザイン作成
 */
export class RequestDesignCreate {
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(30)
  readonly title: string;
}
