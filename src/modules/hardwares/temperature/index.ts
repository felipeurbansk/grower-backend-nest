import { Module } from '@nestjs/common';
import { TemperatureControllers } from './controllers/TemperatureControllers';
import { TemperatureService } from './core/services';
import { CreateTemperatureService } from './core/services/CreateTemperatureService';
import { DeleteTemperatureService } from './core/services/DeleteTemperatureService';
import { FilterTemperatureService } from './core/services/FilterTemperatureService';
import { GetTemperatureByIdService } from './core/services/GetTemperatureByIdService';
import { UpdateTemperatureService } from './core/services/UpdateTemperatureService';
import { TemperatureRepository } from './core/repositories/TemperatureRepository';
import { PrismaTemperatureRepository } from './core/repositories/prisma/PrismaTemperatureRepository';
import { PrismaService } from '../../../infra/database/PrismaService';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { UserIdBodyInterceptor } from 'src/auth/interceptor/UserIdBodyInterceptor';
import { DecodeJWTToken } from 'src/tools/DecodeJWTToken';

@Module({
  exports: [TemperatureService],
  controllers: [TemperatureControllers],
  providers: [
    {
      provide: TemperatureRepository,
      useClass: PrismaTemperatureRepository,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: UserIdBodyInterceptor,
    },
    DecodeJWTToken,
    CreateTemperatureService,
    DeleteTemperatureService,
    FilterTemperatureService,
    GetTemperatureByIdService,
    UpdateTemperatureService,
    TemperatureService,
    PrismaService,
  ],
})
export class TemperatureModule {}
