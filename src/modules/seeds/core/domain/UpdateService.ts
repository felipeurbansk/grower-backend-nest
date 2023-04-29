import { Injectable } from '@nestjs/common';
import { SeedRepository } from '../repositories/SeedRepository';

@Injectable()
export class UpdateService {
  constructor(private readonly seed: SeedRepository) {}

  async handle(seed_id: number, data: any): Promise<any> {
    return await this.seed.update(seed_id, data);
  }
}
