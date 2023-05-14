import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBaseComponentDTO {
  @IsNotEmpty()
  @IsString()
  ip: string;

  @IsNotEmpty()
  @IsString()
  mac: number;
}
