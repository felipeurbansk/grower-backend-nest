import { Injectable } from '@nestjs/common';
import { LightRepository } from '../repositories/LightRepository';

@Injectable()
export class UpdateLightService {
  constructor(private readonly repository: LightRepository) {}

  async handle(light_id: number, data: any): Promise<any> {
    return await this.repository.update(light_id, data);
  }
}
