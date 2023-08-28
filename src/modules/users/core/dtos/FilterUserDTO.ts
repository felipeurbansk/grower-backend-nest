import { IsEmail, IsOptional, IsString } from 'class-validator';

export class FilterUserDTO {
  @IsOptional()
  @IsString()
  username: string;

  @IsOptional()
  @IsEmail()
  email: string;
}
