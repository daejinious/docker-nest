import {
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

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
  @Matches(/^[a-zA-Z0-9]*$/, {
    message: 'password only accepts english and numbers',
  })
  password: string;
}
