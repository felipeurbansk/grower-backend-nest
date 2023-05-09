import { Module } from '@nestjs/common';
import { AuthControllers } from './controllers/AuthController';
import { AuthService } from './core/services';
import { AuthSignInService } from './core/services/AuthSignInService';
import { UserModule } from 'src/modules/users';

@Module({
  exports: [AuthService],
  imports: [UserModule],
  controllers: [AuthControllers],
  providers: [AuthService, AuthSignInService],
})
export class AuthModule {}
