import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTemperatureDTO {
  @IsNotEmpty()
  @IsNumber()
  farming_id: number;

  @IsNotEmpty()
  @IsString()
  // @Transform((param) => parseFloat(String(param)))
  value: string;
}
