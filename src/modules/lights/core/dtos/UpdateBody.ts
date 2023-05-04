import { IsNumber, IsString } from 'class-validator';

export class UpdateBody {
  @IsString()
  name: string;

  @IsNumber()
  watts: number;

  @IsNumber()
  lumens: number;
}
