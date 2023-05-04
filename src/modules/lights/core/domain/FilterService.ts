import { Injectable } from '@nestjs/common';
import { Repository } from '../repositories/Repository';

@Injectable()
export class FilterService {
  constructor(private readonly repository: Repository) {}

  async handle(filter: any): Promise<any> {
    return await this.repository.getAll(filter);
  }
}
