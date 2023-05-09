import { Injectable } from '@nestjs/common';
import { SeedRepository } from '../repositories/SeedRepository';

@Injectable()
export class UpdateSeedService {
  constructor(private readonly repository: SeedRepository) {}

  async handle(seed_id: number, data: any): Promise<any> {
    return await this.repository.update(seed_id, data);
  }
}
