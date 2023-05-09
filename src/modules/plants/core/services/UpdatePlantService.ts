import { Injectable } from '@nestjs/common';
import { PlantRepository } from '../repositories/PlantRepository';

@Injectable()
export class UpdatePlantService {
  constructor(private readonly repository: PlantRepository) {}

  async handle(plant_id: number, data: any): Promise<any> {
    return await this.repository.update(plant_id, data);
  }
}
