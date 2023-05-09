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

@Module({
  controllers: [PlantControllers],
  providers: [
    {
      provide: PlantRepository,
      useClass: PrismaPlantRepository,
    },
    CreatePlantService,
    DeletePlantService,
    FilterPlantService,
    GetPlantByIdService,
    UpdatePlantService,
    PlantService,
    PrismaService,
  ],
})
export class PlantModule {}
