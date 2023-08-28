import { Body, Controller, Post, HttpCode } from '@nestjs/common';
import { AuthService } from '../core/services';
import { AuthSignInDTO } from '../core/dtos/AuthSignInDTO';
import { Public } from '../core/decorators/Public';

@Controller('auth')
export class AuthControllers {
  constructor(private readonly service: AuthService) {}

  @Public()
  @Post('signin')
  @HttpCode(200)
  async signIn(@Body() data: AuthSignInDTO) {
    return await this.service.signIn(data);
  }
}
