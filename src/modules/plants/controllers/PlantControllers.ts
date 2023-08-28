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
import { PlantService } from '../core/services';
import { CreatePlantDTO } from '../core/dtos/CreatePlantDTO';
import { UpdatePlantDTO } from '../core/dtos/UpdatePlantDTO';
import { FilterPlantDTO } from '../core/dtos/FilterPlantDTO';

@Controller('plants')
export class PlantControllers {
  constructor(private readonly service: PlantService) {}

  @Post()
  async create(@Body() data: CreatePlantDTO) {
    return await this.service.create(data);
  }

  @Get()
  async get(@Body() filter: FilterPlantDTO) {
    return await this.service.get(filter);
  }

  @Get(':plant_id')
  async getById(@Param('plant_id', ParseIntPipe) plant_id: number) {
    return await this.service.getById(plant_id);
  }

  @Put(':plant_id')
  async update(
    @Param('plant_id', ParseIntPipe) plant_id: number,
    @Body() data: UpdatePlantDTO,
  ) {
    return await this.service.update(plant_id, data);
  }

  @Delete(':plant_id')
  async delete(@Param('plant_id', ParseIntPipe) plant_id: number) {
    return await this.service.delete(plant_id);
  }
}
