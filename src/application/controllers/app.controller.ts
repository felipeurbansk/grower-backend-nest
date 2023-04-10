import { GrowRepository } from 'src/core/repositories/grow-repository';
import { CreateGrowBody } from '../../core/dtos/create-grow-body';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('grow')
export class AppController {
  constructor(private readonly grow: GrowRepository) {}

  @Post()
  async getHello(@Body() body: CreateGrowBody) {
    const { name, depth, height, width } = body;

    await this.grow.create(name, width, height, depth);
  }
}
