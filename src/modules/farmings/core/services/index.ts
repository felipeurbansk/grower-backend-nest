import { Body, Injectable, Param, ParseIntPipe } from '@nestjs/common';
import { CreateFarmingService } from './CreateFarmingService';
import { GetFarmingByIdService } from './GetFarmingByIdService';
import { FilterFarmingService } from './FilterFarmingService';
import { UpdateFarmingService } from './UpdateFarmingService';
import { DeleteFarmingService } from './DeleteFarmingService';

import { CreateFarmingBody } from '../dtos/CreateFarmingBody';
import { FilterBody } from '../dtos/FilterFarmingBody';
import { UpdateBody } from '../dtos/UpdateFarmingBody';

@Injectable()
export class FarmingService {
  constructor(
    private readonly createService: CreateFarmingService,
    private readonly filterService: FilterFarmingService,
    private readonly getByIdService: GetFarmingByIdService,
    private readonly updateService: UpdateFarmingService,
    private readonly deleteService: DeleteFarmingService,
  ) {}

  async create(@Body() data: CreateFarmingBody) {
    return await this.createService.handle(data);
  }

  async get(@Body() filter: FilterBody) {
    return await this.filterService.handle(filter);
  }

  async getById(@Param('farming_id', ParseIntPipe) farming_id: number) {
    return await this.getByIdService.handle(farming_id);
  }

  async update(
    @Param('farming_id', ParseIntPipe) farming_id: number,
    @Body() data: UpdateBody,
  ) {
    return await this.updateService.handle(farming_id, data);
  }

  async delete(@Param('farming_id', ParseIntPipe) farming_id: number) {
    return await this.deleteService.handle(farming_id);
  }
}
