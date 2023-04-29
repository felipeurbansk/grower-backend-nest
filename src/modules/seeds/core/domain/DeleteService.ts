import { Injectable } from '@nestjs/common';
import { SeedRepository } from '../repositories/SeedRepository';

@Injectable()
export class DeleteService {
  constructor(private readonly seed: SeedRepository) {}

  async handle(seed_id: number): Promise<any> {
    return await this.seed.delete(seed_id);
  }
}
