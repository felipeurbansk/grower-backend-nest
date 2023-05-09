import { Injectable } from '@nestjs/common';
import { LightRepository } from '../repositories/LightRepository';

@Injectable()
export class FilterLightService {
  constructor(private readonly repository: LightRepository) {}

  async handle(filter: any): Promise<any> {
    return await this.repository.getAll(filter);
  }
}
