import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateLightDTO {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsNumber()
  watts: number;

  @IsOptional()
  @IsNumber()
  lumens: number;
}
