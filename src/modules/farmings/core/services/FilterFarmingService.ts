import { Injectable } from '@nestjs/common';
import { FarmingRepository } from '../repositories/FarmingRepository';

@Injectable()
export class FilterFarmingService {
  constructor(private readonly repository: FarmingRepository) {}

  async handle(filter: any): Promise<any> {
    return await this.repository.getAll(filter);
  }
}
