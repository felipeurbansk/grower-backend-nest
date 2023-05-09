import { Body, Injectable, Param, ParseIntPipe } from '@nestjs/common';
import { CreateTemperatureBody } from '../dtos/CreateTemperatureBody';
import { CreateTemperatureService } from './CreateTemperatureService';
import { GetTemperatureByIdService } from './GetTemperatureByIdService';
import { FilterTemperatureService } from './FilterTemperatureService';
import { UpdateTemperatureService } from './UpdateTemperatureService';

import { FilterTemperatureBody } from '../dtos/FilterTemperatureBody';
import { UpdateTemperatureBody } from '../dtos/UpdateTemperatureBody';
import { DeleteTemperatureService } from './DeleteTemperatureService';

@Injectable()
export class TemperatureService {
  constructor(
    private readonly createService: CreateTemperatureService,
    private readonly filterService: FilterTemperatureService,
    private readonly getByIdService: GetTemperatureByIdService,
    private readonly updateService: UpdateTemperatureService,
    private readonly deleteService: DeleteTemperatureService,
  ) {}

  async create(@Body() data: CreateTemperatureBody) {
    return await this.createService.handle(data);
  }

  async get(@Body() filter: FilterTemperatureBody) {
    return await this.filterService.handle(filter);
  }

  async getById(@Param('temperature_id', ParseIntPipe) temperature_id: number) {
    return await this.getByIdService.handle(temperature_id);
  }

  async update(
    @Param('temperature_id', ParseIntPipe) temperature_id: number,
    @Body() data: UpdateTemperatureBody,
  ) {
    return await this.updateService.handle(temperature_id, data);
  }

  async delete(@Param('temperature_id', ParseIntPipe) temperature_id: number) {
    return await this.deleteService.handle(temperature_id);
  }
}
