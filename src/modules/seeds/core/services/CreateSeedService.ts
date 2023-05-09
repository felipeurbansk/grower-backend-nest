import { Injectable } from '@nestjs/common';
import { SeedRepository } from '../repositories/SeedRepository';

@Injectable()
export class CreateSeedService {
  constructor(private readonly repository: SeedRepository) {}

  async handle(data: any): Promise<any> {
    return await this.repository.create(data);
  }
}
