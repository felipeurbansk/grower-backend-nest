import {
  Body,
  Controller,
  Post,
  HttpException,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { AuthService } from '../core/services';
import { AuthSignInBody } from '../core/dtos/AuthSignInBody';
import { Public } from '../core/decorators/Public';

@Controller('auth')
export class AuthControllers {
  constructor(private readonly service: AuthService) {}

  @Public()
  @Post('signin')
  @HttpCode(200)
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
