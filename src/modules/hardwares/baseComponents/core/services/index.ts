import { Body, Injectable, Param, ParseIntPipe } from '@nestjs/common';
import { CreateBaseComponentService } from './CreateBaseComponentService';
import { GetBaseComponentByIdService } from './GetBaseComponentByIdService';
import { FilterBaseComponentService } from './FilterBaseComponentService';
import { UpdateBaseComponentService } from './UpdateBaseComponentService';

import { CreateBaseComponentDTO } from '../dtos/CreateBaseComponentDTO';
import { FilterBaseComponentDTO } from '../dtos/FilterBaseComponentDTO';
import { UpdateBaseComponentDTO } from '../dtos/UpdateBaseComponentDTO';
import { DeleteBaseComponentService } from './DeleteBaseComponentService';

@Injectable()
export class BaseComponentService {
  constructor(
    private readonly createService: CreateBaseComponentService,
    private readonly filterService: FilterBaseComponentService,
    private readonly getByIdService: GetBaseComponentByIdService,
    private readonly updateService: UpdateBaseComponentService,
    private readonly deleteService: DeleteBaseComponentService,
  ) {}

  async create(@Body() data: CreateBaseComponentDTO) {
    return await this.createService.handle(data);
  }

  async get(@Body() filter: FilterBaseComponentDTO) {
    return await this.filterService.handle(filter);
  }

  async getById(
    @Param('base_component_id', ParseIntPipe) base_component_id: number,
  ) {
    return await this.getByIdService.handle(base_component_id);
  }

  async update(
    @Param('base_component_id', ParseIntPipe) base_component_id: number,
    @Body() data: UpdateBaseComponentDTO,
  ) {
    return await this.updateService.handle(base_component_id, data);
  }

  async delete(
    @Param('base_component_id', ParseIntPipe) base_component_id: number,
  ) {
    return await this.deleteService.handle(base_component_id);
  }
}
