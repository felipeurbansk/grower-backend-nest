import { Injectable } from '@nestjs/common';
import { HumidityRepository } from '../repositories/HumidityRepository';

@Injectable()
export class CreateHumidityService {
  constructor(private readonly repository: HumidityRepository) {}

  async handle(data: any): Promise<any> {
    return await this.repository.create(data);
  }
}
