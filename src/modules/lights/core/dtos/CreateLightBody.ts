import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateLightBody {
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
