import { Body, Injectable } from '@nestjs/common';
import { AuthSignInService } from './AuthSignInService';

import { AuthSignInDTO } from '../dtos/AuthSignInDTO';

@Injectable()
export class AuthService {
  constructor(private readonly signInService: AuthSignInService) {}

  async signIn(@Body() data: AuthSignInDTO) {
    return await this.signInService.handle(data.email, data.password);
  }
}
