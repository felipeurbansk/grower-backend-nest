import { Body, Injectable, Param, ParseIntPipe } from '@nestjs/common';
import { CreateHumidityBody } from '../dtos/CreateHumidityBody';
import { CreateHumidityService } from './CreateHumidityService';
import { GetHumidityByIdService } from './GetHumidityByIdService';
import { FilterHumidityService } from './FilterHumidityService';
import { UpdateHumidityService } from './UpdateHumidityService';

import { FilterHumidityBody } from '../dtos/FilterHumidityBody';
import { UpdateHumidityBody } from '../dtos/UpdateHumidityBody';
import { DeleteHumidityService } from './DeleteHumidityService';

@Injectable()
export class HumidityService {
  constructor(
    private readonly createService: CreateHumidityService,
    private readonly filterService: FilterHumidityService,
    private readonly getByIdService: GetHumidityByIdService,
    private readonly updateService: UpdateHumidityService,
    private readonly deleteService: DeleteHumidityService,
  ) {}

  async create(@Body() data: CreateHumidityBody) {
    return await this.createService.handle(data);
  }

  async get(@Body() filter: FilterHumidityBody) {
    return await this.filterService.handle(filter);
  }

  async getById(@Param('humidty_id', ParseIntPipe) humidty_id: number) {
    return await this.getByIdService.handle(humidty_id);
  }

  async update(
    @Param('humidty_id', ParseIntPipe) humidty_id: number,
    @Body() data: UpdateHumidityBody,
  ) {
    return await this.updateService.handle(humidty_id, data);
  }

  async delete(@Param('humidty_id', ParseIntPipe) humidty_id: number) {
    return await this.deleteService.handle(humidty_id);
  }
}
