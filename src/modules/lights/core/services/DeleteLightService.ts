import { Injectable } from '@nestjs/common';
import { LightRepository } from '../repositories/LightRepository';

@Injectable()
export class DeleteLightService {
  constructor(private readonly repository: LightRepository) {}

  async handle(light_id: number): Promise<any> {
    return await this.repository.delete(light_id);
  }
}
