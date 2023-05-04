import { Injectable } from '@nestjs/common';
import { Repository } from '../repositories/Repository';

@Injectable()
export class UpdateService {
  constructor(private readonly repository: Repository) {}

  async handle(grow_id: number, data: any): Promise<any> {
    return await this.repository.update(grow_id, data);
  }
}
