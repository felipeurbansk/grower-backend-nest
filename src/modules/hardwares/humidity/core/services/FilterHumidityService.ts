import { Injectable } from '@nestjs/common';
import { HumidityRepository } from '../repositories/HumidityRepository';

@Injectable()
export class FilterHumidityService {
  constructor(private readonly repository: HumidityRepository) {}

  async handle(filter: any): Promise<any> {
    return await this.repository.getAll(filter);
  }
}
