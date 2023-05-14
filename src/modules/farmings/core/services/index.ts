import { Body, Injectable, Param, ParseIntPipe } from '@nestjs/common';
import { CreateFarmingService } from './CreateFarmingService';
import { GetFarmingByIdService } from './GetFarmingByIdService';
import { FilterFarmingService } from './FilterFarmingService';
import { UpdateFarmingService } from './UpdateFarmingService';
import { DeleteFarmingService } from './DeleteFarmingService';

import { CreateFarmingDTO } from '../dtos/CreateFarmingDTO';
import { FilterFarmingDTO } from '../dtos/FilterFarmingDTO';
import { UpdateFarmingDTO } from '../dtos/UpdateFarmingDTO';

@Injectable()
export class FarmingService {
  constructor(
    private readonly createService: CreateFarmingService,
    private readonly filterService: FilterFarmingService,
    private readonly getByIdService: GetFarmingByIdService,
    private readonly updateService: UpdateFarmingService,
    private readonly deleteService: DeleteFarmingService,
  ) {}

  async create(@Body() data: CreateFarmingDTO) {
    return await this.createService.handle(data);
  }

  async get(@Body() filter: FilterFarmingDTO) {
    return await this.filterService.handle(filter);
  }

  async getById(@Param('farming_id', ParseIntPipe) farming_id: number) {
    return await this.getByIdService.handle(farming_id);
  }

  async update(
    @Param('farming_id', ParseIntPipe) farming_id: number,
    @Body() data: UpdateFarmingDTO,
  ) {
    return await this.updateService.handle(farming_id, data);
  }

  async delete(@Param('farming_id', ParseIntPipe) farming_id: number) {
    return await this.deleteService.handle(farming_id);
  }
}
