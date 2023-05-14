import { IsArray, IsNotEmpty, IsNumber, ValidateNested } from 'class-validator';
import { CreatePlantDTO } from 'src/modules/plants/core/dtos/CreatePlantDTO';

export class CreateFarmingDTO {
  @IsNotEmpty()
  @IsNumber()
  user_id: number;

  @IsNotEmpty()
  @IsNumber()
  light_id: number;

  @IsNotEmpty()
  @IsNumber()
  grow_id: number;

  @IsNotEmpty()
  @IsNumber()
  base_component_id: number;

  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  plants: CreatePlantDTO[];
}
