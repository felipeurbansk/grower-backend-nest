import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateGrowDTO {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsNumber()
  width: number;

  @IsOptional()
  @IsNumber()
  depth: number;

  @IsOptional()
  @IsNumber()
  height: number;
}
