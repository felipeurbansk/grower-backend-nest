import { CreateTemperatureDTO } from '../core/dtos/CreateTemperatureDTO';
import { UpdateTemperatureDTO } from '../core/dtos/UpdateTemperatureDTO';
import { FilterTemperatureDTO } from '../core/dtos/FilterTemperatureDTO';
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
import { TemperatureService } from '../core/services';

@Controller('temperatures')
export class TemperatureControllers {
  constructor(private readonly service: TemperatureService) {}

  @Post()
  async create(@Body() data: CreateTemperatureDTO) {
    return await this.service.create(data);
  }

  @Get()
  async get(@Body() filter: FilterTemperatureDTO) {
    return await this.service.get(filter);
  }

  @Get(':temperature_id')
  async getById(@Param('temperature_id', ParseIntPipe) temperature_id: number) {
    return await this.service.getById(temperature_id);
  }

  @Put(':temperature_id')
  async update(
    @Param('temperature_id', ParseIntPipe) temperature_id: number,
    @Body() data: UpdateTemperatureDTO,
  ) {
    return await this.service.update(temperature_id, data);
  }

  @Delete(':temperature_id')
  async delete(@Param('temperature_id', ParseIntPipe) temperature_id: number) {
    return await this.service.delete(temperature_id);
  }
}
