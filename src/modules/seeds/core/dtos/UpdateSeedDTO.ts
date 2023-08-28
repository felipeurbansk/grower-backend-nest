import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateDTO {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  bank_name: string;

  @IsOptional()
  @IsNumber()
  vegetative_weeks: number;

  @IsOptional()
  @IsNumber()
  flowering_weeks: number;

  @IsOptional()
  @IsNumber()
  per_square_meter: number;
}
