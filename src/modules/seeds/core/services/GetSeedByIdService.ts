import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { SeedRepository } from '../repositories/SeedRepository';
import { SeedInterface } from '../interfaces/seed.interface';

@Injectable()
export class GetSeedByIdService {
  constructor(private readonly repository: SeedRepository) {}

  async handle(seed_id: number): Promise<SeedInterface> {
    if (!seed_id) {
      throw new InternalServerErrorException('Seed ID is required');
    }

    return await this.repository.getById(seed_id);
  }
}
