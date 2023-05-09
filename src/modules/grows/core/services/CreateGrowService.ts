import { Injectable } from '@nestjs/common';
import { GrowRepository } from '../repositories/GrowRepository';

@Injectable()
export class CreateGrowService {
  constructor(private readonly repository: GrowRepository) {}

  async handle(data: any): Promise<any> {
    return await this.repository.create(data);
  }
}
