import { Injectable } from '@nestjs/common';
import { SeedRepository } from '../repositories/SeedRepository';

@Injectable()
export class GetByIdService {
  constructor(private readonly seed: SeedRepository) {}

  async handle(seed_id: number): Promise<any> {
    return await this.seed.getById(seed_id);
  }
}
