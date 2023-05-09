import { Injectable } from '@nestjs/common';
import { SeedRepository } from '../repositories/SeedRepository';

@Injectable()
export class DeleteSeedService {
  constructor(private readonly repository: SeedRepository) {}

  async handle(seed_id: number): Promise<any> {
    return await this.repository.delete(seed_id);
  }
}
