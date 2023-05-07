import { IsNumber, IsString } from 'class-validator';

export class UpdateBody {
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
