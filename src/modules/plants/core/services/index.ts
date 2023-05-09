import { Body, Injectable, Param, ParseIntPipe } from '@nestjs/common';
import { CreatePlantService } from './CreatePlantService';
import { GetPlantByIdService } from './GetPlantByIdService';
import { FilterPlantService } from './FilterPlantService';
import { UpdatePlantService } from './UpdatePlantService';

import { CreatePlantBody } from '../dtos/CreatePlantBody';
import { FilterPlantBody } from '../dtos/FilterPlantBody';
import { UpdatePlantBody } from '../dtos/UpdatePlantBody';
import { DeletePlantService } from './DeletePlantService';

@Injectable()
export class PlantService {
  constructor(
    private readonly createPlantService: CreatePlantService,
    private readonly filterPlantService: FilterPlantService,
    private readonly getPlantByIdService: GetPlantByIdService,
    private readonly updatePlantService: UpdatePlantService,
    private readonly deletePlantService: DeletePlantService,
  ) {}

  async create(@Body() data: CreatePlantBody) {
    return await this.createPlantService.handle(data);
  }

  async get(@Body() filter: FilterPlantBody) {
    return await this.filterPlantService.handle(filter);
  }

  async getById(@Param('plant_id', ParseIntPipe) plant_id: number) {
    return await this.getPlantByIdService.handle(plant_id);
  }

  async update(
    @Param('plant_id', ParseIntPipe) plant_id: number,
    @Body() data: UpdatePlantBody,
  ) {
    return await this.updatePlantService.handle(plant_id, data);
  }

  async delete(@Param('plant_id', ParseIntPipe) plant_id: number) {
    return await this.deletePlantService.handle(plant_id);
  }
}
