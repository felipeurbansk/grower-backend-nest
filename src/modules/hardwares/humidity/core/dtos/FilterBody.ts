import { IsNumber } from 'class-validator';

export class FilterBody {
  @IsNumber()
  base_component_id: number;

  @IsNumber()
  farming_id: number;
}
