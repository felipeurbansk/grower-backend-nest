import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { DecodeJWTToken } from 'src/tools/DecodeJWTToken';

@Injectable()
export class UserIdBodyInterceptor implements NestInterceptor {
  constructor(private decodeJWTToken: DecodeJWTToken) {}

  async intercept(context: ExecutionContext, next: CallHandler): Promise<any> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers['authorization'];

    if (token) {
      const user = await this.decodeJWTToken.handle(context);

      if (request.route.path !== '/users') {
        request.body['user_id'] = user.id;
      }
    }

    return next.handle();
  }
}
