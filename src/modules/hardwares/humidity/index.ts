import { Module } from '@nestjs/common';
import { HumidityControllers } from './controllers/HumidityControllers';
import { HumidityService } from './core/services';
import { CreateHumidityService } from './core/services/CreateHumidityService';
import { DeleteHumidityService } from './core/services/DeleteHumidityService';
import { FilterHumidityService } from './core/services/FilterHumidityService';
import { GetHumidityByIdService } from './core/services/GetHumidityByIdService';
import { UpdateHumidityService } from './core/services/UpdateHumidityService';
import { HumidityRepository } from './core/repositories/HumidityRepository';
import { PrismaHumidityRepository } from './core/repositories/prisma/PrismaHumidityRepository';
import { PrismaService } from '../../../infra/database/PrismaService';

@Module({
  exports: [HumidityService],
  controllers: [HumidityControllers],
  providers: [
    {
      provide: HumidityRepository,
      useClass: PrismaHumidityRepository,
    },
    CreateHumidityService,
    DeleteHumidityService,
    FilterHumidityService,
    GetHumidityByIdService,
    UpdateHumidityService,
    HumidityService,
    PrismaService,
  ],
})
export class HumidtyModule {}
