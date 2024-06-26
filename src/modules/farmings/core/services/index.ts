import { Body, Injectable, Param, ParseIntPipe } from '@nestjs/common';
import { CreateFarmingService } from './CreateFarmingService';
import { GetFarmingByIdService } from './GetFarmingByIdService';
import { FilterFarmingService } from './FilterFarmingService';
import { UpdateFarmingService } from './UpdateFarmingService';
import { DeleteFarmingService } from './DeleteFarmingService';

import { CreateFarmingDTO } from '../dtos/CreateFarmingDTO';
import { FilterFarmingDTO } from '../dtos/FilterFarmingDTO';
import { UpdateFarmingDTO } from '../dtos/UpdateFarmingDTO';
import { GetFarmingByBaseComponentIdService } from './GetFarmingByBaseComponentIdService';

@Injectable()
export class FarmingService {
  constructor(
    private readonly createService: CreateFarmingService,
    private readonly filterService: FilterFarmingService,
    private readonly getByIdService: GetFarmingByIdService,
    private readonly getByBaseComponentIdService: GetFarmingByBaseComponentIdService,
    private readonly updateService: UpdateFarmingService,
    private readonly deleteService: DeleteFarmingService,
  ) {}

  async create(data: CreateFarmingDTO) {
    return await this.createService.handle(data);
  }

  async get(filter: FilterFarmingDTO) {
    return await this.filterService.handle(filter);
  }

  async getById(farming_id: number) {
    return await this.getByIdService.handle(farming_id);
  }

  async getByBaseComponentId(
    @Param('base_component_id', ParseIntPipe) base_component_id: number,
  ) {
    return await this.getByBaseComponentIdService.handle(base_component_id);
  }

  async update(farming_id: number, data: UpdateFarmingDTO) {
    return await this.updateService.handle(farming_id, data);
  }

  async delete(farming_id: number) {
    return await this.deleteService.handle(farming_id);
  }
}
