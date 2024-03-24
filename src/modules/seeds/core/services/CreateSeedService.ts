import { Injectable } from '@nestjs/common';
import { SeedRepository } from '../repositories/SeedRepository';
import { SeedInterface } from '../interfaces/seed.interface';

@Injectable()
export class CreateSeedService {
  constructor(private readonly repository: SeedRepository) {}

  async handle(seed: SeedInterface): Promise<SeedInterface> {
    return await this.repository.create(seed);
  }
}
