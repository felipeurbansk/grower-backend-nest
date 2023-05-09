import { Injectable } from '@nestjs/common';
import { BaseComponentRepository } from '../repositories/BaseComponentRepository';

@Injectable()
export class DeleteBaseComponentService {
  constructor(private readonly repository: BaseComponentRepository) {}

  async handle(base_component_id: number): Promise<any> {
    return await this.repository.delete(base_component_id);
  }
}
