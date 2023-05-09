import { Injectable } from '@nestjs/common';
import { PlantRepository } from '../repositories/PlantRepository';

@Injectable()
export class CreatePlantService {
  constructor(private readonly repository: PlantRepository) {}

  async handle(data: any): Promise<any> {
    return await this.repository.create(data);
  }
}
