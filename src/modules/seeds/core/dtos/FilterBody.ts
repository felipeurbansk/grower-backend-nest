import { IsNumber, IsString } from 'class-validator';

export class FilterBody {
  @IsString()
  name: string;

  @IsString()
  bank_name: string;

  @IsNumber()
  vegetative_weeks: number;

  @IsNumber()
  flowering_weeks: number;

  @IsNumber()
  per_square_meter: number;
}
