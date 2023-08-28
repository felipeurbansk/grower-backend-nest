import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSeedDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  bank_name: string;

  @IsNotEmpty()
  @IsNumber()
  vegetative_weeks: number;

  @IsNotEmpty()
  @IsNumber()
  flowering_weeks: number;

  @IsNotEmpty()
  @IsNumber()
  per_square_meter: number;

  @IsNotEmpty()
  @IsNumber()
  user_id: number;
}
