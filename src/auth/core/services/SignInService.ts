import { UserServices } from '../../../modules/users/core/services';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class SignInService {
  constructor(private userService: UserServices) {}

  async handle(email: string, password: string): Promise<any> {
    const user = await this.userService.getByEmail(email);

    if (user?.password !== password) throw new UnauthorizedException();

    return user;
  }
}
