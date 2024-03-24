import { IsNumber, IsOptional, IsString } from 'class-validator';

export class FilterDTO {
  @IsOptional()
  @IsNumber()
  seed_id?: number;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  bank_name?: string;

  @IsOptional()
  @IsNumber()
  vegetative_weeks?: number;

  @IsOptional()
  @IsNumber()
  flowering_weeks?: number;

  @IsOptional()
  @IsNumber()
  per_square_meter: number;
}
