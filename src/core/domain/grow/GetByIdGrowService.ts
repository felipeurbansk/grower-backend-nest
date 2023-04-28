import { Injectable } from '@nestjs/common';
import { GrowRepository } from 'src/core/repositories/GrowRepository';

@Injectable()
export class GetByIdGrowService {
  constructor(private readonly grow: GrowRepository) {}

  async handle(grow_id: number): Promise<any> {
    return await this.grow.getById(grow_id);
  }
}
