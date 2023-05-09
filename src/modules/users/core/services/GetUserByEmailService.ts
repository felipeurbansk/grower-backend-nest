import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/UserRepository';

@Injectable()
export class GetUserByEmailService {
  constructor(private readonly repository: UserRepository) {}

  async handle(email: string): Promise<any> {
    return await this.repository.getByEmail(email);
  }
}
