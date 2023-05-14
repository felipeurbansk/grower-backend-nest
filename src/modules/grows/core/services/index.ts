import { Body, Injectable, Param, ParseIntPipe } from '@nestjs/common';
import { CreateGrowDTO } from '../dtos/CreateGrowDTO';
import { CreateGrowService } from './CreateGrowService';
import { GetGrowByIdService } from './GetGrowByIdService';
import { FilterGrowService } from './FilterGrowService';
import { UpdateGrowService } from './UpdateGrowService';

import { FilterGrowDTO } from '../dtos/FilterGrowDTO';
import { UpdateGrowDTO } from '../dtos/UpdateGrowDTO';
import { DeleteGrowService } from './DeleteGrowService';

@Injectable()
export class GrowService {
  constructor(
    private readonly createService: CreateGrowService,
    private readonly filterService: FilterGrowService,
    private readonly getByIdService: GetGrowByIdService,
    private readonly updateService: UpdateGrowService,
    private readonly deleteService: DeleteGrowService,
  ) {}

  async create(@Body() data: CreateGrowDTO) {
    return await this.createService.handle(data);
  }

  async get(@Body() filter: FilterGrowDTO) {
    return await this.filterService.handle(filter);
  }

  async getById(@Param('grow_id', ParseIntPipe) grow_id: number) {
    return await this.getByIdService.handle(grow_id);
  }

  async update(
    @Param('grow_id', ParseIntPipe) grow_id: number,
    @Body() data: UpdateGrowDTO,
  ) {
    return await this.updateService.handle(grow_id, data);
  }

  async delete(@Param('grow_id', ParseIntPipe) grow_id: number) {
    return await this.deleteService.handle(grow_id);
  }
}
