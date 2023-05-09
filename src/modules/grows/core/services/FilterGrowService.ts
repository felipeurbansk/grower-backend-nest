import { Injectable } from '@nestjs/common';
import { GrowRepository } from '../repositories/GrowRepository';

@Injectable()
export class FilterGrowService {
  constructor(private readonly repository: GrowRepository) {}

  async handle(filter: any): Promise<any> {
    return await this.repository.getAll(filter);
  }
}
