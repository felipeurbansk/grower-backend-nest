import { Body, Injectable } from '@nestjs/common';
import { AuthSignInService } from './AuthSignInService';

import { AuthSignInBody } from '../dtos/AuthSignInBody';

@Injectable()
export class AuthService {
  constructor(private readonly signInService: AuthSignInService) {}

  async signIn(@Body() data: AuthSignInBody) {
    return await this.signInService.handle(data.email, data.password);
  }
}
