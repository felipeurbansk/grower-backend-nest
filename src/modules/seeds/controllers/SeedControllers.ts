import { CreateSeedDTO } from '../core/dtos/CreateSeedDTO';
import { UpdateDTO } from '../core/dtos/UpdateSeedDTO';
import { FilterDTO } from '../core/dtos/FilterSeedDTO';
import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Put,
  ParseIntPipe,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { SeedService } from '../core/services';

@Controller('seeds')
export class SeedControllers {
  constructor(private readonly service: SeedService) {}

  @Post()
  async create(@Body() data: CreateSeedDTO) {
    return await this.service.create(data);
  }

  @Get()
  async get(@Body() filter: FilterDTO) {
    return await this.service.get(filter);
  }

  @Get(':seed_id')
  async getById(@Param('seed_id', ParseIntPipe) seed_id: number) {
    return await this.service.getById(seed_id);
  }

  @Put(':seed_id')
  async update(
    @Param('seed_id', ParseIntPipe) seed_id: number,
    @Body() data: UpdateDTO,
  ) {
    return await this.service.update(seed_id, data);
  }

  @Delete(':seed_id')
  async delete(@Param('seed_id', ParseIntPipe) seed_id: number) {
    return await this.service.delete(seed_id);
  }
}
