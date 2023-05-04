import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBody {
  @IsNotEmpty()
  @IsString()
  ip: string;

  @IsNotEmpty()
  @IsString()
  mac: number;
}
