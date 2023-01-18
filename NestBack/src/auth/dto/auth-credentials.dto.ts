import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class AuthCredentialsDto {
  @IsString()
  @MinLength(4)
  @MaxLength(40)
  userId: string;

  @IsString()
  username: string;

  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(40)
  password: string;
}
