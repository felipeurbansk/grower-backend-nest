import { Body, Injectable, Param, ParseIntPipe } from '@nestjs/common';
import { CreateBody } from '../dtos/CreateBody';
import { CreateService } from './CreateService';
import { GetByIdService } from './GetByIdService';
import { FilterService } from './FilterService';
import { UpdateService } from './UpdateService';

import { FilterBody } from '../dtos/FilterBody';
import { UpdateBody } from '../dtos/UpdateBody';
import { DeleteService } from './DeleteService';

@Injectable()
export class Service {
  constructor(
    private readonly createService: CreateService,
    private readonly filterService: FilterService,
    private readonly getByIdService: GetByIdService,
    private readonly updateService: UpdateService,
    private readonly deleteService: DeleteService,
  ) {}

  async create(@Body() data: CreateBody) {
    return await this.createService.handle(data);
  }

  async get(@Body() filter: FilterBody) {
    return await this.filterService.handle(filter);
  }

  async getById(@Param('grow_id', ParseIntPipe) grow_id: number) {
    return await this.getByIdService.handle(grow_id);
  }

  async update(
    @Param('grow_id', ParseIntPipe) grow_id: number,
    @Body() data: UpdateBody,
  ) {
    return await this.updateService.handle(grow_id, data);
  }

  async delete(@Param('grow_id', ParseIntPipe) grow_id: number) {
    return await this.deleteService.handle(grow_id);
  }
}