import { Injectable } from '@nestjs/common';
import { GrowRepository } from '../repositories/GrowRepository';

@Injectable()
export class DeleteGrowService {
  constructor(private readonly repository: GrowRepository) {}

  async handle(grow_id: number): Promise<any> {
    return await this.repository.delete(grow_id);
  }
}
