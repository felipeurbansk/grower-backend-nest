import { Injectable } from '@nestjs/common';
import { GrowRepository } from 'src/core/repositories/GrowRepository';

@Injectable()
export class FilterGrowService {
  constructor(private readonly grow: GrowRepository) {}

  async handle(filter: any): Promise<any> {
    return await this.grow.getAll(filter);
  }
}
