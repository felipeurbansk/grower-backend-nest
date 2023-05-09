import { Module } from '@nestjs/common';
import { LightControllers } from './controllers/LightControllers';
import { LightService } from './core/services';
import { CreateLightService } from './core/services/CreateLightService';
import { DeleteLightService } from './core/services/DeleteLightService';
import { FilterLightService } from './core/services/FilterLightService';
import { GetLightByIdService } from './core/services/GetLightByIdService';
import { UpdateLightService } from './core/services/UpdateLightService';
import { LightRepository } from './core/repositories/LightRepository';
import { PrismaLightRepository } from './core/repositories/prisma/PrismaLightRepository';
import { PrismaService } from '../../infra/database/PrismaService';

@Module({
  controllers: [LightControllers],
  providers: [
    {
      provide: LightRepository,
      useClass: PrismaLightRepository,
    },
    CreateLightService,
    DeleteLightService,
    FilterLightService,
    GetLightByIdService,
    UpdateLightService,
    LightService,
    PrismaService,
  ],
})
export class LightModule {}
