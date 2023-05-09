import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthSignInBody {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
