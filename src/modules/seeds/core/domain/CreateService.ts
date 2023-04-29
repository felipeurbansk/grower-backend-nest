import { Injectable } from '@nestjs/common';
import { SeedRepository } from '../repositories/SeedRepository';

@Injectable()
export class CreateService {
  constructor(private readonly seed: SeedRepository) {}

  async handle(data: any): Promise<any> {
    return await this.seed.create(data);
  }
}
