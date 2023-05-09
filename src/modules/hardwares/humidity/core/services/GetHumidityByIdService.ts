import { Injectable } from '@nestjs/common';
import { HumidityRepository } from '../repositories/HumidityRepository';

@Injectable()
export class GetHumidityByIdService {
  constructor(private readonly repository: HumidityRepository) {}

  async handle(humidty_id: number): Promise<any> {
    return await this.repository.getById(humidty_id);
  }
}
