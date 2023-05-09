import { Body, Injectable } from '@nestjs/common';
import { SignInService } from './SignInService';

import { SignInBody } from '../dtos/SignInBody';

@Injectable()
export class AuthService {
  constructor(private readonly signInService: SignInService) {}

  async signIn(@Body() data: SignInBody) {
    return await this.signInService.handle(data.email, data.password);
  }
}
