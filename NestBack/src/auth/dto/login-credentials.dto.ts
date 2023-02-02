import { IsNotEmpty, IsString } from 'class-validator';

export class LoginCredentialsDto {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
