import { Injectable } from '@nestjs/common';
import { FarmingRepository } from '../repositories/FarmingRepository';

@Injectable()
export class GetFarmingByBaseComponentIdService {
  constructor(private readonly repository: FarmingRepository) {}

  async handle(base_component_id: number): Promise<any> {
    return await this.repository.getByBaseComponentId(base_component_id);
  }
}
