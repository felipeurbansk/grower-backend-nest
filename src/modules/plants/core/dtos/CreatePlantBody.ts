import { IsDate, IsNotEmpty, IsNumber } from 'class-validator';

export class CreatePlantBody {
  @IsNotEmpty()
  @IsNumber()
  farming_id: number;

  @IsNotEmpty()
  @IsNumber()
  seed_id: number;

  @IsNotEmpty()
  @IsDate()
  init_germination: Date;

  init_vegetative: Date;

  init_flowering: Date;

  init_drying: Date;

  init_cure: Date;

  qrcode: string;
}
