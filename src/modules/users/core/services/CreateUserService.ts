import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/UserRepository';
import { CreateUserDTO } from '../dtos/CreateUserDTO';
import { GeneratePassword } from '../../../../tools/GeneratePassword';

@Injectable()
export class CreateUserService {
  constructor(
    private readonly repository: UserRepository,
    private readonly generatePassword: GeneratePassword,
  ) {}

  async handle(data: CreateUserDTO): Promise<any> {
    if (data.password)
      data.password = await this.generatePassword.handle(data.password);

    return await this.repository.create(data);
  }
}
