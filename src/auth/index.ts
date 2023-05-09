import { Module } from '@nestjs/common';
import { Controllers } from './controllers/Controller';
import { AuthService } from './core/services';
import { SignInService } from './core/services/SignInService';
import { UserModule } from 'src/modules/users';

@Module({
  imports: [UserModule],
  controllers: [Controllers],
  providers: [AuthService, SignInService],
})
export class AuthModule {}
