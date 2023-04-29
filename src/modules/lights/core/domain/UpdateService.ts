import { Injectable } from '@nestjs/common';
import { LightRepository } from '../repositories/LightRepository';

@Injectable()
export class UpdateService {
  constructor(private readonly light: LightRepository) {}

  async handle(light_id: number, data: any): Promise<any> {
    return await this.light.update(light_id, data);
  }
}
