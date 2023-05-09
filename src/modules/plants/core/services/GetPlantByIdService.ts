import { Injectable } from '@nestjs/common';
import { PlantRepository } from '../repositories/PlantRepository';

@Injectable()
export class GetPlantByIdService {
  constructor(private readonly repository: PlantRepository) {}

  async handle(plant_id: number): Promise<any> {
    return await this.repository.getById(plant_id);
  }
}
