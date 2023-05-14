import { Body, Injectable, Param, ParseIntPipe } from '@nestjs/common';
import { CreateLightService } from './CreateLightService';
import { GetLightByIdService } from './GetLightByIdService';
import { FilterLightService } from './FilterLightService';
import { UpdateLightService } from './UpdateLightService';
import { DeleteLightService } from './DeleteLightService';

import { CreateLightDTO } from '../dtos/CreateLightDTO';
import { FilterLightDTO } from '../dtos/FilterLightDTO';
import { UpdateLightDTO } from '../dtos/UpdateLightDTO';

@Injectable()
export class LightService {
  constructor(
    private readonly createService: CreateLightService,
    private readonly filterService: FilterLightService,
    private readonly getByIdService: GetLightByIdService,
    private readonly updateService: UpdateLightService,
    private readonly deleteService: DeleteLightService,
  ) {}

  async create(@Body() data: CreateLightDTO) {
    return await this.createService.handle(data);
  }

  async get(@Body() filter: FilterLightDTO) {
    return await this.filterService.handle(filter);
  }

  async getById(@Param('light_id', ParseIntPipe) light_id: number) {
    return await this.getByIdService.handle(light_id);
  }

  async update(
    @Param('light_id', ParseIntPipe) light_id: number,
    @Body() data: UpdateLightDTO,
  ) {
    return await this.updateService.handle(light_id, data);
  }

  async delete(@Param('light_id', ParseIntPipe) light_id: number) {
    return await this.deleteService.handle(light_id);
  }
}
