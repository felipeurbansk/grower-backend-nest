import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBaseComponentBody {
  @IsNotEmpty()
  @IsString()
  ip: string;

  @IsNotEmpty()
  @IsString()
  mac: number;
}
