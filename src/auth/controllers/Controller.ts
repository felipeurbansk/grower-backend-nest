import {
  Body,
  Controller,
  Post,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from '../core/services';
import { SignInBody } from '../core/dtos/SignInBody';

@Controller('auth')
export class Controllers {
  constructor(private readonly service: AuthService) {}

  @Post('signin')
  async signIn(@Body() data: SignInBody) {
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
