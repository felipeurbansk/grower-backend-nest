import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/UserRepository';
import { CreateUserBody } from '../dtos/CreateUserBody';
import { GeneratePassword } from '../../../../tools/GeneratePassword';

@Injectable()
export class CreateUserService {
  constructor(
    private readonly repository: UserRepository,
    private readonly generatePassword: GeneratePassword,
  ) {}

  async handle(data: CreateUserBody): Promise<any> {
    if (data.password)
      data.password = await this.generatePassword.handle(data.password);

    return await this.repository.create(data);
  }
}
