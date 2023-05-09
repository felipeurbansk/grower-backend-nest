import { Injectable } from '@nestjs/common';
import { TemperatureRepository } from '../repositories/TemperatureRepository';

@Injectable()
export class GetTemperatureByIdService {
  constructor(private readonly repository: TemperatureRepository) {}

  async handle(temperature_id: number): Promise<any> {
    return await this.repository.getById(temperature_id);
  }
}
