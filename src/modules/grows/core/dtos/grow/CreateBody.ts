import { IsNotEmpty } from 'class-validator';

export class CreateBody {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  width: number;

  @IsNotEmpty()
  depth: number;

  @IsNotEmpty()
  height: number;
}
