import { Injectable } from '@nestjs/common';
import { TemperatureRepository } from '../repositories/TemperatureRepository';

@Injectable()
export class FilterTemperatureService {
  constructor(private readonly repository: TemperatureRepository) {}

  async handle(filter: any): Promise<any> {
    return await this.repository.getAll(filter);
  }
}
