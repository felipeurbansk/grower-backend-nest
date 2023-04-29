import { Injectable } from '@nestjs/common';
import { SeedRepository } from '../repositories/SeedRepository';

@Injectable()
export class FilterService {
  constructor(private readonly seed: SeedRepository) {}

  async handle(filter: any): Promise<any> {
    return await this.seed.getAll(filter);
  }
}
