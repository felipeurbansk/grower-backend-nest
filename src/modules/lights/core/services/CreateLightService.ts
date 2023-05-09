import { Injectable } from '@nestjs/common';
import { LightRepository } from '../repositories/LightRepository';

@Injectable()
export class CreateLightService {
  constructor(private readonly repository: LightRepository) {}

  async handle(data: any): Promise<any> {
    return await this.repository.create(data);
  }
}
