import { Injectable } from '@nestjs/common';
import { GrowRepository } from '../repositories/GrowRepository';

@Injectable()
export class FilterService {
  constructor(private readonly grow: GrowRepository) {}

  async handle(filter: any): Promise<any> {
    return await this.grow.getAll(filter);
  }
}
