import { Injectable } from '@nestjs/common';
import { FarmingRepository } from '../repositories/FarmingRepository';

@Injectable()
export class CreateFarmingService {
  constructor(private readonly repository: FarmingRepository) {}

  async handle(data: any): Promise<any> {
    return await this.repository.create(data);
  }
}
