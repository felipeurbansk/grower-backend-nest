import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateSeedDTO } from 'src/modules/seeds/core/dtos/CreateSeedDTO';
import { PlantReportDTO } from './report/PlantReportDTO';

export class CreatePlantDTO {
  @IsOptional()
  @IsString()
  qrcode?: string;

  // @IsNotEmpty()
  // @IsNumber()
  // farming_id: number;

  @IsNotEmpty()
  @IsNumber()
  seed_id: number;

  @IsNotEmpty()
  @IsDate()
  init_germination?: Date;

  @IsOptional()
  @IsDate()
  init_vegetative?: Date;

  @IsOptional()
  @IsDate()
  init_flowering?: Date;

  @IsOptional()
  @IsDate()
  init_drying?: Date;

  @IsOptional()
  @IsDate()
  init_cure?: Date;

  @IsOptional()
  @ValidateNested({ each: true })
  seed?: CreateSeedDTO;

  @IsOptional()
  @ValidateNested({ each: true })
  report?: PlantReportDTO;
}
