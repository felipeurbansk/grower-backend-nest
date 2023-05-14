import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTemperatureDTO {
  @IsNotEmpty()
  @IsNumber()
  base_component_id: number;

  @IsNotEmpty()
  @IsNumber()
  farming_id: number;

  @IsNotEmpty()
  @IsString()
  value: string;
}
