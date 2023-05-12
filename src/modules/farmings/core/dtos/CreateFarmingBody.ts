import { IsArray, IsNotEmpty, IsNumber, ValidateNested } from 'class-validator';
import { CreatePlantBody } from 'src/modules/plants/core/dtos/CreatePlantBody';
import { CreateSeedBody } from 'src/modules/seeds/core/dtos/CreateSeedBody';

export class CreateFarmingBody {
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
  plants: CreatePlantBody[];
}
