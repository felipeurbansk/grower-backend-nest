import { Injectable } from '@nestjs/common';
import { GrowRepository } from '../repositories/GrowRepository';

@Injectable()
export class DeleteService {
  constructor(private readonly grow: GrowRepository) {}

  async handle(grow_id: number): Promise<any> {
    return await this.grow.delete(grow_id);
  }
}
