import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/UserRepository';

@Injectable()
export class GetUserByIdService {
  constructor(private readonly repository: UserRepository) {}

  async handle(user_id: number): Promise<any> {
    return await this.repository.getById(user_id);
  }
}
