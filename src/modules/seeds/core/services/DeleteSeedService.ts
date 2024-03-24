import { Injectable } from '@nestjs/common';
import { SeedRepository } from '../repositories/SeedRepository';
import { SeedInterface } from '../interfaces/seed.interface';

@Injectable()
export class DeleteSeedService {
  constructor(private readonly repository: SeedRepository) {}

  async handle(seed_id: number): Promise<SeedInterface> {
    return await this.repository.delete(seed_id);
  }
}
