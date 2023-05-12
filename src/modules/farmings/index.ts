import { Module } from '@nestjs/common';
import { FarmingControllers } from './controllers/FarmingControllers';
import { FarmingService } from './core/services';
import { CreateFarmingService } from './core/services/CreateFarmingService';
import { DeleteFarmingService } from './core/services/DeleteFarmingService';
import { FilterFarmingService } from './core/services/FilterFarmingService';
import { GetFarmingByIdService } from './core/services/GetFarmingByIdService';
import { UpdateFarmingService } from './core/services/UpdateFarmingService';
import { FarmingRepository } from './core/repositories/FarmingRepository';
import { PrismaFarmingRepository } from './core/repositories/prisma/PrismaFarmingRepository';
import { PrismaService } from '../../infra/database/PrismaService';
import { DecodeJWTToken } from 'src/tools/DecodeJWTToken';
import { CreateFarmingReportService } from './core/services/report/CreateFarmingReportService';

@Module({
  exports: [FarmingService],
  controllers: [FarmingControllers],
  providers: [
    {
      provide: FarmingRepository,
      useClass: PrismaFarmingRepository,
    },
    CreateFarmingService,
    DeleteFarmingService,
    FilterFarmingService,
    GetFarmingByIdService,
    UpdateFarmingService,
    FarmingService,
    PrismaService,
    DecodeJWTToken,
    CreateFarmingReportService,
  ],
})
export class FarmingModule {}
