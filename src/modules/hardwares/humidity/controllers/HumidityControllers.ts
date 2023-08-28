import { CreateHumidityDTO } from '../core/dtos/CreateHumidityDTO';
import { UpdateHumidityDTO } from '../core/dtos/UpdateHumidityDTO';
import { FilterHumidityDTO } from '../core/dtos/FilterHumidityDTO';
import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Put,
  ParseIntPipe,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { HumidityService } from '../core/services';

@Controller('humidities')
export class HumidityControllers {
  constructor(private readonly service: HumidityService) {}

  @Post()
  async create(@Body() data: CreateHumidityDTO) {
    return await this.service.create(data);
  }

  @Get()
  async get(@Body() filter: FilterHumidityDTO) {
    return await this.service.get(filter);
  }

  @Get(':humidty_id')
  async getById(@Param('humidty_id', ParseIntPipe) humidty_id: number) {
    return await this.service.getById(humidty_id);
  }

  @Put(':humidty_id')
  async update(
    @Param('humidty_id', ParseIntPipe) humidty_id: number,
    @Body() data: UpdateHumidityDTO,
  ) {
    return await this.service.update(humidty_id, data);
  }

  @Delete(':humidty_id')
  async delete(@Param('humidty_id', ParseIntPipe) humidty_id: number) {
    return await this.service.delete(humidty_id);
  }
}
