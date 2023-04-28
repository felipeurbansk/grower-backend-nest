import { Injectable } from '@nestjs/common';
import { GrowRepository } from 'src/core/repositories/GrowRepository';

@Injectable()
export class CreateGrowService {
  constructor(private readonly grow: GrowRepository) {}

  async handle(data: any): Promise<any> {
    return await this.grow.create(data);
  }
}
