import { Body, Injectable, Param, ParseIntPipe } from '@nestjs/common';
import { CreateLightService } from './CreateLightService';
import { GetLightByIdService } from './GetLightByIdService';
import { FilterLightService } from './FilterLightService';
import { UpdateLightService } from './UpdateLightService';
import { DeleteLightService } from './DeleteLightService';

import { CreateLightBody } from '../dtos/CreateLightBody';
import { FilterLightBody } from '../dtos/FilterLightBody';
import { UpdateLightBody } from '../dtos/UpdateLightBody';

@Injectable()
export class LightService {
  constructor(
    private readonly createService: CreateLightService,
    private readonly filterService: FilterLightService,
    private readonly getByIdService: GetLightByIdService,
    private readonly updateService: UpdateLightService,
    private readonly deleteService: DeleteLightService,
  ) {}

  async create(@Body() data: CreateLightBody) {
    return await this.createService.handle(data);
  }

  async get(@Body() filter: FilterLightBody) {
    return await this.filterService.handle(filter);
  }

  async getById(@Param('light_id', ParseIntPipe) light_id: number) {
    return await this.getByIdService.handle(light_id);
  }

  async update(
    @Param('light_id', ParseIntPipe) light_id: number,
    @Body() data: UpdateLightBody,
  ) {
    return await this.updateService.handle(light_id, data);
  }

  async delete(@Param('light_id', ParseIntPipe) light_id: number) {
    return await this.deleteService.handle(light_id);
  }
}
