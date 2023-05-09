import { Injectable } from '@nestjs/common';
import { PlantRepository } from '../repositories/PlantRepository';

@Injectable()
export class FilterPlantService {
  constructor(private readonly repository: PlantRepository) {}

  async handle(filter: any): Promise<any> {
    return await this.repository.getAll(filter);
  }
}
