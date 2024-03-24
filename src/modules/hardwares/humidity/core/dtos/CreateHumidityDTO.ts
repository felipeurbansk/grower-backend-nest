import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateHumidityDTO {
  @IsNotEmpty()
  @IsNumber()
  farming_id: number;

  @IsNotEmpty()
  @IsNumber()
  value: number;
}
