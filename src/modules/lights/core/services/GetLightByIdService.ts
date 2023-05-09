import { Injectable } from '@nestjs/common';
import { LightRepository } from '../repositories/LightRepository';

@Injectable()
export class GetLightByIdService {
  constructor(private readonly repository: LightRepository) {}

  async handle(light_id: number): Promise<any> {
    return await this.repository.getById(light_id);
  }
}
