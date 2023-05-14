import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateHumidityDTO {
  @IsNotEmpty()
  @IsNumber()
  farming_id: number;

  @IsNotEmpty()
  @IsString()
  value: string;
}
