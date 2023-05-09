import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/UserRepository';

@Injectable()
export class UpdateUserService {
  constructor(private readonly repository: UserRepository) {}

  async handle(user_id: number, data: any): Promise<any> {
    return await this.repository.update(user_id, data);
  }
}
