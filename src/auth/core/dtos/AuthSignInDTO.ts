import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthSignInDTO {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
