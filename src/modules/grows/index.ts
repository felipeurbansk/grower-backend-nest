import { Module } from '@nestjs/common';
import { GrowControllers } from './controllers/GrowControllers';
import { GrowService } from './core/services';
import { CreateGrowService } from './core/services/CreateGrowService';
import { DeleteGrowService } from './core/services/DeleteGrowService';
import { FilterGrowService } from './core/services/FilterGrowService';
import { GetGrowByIdService } from './core/services/GetGrowByIdService';
import { UpdateGrowService } from './core/services/UpdateGrowService';
import { GrowRepository } from './core/repositories/GrowRepository';
import { PrismaGrowRepository } from './core/repositories/prisma/PrismaGrowRepository';
import { PrismaService } from '../../infra/database/PrismaService';
import { DecodeJWTToken } from 'src/tools/DecodeJWTToken';

@Module({
  exports: [GrowService],
  controllers: [GrowControllers],
  providers: [
    {
      provide: GrowRepository,
      useClass: PrismaGrowRepository,
    },
    CreateGrowService,
    DeleteGrowService,
    FilterGrowService,
    GetGrowByIdService,
    UpdateGrowService,
    GrowService,
    PrismaService,
    DecodeJWTToken,
  ],
})
export class GrowModule {}
