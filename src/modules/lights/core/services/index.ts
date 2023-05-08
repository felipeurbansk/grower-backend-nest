import { Body, Injectable, Param, ParseIntPipe } from '@nestjs/common';
import { CreateService } from './CreateService';
import { GetByIdService } from './GetByIdService';
import { FilterService } from './FilterService';
import { UpdateService } from './UpdateService';
import { DeleteService } from './DeleteService';

import { CreateBody } from '../dtos/CreateBody';
import { FilterBody } from '../dtos/FilterBody';
import { UpdateBody } from '../dtos/UpdateBody';

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

  async getById(@Param('light_id', ParseIntPipe) light_id: number) {
    return await this.getByIdService.handle(light_id);
  }

  async update(
    @Param('light_id', ParseIntPipe) light_id: number,
    @Body() data: UpdateBody,
  ) {
    return await this.updateService.handle(light_id, data);
  }

  async delete(@Param('light_id', ParseIntPipe) light_id: number) {
    return await this.deleteService.handle(light_id);
  }
}
