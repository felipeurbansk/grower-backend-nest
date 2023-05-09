import { Injectable } from '@nestjs/common';
import { PlantRepository } from '../repositories/PlantRepository';

@Injectable()
export class DeletePlantService {
  constructor(private readonly repository: PlantRepository) {}

  async handle(plant_id: number): Promise<any> {
    return await this.repository.delete(plant_id);
  }
}
