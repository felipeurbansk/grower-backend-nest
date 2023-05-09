import { Injectable } from '@nestjs/common';
import { BaseComponentRepository } from '../repositories/BaseComponentRepository';

@Injectable()
export class GetBaseComponentByIdService {
  constructor(private readonly repository: BaseComponentRepository) {}

  async handle(base_component_id: number): Promise<any> {
    return await this.repository.getById(base_component_id);
  }
}
