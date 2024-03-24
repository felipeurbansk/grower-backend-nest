import { Injectable } from '@nestjs/common';
import { SeedRepository } from '../repositories/SeedRepository';
import {
  SeedInterface,
  SeedUpdateInterface,
} from '../interfaces/seed.interface';

@Injectable()
export class UpdateSeedService {
  constructor(private readonly repository: SeedRepository) {}

  async handle(
    seed_id: number,
    seed: SeedUpdateInterface,
  ): Promise<SeedInterface> {
    return await this.repository.update(seed_id, seed);
  }
}
