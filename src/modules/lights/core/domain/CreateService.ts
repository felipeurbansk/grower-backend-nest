import { Injectable } from '@nestjs/common';
import { LightRepository } from '../repositories/LightRepository';

@Injectable()
export class CreateService {
  constructor(private readonly light: LightRepository) {}

  async handle(data: any): Promise<any> {
    return await this.light.create(data);
  }
}
