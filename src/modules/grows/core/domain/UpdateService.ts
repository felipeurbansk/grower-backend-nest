import { Injectable } from '@nestjs/common';
import { GrowRepository } from '../repositories/GrowRepository';

@Injectable()
export class UpdateService {
  constructor(private readonly grow: GrowRepository) {}

  async handle(grow_id: number, data: any): Promise<any> {
    return await this.grow.update(grow_id, data);
  }
}
