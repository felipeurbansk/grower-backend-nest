import {
  Body,
  Controller,
  Post,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from '../core/services';
import { AuthSignInBody } from '../core/dtos/AuthSignInBody';

@Controller('auth')
export class AuthControllers {
  constructor(private readonly service: AuthService) {}

  @Post('signin')
  async signIn(@Body() data: AuthSignInBody) {
    return await this.service
      .signIn(data)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw new HttpException(
          {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            error: `Error in login`,
          },
          HttpStatus.INTERNAL_SERVER_ERROR,
          {
            cause: err,
          },
        );
      });
  }
}
