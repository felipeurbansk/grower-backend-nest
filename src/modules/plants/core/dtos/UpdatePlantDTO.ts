import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdatePlantDTO {
  @IsOptional()
  @IsString()
  qrcode: string;

  @IsOptional()
  @IsNumber()
  farming_id: number;

  @IsOptional()
  @IsNumber()
  seed_id: number;

  @IsOptional()
  @IsDate()
  init_germination: Date;

  @IsOptional()
  @IsDate()
  init_vegetative: Date;

  @IsOptional()
  @IsDate()
  init_flowering: Date;

  @IsOptional()
  @IsDate()
  init_drying: Date;

  @IsOptional()
  @IsDate()
  init_cure: Date;
}
