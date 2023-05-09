import { Body, Injectable, Param, ParseIntPipe } from '@nestjs/common';

import { CreateUserBody } from '../dtos/CreateUserBody';
import { FilterUserBody } from '../dtos/FilterUserBody';
import { UpdateUserBody } from '../dtos/UpdateUserBody';
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

  async create(@Body() data: CreateUserBody) {
    return await this.createService.handle(data);
  }

  async get(@Body() filter: FilterUserBody) {
    return await this.filterService.handle(filter);
  }

  async getById(@Param('user_id', ParseIntPipe) user_id: number) {
    return await this.getByIdService.handle(user_id);
  }

  async update(
    @Param('user_id', ParseIntPipe) user_id: number,
    @Body() data: UpdateUserBody,
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
