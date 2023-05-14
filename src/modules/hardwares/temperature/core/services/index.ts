import { Body, Injectable, Param, ParseIntPipe } from '@nestjs/common';
import { CreateTemperatureService } from './CreateTemperatureService';
import { GetTemperatureByIdService } from './GetTemperatureByIdService';
import { FilterTemperatureService } from './FilterTemperatureService';
import { UpdateTemperatureService } from './UpdateTemperatureService';
import { DeleteTemperatureService } from './DeleteTemperatureService';

import { CreateTemperatureDTO } from '../dtos/CreateTemperatureDTO';
import { FilterTemperatureDTO } from '../dtos/FilterTemperatureDTO';
import { UpdateTemperatureDTO } from '../dtos/UpdateTemperatureDTO';

@Injectable()
export class TemperatureService {
  constructor(
    private readonly createService: CreateTemperatureService,
    private readonly filterService: FilterTemperatureService,
    private readonly getByIdService: GetTemperatureByIdService,
    private readonly updateService: UpdateTemperatureService,
    private readonly deleteService: DeleteTemperatureService,
  ) {}

  async create(@Body() data: CreateTemperatureDTO) {
    return await this.createService.handle(data);
  }

  async get(@Body() filter: FilterTemperatureDTO) {
    return await this.filterService.handle(filter);
  }

  async getById(@Param('temperature_id', ParseIntPipe) temperature_id: number) {
    return await this.getByIdService.handle(temperature_id);
  }

  async update(
    @Param('temperature_id', ParseIntPipe) temperature_id: number,
    @Body() data: UpdateTemperatureDTO,
  ) {
    return await this.updateService.handle(temperature_id, data);
  }

  async delete(@Param('temperature_id', ParseIntPipe) temperature_id: number) {
    return await this.deleteService.handle(temperature_id);
  }
}
