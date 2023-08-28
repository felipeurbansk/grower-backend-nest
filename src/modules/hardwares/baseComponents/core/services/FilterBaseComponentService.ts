import { Injectable, NotFoundException } from '@nestjs/common';
import { BaseComponentRepository } from '../repositories/BaseComponentRepository';

@Injectable()
export class FilterBaseComponentService {
  constructor(private readonly repository: BaseComponentRepository) {}

  async handle(filter: any): Promise<any> {
    const persistedBaseComponent = await this.repository.getAll(filter);

    if (!persistedBaseComponent) {
      throw new NotFoundException(`Base component not found`);
    }

    return persistedBaseComponent;
  }
}
