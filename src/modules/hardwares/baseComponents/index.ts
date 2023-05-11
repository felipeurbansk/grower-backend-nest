import { Module } from '@nestjs/common';
import { BaseComponentControllers } from './controllers/BaseComponentControllers';
import { BaseComponentService } from './core/services';
import { CreateBaseComponentService } from './core/services/CreateBaseComponentService';
import { DeleteBaseComponentService } from './core/services/DeleteBaseComponentService';
import { FilterBaseComponentService } from './core/services/FilterBaseComponentService';
import { GetBaseComponentByIdService } from './core/services/GetBaseComponentByIdService';
import { UpdateBaseComponentService } from './core/services/UpdateBaseComponentService';
import { BaseComponentRepository } from './core/repositories/BaseComponentRepository';
import { PrismaBaseComponentRepository } from './core/repositories/prisma/PrismaBaseComponentRepository';
import { PrismaService } from '../../../infra/database/PrismaService';
import { DecodeJWTToken } from 'src/tools/DecodeJWTToken';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { UserIdBodyInterceptor } from 'src/auth/interceptor/UserIdBodyInterceptor';

@Module({
  exports: [BaseComponentService],
  controllers: [BaseComponentControllers],
  providers: [
    {
      provide: BaseComponentRepository,
      useClass: PrismaBaseComponentRepository,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: UserIdBodyInterceptor,
    },
    CreateBaseComponentService,
    DeleteBaseComponentService,
    FilterBaseComponentService,
    GetBaseComponentByIdService,
    UpdateBaseComponentService,
    BaseComponentService,
    PrismaService,
    DecodeJWTToken,
  ],
})
export class BaseComponentModule {}
