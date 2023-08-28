import { IsNumber, IsOptional, IsString } from 'class-validator';

export class FilterLightDTO {
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
