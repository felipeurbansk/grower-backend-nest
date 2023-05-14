import { Body, Injectable, Param, ParseIntPipe } from '@nestjs/common';
import { CreatePlantService } from './CreatePlantService';
import { GetPlantByIdService } from './GetPlantByIdService';
import { FilterPlantService } from './FilterPlantService';
import { UpdatePlantService } from './UpdatePlantService';

import { CreatePlantDTO } from '../dtos/CreatePlantDTO';
import { FilterPlantDTO } from '../dtos/FilterPlantDTO';
import { UpdatePlantDTO } from '../dtos/UpdatePlantDTO';
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

  async create(@Body() data: CreatePlantDTO) {
    return await this.createPlantService.handle(data);
  }

  async get(@Body() filter: FilterPlantDTO) {
    return await this.filterPlantService.handle(filter);
  }

  async getById(@Param('plant_id', ParseIntPipe) plant_id: number) {
    return await this.getPlantByIdService.handle(plant_id);
  }

  async update(
    @Param('plant_id', ParseIntPipe) plant_id: number,
    @Body() data: UpdatePlantDTO,
  ) {
    return await this.updatePlantService.handle(plant_id, data);
  }

  async delete(@Param('plant_id', ParseIntPipe) plant_id: number) {
    return await this.deletePlantService.handle(plant_id);
  }
}
