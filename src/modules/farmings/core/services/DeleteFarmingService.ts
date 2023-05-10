import { Injectable } from '@nestjs/common';
import { FarmingRepository } from '../repositories/FarmingRepository';

@Injectable()
export class DeleteFarmingService {
  constructor(private readonly repository: FarmingRepository) {}

  async handle(farming_id: number): Promise<any> {
    return await this.repository.delete(farming_id);
  }
}
