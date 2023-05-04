import { Injectable } from '@nestjs/common';
import { Repository } from '../repositories/Repository';

@Injectable()
export class GetByIdService {
  constructor(private readonly repository: Repository) {}

  async handle(temperature_id: number): Promise<any> {
    return await this.repository.getById(temperature_id);
  }
}
