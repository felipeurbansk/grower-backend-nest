import { IsNumber, IsString } from 'class-validator';

export class FilterBody {
  @IsString()
  name: string;

  @IsNumber()
  watts: number;

  @IsNumber()
  lumens: number;
}
