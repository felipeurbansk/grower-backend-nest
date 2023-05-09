import { Injectable } from '@nestjs/common';
import { GrowRepository } from '../repositories/GrowRepository';

@Injectable()
export class UpdateGrowService {
  constructor(private readonly repository: GrowRepository) {}

  async handle(grow_id: number, data: any): Promise<any> {
    return await this.repository.update(grow_id, data);
  }
}
