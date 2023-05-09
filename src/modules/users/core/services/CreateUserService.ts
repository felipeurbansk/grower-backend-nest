import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/UserRepository';

@Injectable()
export class CreateUserService {
  constructor(private readonly repository: UserRepository) {}

  async handle(data: any): Promise<any> {
    return await this.repository.create(data);
  }
}
