import { Body, Injectable, Param, ParseIntPipe } from '@nestjs/common';
import { CreateHumidityService } from './CreateHumidityService';
import { GetHumidityByIdService } from './GetHumidityByIdService';
import { FilterHumidityService } from './FilterHumidityService';
import { UpdateHumidityService } from './UpdateHumidityService';

import { CreateHumidityDTO } from '../dtos/CreateHumidityDTO';
import { FilterHumidityDTO } from '../dtos/FilterHumidityDTO';
import { UpdateHumidityDTO } from '../dtos/UpdateHumidityDTO';
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

  async create(@Body() data: CreateHumidityDTO) {
    return await this.createService.handle(data);
  }

  async get(@Body() filter: FilterHumidityDTO) {
    return await this.filterService.handle(filter);
  }

  async getById(@Param('humidty_id', ParseIntPipe) humidty_id: number) {
    return await this.getByIdService.handle(humidty_id);
  }

  async update(
    @Param('humidty_id', ParseIntPipe) humidty_id: number,
    @Body() data: UpdateHumidityDTO,
  ) {
    return await this.updateService.handle(humidty_id, data);
  }

  async delete(@Param('humidty_id', ParseIntPipe) humidty_id: number) {
    return await this.deleteService.handle(humidty_id);
  }
}
