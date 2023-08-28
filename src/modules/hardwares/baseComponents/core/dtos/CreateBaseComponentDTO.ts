import { IsIP, IsMACAddress, IsNotEmpty } from 'class-validator';

export class CreateBaseComponentDTO {
  @IsNotEmpty()
  @IsIP()
  ip: string;

  @IsNotEmpty()
  @IsMACAddress()
  mac: string;
}
