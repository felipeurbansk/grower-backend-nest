import { Injectable } from '@nestjs/common';
import { LightRepository } from '../repositories/LightRepository';

@Injectable()
export class DeleteService {
  constructor(private readonly light: LightRepository) {}

  async handle(light_id: number): Promise<any> {
    return await this.light.delete(light_id);
  }
}
