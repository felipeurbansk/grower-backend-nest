import { Injectable } from '@nestjs/common';
import { HumidityRepository } from '../repositories/HumidityRepository';

@Injectable()
export class UpdateHumidityService {
  constructor(private readonly repository: HumidityRepository) {}

  async handle(humidty_id: number, data: any): Promise<any> {
    return await this.repository.update(humidty_id, data);
  }
}
