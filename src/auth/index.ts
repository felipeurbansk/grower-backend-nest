import { Module } from '@nestjs/common';
import { AuthControllers } from './controllers/AuthController';
import { AuthService } from './core/services';
import { AuthSignInService } from './core/services/AuthSignInService';
import { UserModule } from 'src/modules/users';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants/JWTConstants';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './core/guard/AuthGuard';
import { ComparePassword } from 'src/tools/ComparePassword';

@Module({
  exports: [AuthService],
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '24h' },
    }),
  ],
  controllers: [AuthControllers],
  providers: [
    AuthService,
    AuthSignInService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    ComparePassword,
  ],
})
export class AuthModule {}
