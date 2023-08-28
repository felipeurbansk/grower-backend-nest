import { IsDate, IsOptional } from 'class-validator';

export class PlantReportDTO {
  @IsOptional()
  @IsDate()
  ended_germination?: Date;

  @IsOptional()
  @IsDate()
  ended_vegetative?: Date;

  @IsOptional()
  @IsDate()
  ended_flowering?: Date;

  @IsOptional()
  @IsDate()
  ended_drying?: Date;

  @IsOptional()
  @IsDate()
  ended_cure?: Date;
}
