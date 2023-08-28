import { CreateUserDTO } from '../core/dtos/CreateUserDTO';
import { FilterUserDTO } from '../core/dtos/FilterUserDTO';
import { UpdateUserDTO } from '../core/dtos/UpdateUserDTO';
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
import { UserServices } from '../core/services';
import { Public } from 'src/auth/core/decorators/Public';

@Controller('users')
export class UserControllers {
  constructor(private readonly service: UserServices) {}

  @Public()
  @Post()
  async create(@Body() data: CreateUserDTO) {
    return await this.service.create(data);
  }

  @Get()
  async get(@Body() filter: FilterUserDTO) {
    return await this.service.get(filter);
  }

  @Get(':user_id')
  async getById(@Param('user_id', ParseIntPipe) user_id: number) {
    return await this.service.getById(user_id);
  }

  @Put(':user_id')
  async update(
    @Param('user_id', ParseIntPipe) user_id: number,
    @Body() data: UpdateUserDTO,
  ) {
    return await this.service.update(user_id, data);
  }

  @Delete(':user_id')
  async delete(@Param('user_id', ParseIntPipe) user_id: number) {
    return await this.service.delete(user_id);
  }
}
