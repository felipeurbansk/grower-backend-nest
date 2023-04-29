import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBody {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  watts: number;

  @IsNotEmpty()
  @IsNumber()
  lumens: number;
}
