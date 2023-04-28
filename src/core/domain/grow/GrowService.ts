import { Body, Injectable, Param, ParseIntPipe } from '@nestjs/common';
import { CreateGrowBody } from 'src/core/dtos/grow/CreateGrowBody';
import { CreateGrowService } from './CreateGrowService';
import { GetByIdGrowService } from './GetByIdGrowService';
import { FilterGrowService } from './FilterGrowService';
import { UpdateGrowService } from './UpdateGrowService';

import { FilterGrowBody } from 'src/core/dtos/grow/FilterGrowBody';
import { UpdateGrowBody } from 'src/core/dtos/grow/UpdateGrowBody';
import { DeleteGrowService } from './DeleteGrowService';

@Injectable()
export class GrowService {
  constructor(
    private readonly createGrowService: CreateGrowService,
    private readonly filterGrowService: FilterGrowService,
    private readonly getByIdGrowService: GetByIdGrowService,
    private readonly updateGrowService: UpdateGrowService,
    private readonly deleteGrowService: DeleteGrowService,
  ) {}

  async createGrow(@Body() data: CreateGrowBody) {
    return await this.createGrowService.handle(data);
  }

  async getGrows(@Body() filter: FilterGrowBody) {
    return await this.filterGrowService.handle(filter);
  }

  async getGrowById(@Param('grow_id', ParseIntPipe) grow_id: number) {
    return await this.getByIdGrowService.handle(grow_id);
  }

  async updateGrow(
    @Param('grow_id', ParseIntPipe) grow_id: number,
    @Body() data: UpdateGrowBody,
  ) {
    return await this.updateGrowService.handle(grow_id, data);
  }

  async deleteGrow(@Param('grow_id', ParseIntPipe) grow_id: number) {
    return await this.deleteGrowService.handle(grow_id);
  }
}
