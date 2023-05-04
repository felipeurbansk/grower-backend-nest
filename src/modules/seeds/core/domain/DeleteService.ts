import { Injectable } from '@nestjs/common';
import { Repository } from '../repositories/Repository';

@Injectable()
export class DeleteService {
  constructor(private readonly repository: Repository) {}

  async handle(seed_id: number): Promise<any> {
    return await this.repository.delete(seed_id);
  }
}
