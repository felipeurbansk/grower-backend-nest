import { BadRequestException, Injectable } from '@nestjs/common';
import { BaseComponentRepository } from '../repositories/BaseComponentRepository';

@Injectable()
export class CreateBaseComponentService {
  constructor(private readonly repository: BaseComponentRepository) {}

  async handle(data: any): Promise<any> {
    return await this.repository.create(data);
  }
}
