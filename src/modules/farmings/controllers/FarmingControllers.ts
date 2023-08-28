import { CreateFarmingDTO } from '../core/dtos/CreateFarmingDTO';
import { UpdateFarmingDTO } from '../core/dtos/UpdateFarmingDTO';
import { FilterFarmingDTO } from '../core/dtos/FilterFarmingDTO';
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
import { FarmingService } from '../core/services';

@Controller('farmings')
export class FarmingControllers {
  constructor(private readonly service: FarmingService) {}

  @Post()
  async create(@Body() data: CreateFarmingDTO) {
    return await this.service.create(data);
  }

  @Get()
  async get(@Body() filter: FilterFarmingDTO) {
    return await this.service.get(filter);
  }

  @Get(':farming_id')
  async getById(@Param('farming_id', ParseIntPipe) farming_id: number) {
    return await this.service.getById(farming_id);
  }

  @Get('base_component/:base_component_id')
  async getByBaseComponentId(
    @Param('base_component_id', ParseIntPipe) farming_id: number,
  ) {
    return await this.service.getByBaseComponentId(farming_id);
  }

  @Put(':farming_id')
  async update(
    @Param('farming_id', ParseIntPipe) farming_id: number,
    @Body() data: UpdateFarmingDTO,
  ) {
    return await this.service.update(farming_id, data);
  }

  @Delete(':farming_id')
  async delete(@Param('farming_id', ParseIntPipe) farming_id: number) {
    return await this.service.delete(farming_id);
  }
}
