import { IsIP, IsMACAddress, IsOptional } from 'class-validator';

export class FilterBaseComponentDTO {
  @IsOptional()
  @IsIP()
  ip?: string;

  @IsOptional()
  @IsMACAddress()
  mac?: string;
}
