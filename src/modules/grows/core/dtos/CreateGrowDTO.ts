import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateGrowDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  width: number;

  @IsNotEmpty()
  @IsNumber()
  depth: number;

  @IsNotEmpty()
  @IsNumber()
  height: number;
}
