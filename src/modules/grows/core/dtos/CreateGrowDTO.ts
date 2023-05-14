import { IsNotEmpty } from 'class-validator';

export class CreateGrowDTO {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  width: number;

  @IsNotEmpty()
  depth: number;

  @IsNotEmpty()
  height: number;
}
