import { Body, Injectable, Param, ParseIntPipe } from '@nestjs/common';
import { CreateSeedService } from './CreateSeedService';
import { GetSeedByIdService } from './GetSeedByIdService';
import { FilterSeedService } from './FilterSeedService';
import { UpdateSeedService } from './UpdateSeedService';
import { DeleteSeedService } from './DeleteSeedService';

import { CreateSeedBody } from '../dtos/CreateSeedBody';
import { FilterBody } from '../dtos/FilterSeedBody';
import { UpdateBody } from '../dtos/UpdateSeedBody';

@Injectable()
export class SeedService {
  constructor(
    private readonly createService: CreateSeedService,
    private readonly filterService: FilterSeedService,
    private readonly getByIdService: GetSeedByIdService,
    private readonly updateService: UpdateSeedService,
    private readonly deleteService: DeleteSeedService,
  ) {}

  async create(@Body() data: CreateSeedBody) {
    return await this.createService.handle(data);
  }

  async get(@Body() filter: FilterBody) {
    return await this.filterService.handle(filter);
  }

  async getById(@Param('seed_id', ParseIntPipe) seed_id: number) {
    return await this.getByIdService.handle(seed_id);
  }

  async update(
    @Param('seed_id', ParseIntPipe) seed_id: number,
    @Body() data: UpdateBody,
  ) {
    return await this.updateService.handle(seed_id, data);
  }

  async delete(@Param('seed_id', ParseIntPipe) seed_id: number) {
    return await this.deleteService.handle(seed_id);
  }
}
