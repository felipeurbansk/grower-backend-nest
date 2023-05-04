import { Injectable } from '@nestjs/common';
import { Repository } from '../repositories/Repository';

@Injectable()
export class CreateService {
  constructor(private readonly repository: Repository) {}

  async handle(data: any): Promise<any> {
    return await this.repository.create(data);
  }
}
