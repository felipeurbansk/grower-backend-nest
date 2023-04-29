import { Injectable } from '@nestjs/common';
import { LightRepository } from '../repositories/LightRepository';

@Injectable()
export class FilterService {
  constructor(private readonly light: LightRepository) {}

  async handle(filter: any): Promise<any> {
    return await this.light.getAll(filter);
  }
}
