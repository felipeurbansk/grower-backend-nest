import { IsDate, IsNotEmpty, IsNumber } from 'class-validator';
import { CreateSeedDTO } from 'src/modules/seeds/core/dtos/CreateSeedDTO';
import { PlantReportDTO } from './report/PlantReportDTO';

export class CreatePlantDTO {
  qrcode?: string;

  @IsNotEmpty()
  @IsNumber()
  farming_id: number;

  @IsNotEmpty()
  @IsNumber()
  seed_id: number;

  @IsNotEmpty()
  @IsDate()
  init_germination?: Date;

  init_vegetative?: Date;

  init_flowering?: Date;

  init_drying?: Date;

  init_cure?: Date;

  seed?: CreateSeedDTO;

  report?: PlantReportDTO;
}
