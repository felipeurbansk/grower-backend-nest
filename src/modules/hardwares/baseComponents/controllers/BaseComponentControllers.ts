import { CreateBaseComponentDTO } from '../core/dtos/CreateBaseComponentDTO';
import { UpdateBaseComponentDTO } from '../core/dtos/UpdateBaseComponentDTO';
import { FilterBaseComponentDTO } from '../core/dtos/FilterBaseComponentDTO';
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
import { BaseComponentService } from '../core/services';

@Controller('base_components')
export class BaseComponentControllers {
  constructor(private readonly service: BaseComponentService) {}

  @Post()
  async create(@Body() data: CreateBaseComponentDTO) {
    return await this.service.create(data);
  }

  @Get()
  async get(@Body() filter: FilterBaseComponentDTO) {
    return await this.service.get(filter);
  }

  @Get(':baseComponent_id')
  async getById(
    @Param('baseComponent_id', ParseIntPipe) baseComponent_id: number,
  ) {
    return await this.service.getById(baseComponent_id);
  }

  @Get('mac/:mac')
  async getByMac(@Param() data: FilterBaseComponentDTO) {
    return await this.service.getByMac({ mac: data.mac });
  }

  @Put(':baseComponent_id')
  async update(
    @Param('baseComponent_id', ParseIntPipe) baseComponent_id: number,
    @Body() data: UpdateBaseComponentDTO,
  ) {
    return await this.service.update(baseComponent_id, data);
  }

  @Delete(':baseComponent_id')
  async delete(
    @Param('baseComponent_id', ParseIntPipe) baseComponent_id: number,
  ) {
    return await this.service.delete(baseComponent_id);
  }
}
