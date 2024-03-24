import { IsNumber, IsOptional } from 'class-validator';

export class FilterFarmingDTO {
  @IsOptional()
  @IsNumber()
  light_id?: number;

  @IsOptional()
  @IsNumber()
  grow_id?: number;

  @IsOptional()
  @IsNumber()
  base_component_id?: number;
}
