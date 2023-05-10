import { Injectable } from '@nestjs/common';
import { FarmingRepository } from '../repositories/FarmingRepository';

@Injectable()
export class UpdateFarmingService {
  constructor(private readonly repository: FarmingRepository) {}

  async handle(farming_id: number, data: any): Promise<any> {
    return await this.repository.update(farming_id, data);
  }
}
