import { Injectable } from '@nestjs/common';
import { BaseComponentRepository } from '../repositories/BaseComponentRepository';

@Injectable()
export class UpdateBaseComponentService {
  constructor(private readonly repository: BaseComponentRepository) {}

  async handle(base_component_id: number, data: any): Promise<any> {
    return await this.repository.update(base_component_id, data);
  }
}
