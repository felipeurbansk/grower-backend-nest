import { GrowRepository } from 'src/core/repositories/grow-repository';
import { CreateGrowBody } from '../../core/dtos/grow/create-grow-body';
import { UpdateGrowBody } from '../../core/dtos/grow/update-grow-body';
import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Put,
  ParseIntPipe,
  Delete,
} from '@nestjs/common';
import { GetGrowBody } from 'src/core/dtos/grow/get-grow-body';

@Controller('grows')
export class GrowController {
  constructor(private readonly grow: GrowRepository) {}

  @Get(':grow_id')
  async getGrowById(@Param('grow_id', ParseIntPipe) grow_id: number) {
    return await this.grow.getById(grow_id);
  }

  @Get()
  async getGrows(@Body() data: GetGrowBody) {
    return await this.grow.getAll(data);
  }

  @Post()
  async createGrow(@Body() data: CreateGrowBody) {
    return await this.grow.create(data);
  }

  @Put(':grow_id')
  async updateGrow(
    @Param('grow_id', ParseIntPipe) grow_id: number,
    @Body() data: UpdateGrowBody,
  ) {
    return await this.grow.update(grow_id, data);
  }

  @Delete(':grow_id')
  async deleteGrow(@Param('grow_id', ParseIntPipe) grow_id: number) {
    return await this.grow.delete(grow_id);
  }
}
