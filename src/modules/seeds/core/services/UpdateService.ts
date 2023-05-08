import { Injectable } from '@nestjs/common';
import { Repository } from '../repositories/Repository';

@Injectable()
export class UpdateService {
  constructor(private readonly repository: Repository) {}

  async handle(seed_id: number, data: any): Promise<any> {
    return await this.repository.update(seed_id, data);
  }
}
