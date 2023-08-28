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
import { CreateLightDTO } from '../core/dtos/CreateLightDTO';
import { UpdateLightDTO } from '../core/dtos/UpdateLightDTO';
import { FilterLightDTO } from '../core/dtos/FilterLightDTO';
import { LightService } from '../core/services';

@Controller('lights')
export class LightControllers {
  constructor(private readonly service: LightService) {}

  @Post()
  async create(@Body() data: CreateLightDTO) {
    return await this.service.create(data);
  }

  @Get()
  async get(@Body() filter: FilterLightDTO) {
    return await this.service.get(filter);
  }

  @Get(':light_id')
  async getById(@Param('light_id', ParseIntPipe) light_id: number) {
    return await this.service.getById(light_id);
  }

  @Put(':light_id')
  async update(
    @Param('light_id', ParseIntPipe) light_id: number,
    @Body() data: UpdateLightDTO,
  ) {
    return await this.service.update(light_id, data);
  }

  @Delete(':light_id')
  async delete(@Param('light_id', ParseIntPipe) light_id: number) {
    return await this.service.delete(light_id);
  }
}
