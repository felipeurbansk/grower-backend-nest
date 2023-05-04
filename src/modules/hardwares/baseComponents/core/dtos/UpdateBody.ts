import { IsString } from 'class-validator';

export class UpdateBody {
  @IsString()
  ip: string;

  @IsString()
  mac: number;
}
