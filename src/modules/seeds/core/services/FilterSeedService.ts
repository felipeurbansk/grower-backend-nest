import { Injectable } from '@nestjs/common';
import { SeedRepository } from '../repositories/SeedRepository';
import {
  SeedFilterInterface,
  SeedInterface,
} from '../interfaces/seed.interface';

@Injectable()
export class FilterSeedService {
  constructor(private readonly repository: SeedRepository) {}

  async handle(filter: SeedFilterInterface): Promise<SeedInterface[]> {
    return await this.repository.getAll(filter);
  }
}
