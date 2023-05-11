import { Module } from '@nestjs/common';
import { PlantControllers } from './controllers/PlantControllers';
import { PlantService } from './core/services';
import { CreatePlantService } from './core/services/CreatePlantService';
import { DeletePlantService } from './core/services/DeletePlantService';
import { FilterPlantService } from './core/services/FilterPlantService';
import { GetPlantByIdService } from './core/services/GetPlantByIdService';
import { UpdatePlantService } from './core/services/UpdatePlantService';
import { PlantRepository } from './core/repositories/PlantRepository';
import { PrismaPlantRepository } from './core/repositories/prisma/PrismaPlantRepository';
import { PrismaService } from '../../infra/database/PrismaService';
import { DecodeJWTToken } from 'src/tools/DecodeJWTToken';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { UserIdBodyInterceptor } from 'src/auth/interceptor/UserIdBodyInterceptor';

@Module({
  exports: [PlantService],
  controllers: [PlantControllers],
  providers: [
    {
      provide: PlantRepository,
      useClass: PrismaPlantRepository,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: UserIdBodyInterceptor,
    },
    CreatePlantService,
    DeletePlantService,
    FilterPlantService,
    GetPlantByIdService,
    UpdatePlantService,
    PlantService,
    PrismaService,
    DecodeJWTToken,
  ],
})
export class PlantModule {}
