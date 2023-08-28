import { IsNumber, IsObject, IsOptional } from 'class-validator';

export class UpdateFarmingDTO {
  @IsOptional()
  @IsNumber()
  light_id: number;

  @IsOptional()
  @IsNumber()
  grow_id: number;

  @IsOptional()
  @IsNumber()
  base_component_id: number;

  @IsOptional()
  @IsObject()
  plants: object;
}
