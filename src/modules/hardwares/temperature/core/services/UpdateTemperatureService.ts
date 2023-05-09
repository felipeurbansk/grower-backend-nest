import { Injectable } from '@nestjs/common';
import { TemperatureRepository } from '../repositories/TemperatureRepository';

@Injectable()
export class UpdateTemperatureService {
  constructor(private readonly repository: TemperatureRepository) {}

  async handle(temperature_id: number, data: any): Promise<any> {
    return await this.repository.update(temperature_id, data);
  }
}
