import { CreateGrowDTO } from '../core/dtos/CreateGrowDTO';
import { UpdateGrowDTO } from '../core/dtos/UpdateGrowDTO';
import { FilterGrowDTO } from '../core/dtos/FilterGrowDTO';
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
import { GrowService } from '../core/services';

@Controller('grows')
export class GrowControllers {
  constructor(private readonly service: GrowService) {}

  @Post()
  async create(@Body() data: CreateGrowDTO) {
    return await this.service.create(data);
  }

  @Get()
  async get(@Body() filter: FilterGrowDTO) {
    return await this.service.get(filter);
  }

  @Get(':grow_id')
  async getById(@Param('grow_id', ParseIntPipe) grow_id: number) {
    return await this.service.getById(grow_id);
  }

  @Put(':grow_id')
  async update(
    @Param('grow_id', ParseIntPipe) grow_id: number,
    @Body() data: UpdateGrowDTO,
  ) {
    return await this.service.update(grow_id, data);
  }

  @Delete(':grow_id')
  async delete(@Param('grow_id', ParseIntPipe) grow_id: number) {
    return await this.service.delete(grow_id);
  }
}
