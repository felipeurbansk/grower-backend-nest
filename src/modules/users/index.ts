import { Module } from '@nestjs/common';
import { UserControllers } from './controllers/UserControllers';
import { UserServices } from './core/services';

import { UserRepository } from './core/repositories/UserRepository';
import { PrismaUserRepository } from './core/repositories/prisma/PrismaUserRepository';
import { PrismaService } from '../../infra/database/PrismaService';
import { CreateUserService } from './core/services/CreateUserService';
import { DeleteUserService } from './core/services/DeleteUserService';
import { FilterUserService } from './core/services/FilterUserService';
import { GetUserByIdService } from './core/services/GetUserByIdService';
import { UpdateUserService } from './core/services/UpdateUserService';
import { GetUserByEmailService } from './core/services/GetUserByEmailService';

@Module({
  exports: [UserServices],
  controllers: [UserControllers],
  providers: [
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
    CreateUserService,
    DeleteUserService,
    FilterUserService,
    GetUserByIdService,
    UpdateUserService,
    GetUserByEmailService,
    UserServices,
    PrismaService,
  ],
})
export class UserModule {}
