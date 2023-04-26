import { IsNotEmpty } from 'class-validator';

export class CreateGrowBody {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  width: number;

  @IsNotEmpty()
  depth: number;

  @IsNotEmpty()
  height: number;
}
