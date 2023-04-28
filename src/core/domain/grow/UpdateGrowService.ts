import { Injectable } from '@nestjs/common';
import { GrowRepository } from 'src/core/repositories/GrowRepository';

@Injectable()
export class UpdateGrowService {
  constructor(private readonly grow: GrowRepository) {}

  async handle(grow_id: number, data: any): Promise<any> {
    return await this.grow.update(grow_id, data);
  }
}
