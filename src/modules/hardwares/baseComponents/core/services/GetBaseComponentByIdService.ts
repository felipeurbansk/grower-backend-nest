import { Injectable, NotFoundException } from '@nestjs/common';
import { BaseComponentRepository } from '../repositories/BaseComponentRepository';

@Injectable()
export class GetBaseComponentByIdService {
  constructor(private readonly repository: BaseComponentRepository) {}

  async handle(base_component_id: number): Promise<any> {
    const persistedBaseComponent = await this.repository.getById(
      base_component_id,
    );

    if (!persistedBaseComponent) {
      throw new NotFoundException(
        `Base component with id ${base_component_id} not found`,
      );
    }

    return persistedBaseComponent;
  }
}
