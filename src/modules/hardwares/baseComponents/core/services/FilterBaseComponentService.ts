import { Injectable } from '@nestjs/common';
import { BaseComponentRepository } from '../repositories/BaseComponentRepository';

@Injectable()
export class FilterBaseComponentService {
  constructor(private readonly repository: BaseComponentRepository) {}

  async handle(filter: any): Promise<any> {
    return await this.repository.getAll(filter);
  }
}
