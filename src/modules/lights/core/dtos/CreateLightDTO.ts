import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateLightDTO {
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
