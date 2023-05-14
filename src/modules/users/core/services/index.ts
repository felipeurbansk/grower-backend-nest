import { Body, Injectable, Param, ParseIntPipe } from '@nestjs/common';

import { CreateUserDTO } from '../dtos/CreateUserDTO';
import { FilterUserDTO } from '../dtos/FilterUserDTO';
import { UpdateUserDTO } from '../dtos/UpdateUserDTO';
import { CreateUserService } from './CreateUserService';
import { FilterUserService } from './FilterUserService';
import { GetUserByIdService } from './GetUserByIdService';
import { UpdateUserService } from './UpdateUserService';
import { DeleteUserService } from './DeleteUserService';
import { GetUserByEmailService } from './GetUserByEmailService';

@Injectable()
export class UserServices {
  constructor(
    private readonly createService: CreateUserService,
    private readonly filterService: FilterUserService,
    private readonly getByIdService: GetUserByIdService,
    private readonly updateService: UpdateUserService,
    private readonly deleteService: DeleteUserService,
    private readonly getUserByEmailService: GetUserByEmailService,
  ) {}

  async create(@Body() data: CreateUserDTO) {
    return await this.createService.handle(data);
  }

  async get(@Body() filter: FilterUserDTO) {
    return await this.filterService.handle(filter);
  }

  async getById(@Param('user_id', ParseIntPipe) user_id: number) {
    return await this.getByIdService.handle(user_id);
  }

  async update(
    @Param('user_id', ParseIntPipe) user_id: number,
    @Body() data: UpdateUserDTO,
  ) {
    return await this.updateService.handle(user_id, data);
  }

  async delete(@Param('user_id', ParseIntPipe) user_id: number) {
    return await this.deleteService.handle(user_id);
  }

  async getByEmail(email: string) {
    return await this.getUserByEmailService.handle(email);
  }
}
