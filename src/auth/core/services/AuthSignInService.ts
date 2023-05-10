import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserServices } from '../../../modules/users/core/services';
import { ComparePassword } from 'src/tools/ComparePassword';

@Injectable()
export class AuthSignInService {
  constructor(
    private userService: UserServices,
    private jwtService: JwtService,
    private comparePassword: ComparePassword,
  ) {}

  async handle(email: string, password: string): Promise<any> {
    const user = await this.userService.getByEmail(email);

    if (!this.comparePassword.handle(password, user.password))
      throw new UnauthorizedException();

    delete user.password;

    const access_token = await this.jwtService.signAsync(user);

    return { access_token };
  }
}
