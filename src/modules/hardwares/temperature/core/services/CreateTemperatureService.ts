import { Injectable } from '@nestjs/common';
import { TemperatureRepository } from '../repositories/TemperatureRepository';

@Injectable()
export class CreateTemperatureService {
  constructor(private readonly repository: TemperatureRepository) {}

  async handle(data: any): Promise<any> {
    return await this.repository.create(data);
  }
}
