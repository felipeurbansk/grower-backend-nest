import { IsNumber, IsString } from 'class-validator';

export class UpdateBody {
  @IsNumber()
  base_component_id: number;

  @IsNumber()
  farming_id: number;

  @IsString()
  value: string;
}
