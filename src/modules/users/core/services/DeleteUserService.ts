import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/UserRepository';

@Injectable()
export class DeleteUserService {
  constructor(private readonly repository: UserRepository) {}

  async handle(user_id: number): Promise<any> {
    return await this.repository.delete(user_id);
  }
}
