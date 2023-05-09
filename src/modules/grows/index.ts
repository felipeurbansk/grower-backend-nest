import { Module } from '@nestjs/common';
import { GrowControllers } from './controllers/GrowControllers';
import { Service } from './core/services';
import { CreateService } from './core/services/CreateGrowService';
import { DeleteService } from './core/services/DeleteGrowService';
import { FilterService } from './core/services/FilterGrowService';
import { GetByIdService } from './core/services/GetGrowByIdService';
import { UpdateService } from './core/services/UpdateGrowService';
import { GrowRepository } from './core/repositories/GrowRepository';
import { PrismaGrowRepository } from './core/repositories/prisma/PrismaGrowRepository';
import { PrismaService } from '../../infra/database/PrismaService';

@Module({
  controllers: [GrowControllers],
  providers: [
    {
      provide: GrowRepository,
      useClass: PrismaGrowRepository,
    },
    CreateService,
    DeleteService,
    FilterService,
    GetByIdService,
    UpdateService,
    Service,
    PrismaService,
  ],
})
export class GrowModule {}
