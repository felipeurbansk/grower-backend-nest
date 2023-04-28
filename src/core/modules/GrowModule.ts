import { Module } from '@nestjs/common';
import { GrowController } from 'src/application/controllers/GrowController';
import { GrowService } from '../domain/grow/GrowService';
import { CreateGrowService } from '../domain/grow/CreateGrowService';
import { DeleteGrowService } from '../domain/grow/DeleteGrowService';
import { FilterGrowService } from '../domain/grow/FilterGrowService';
import { GetByIdGrowService } from '../domain/grow/GetByIdGrowService';
import { UpdateGrowService } from '../domain/grow/UpdateGrowService';
import { GrowRepository } from 'src/core/repositories/GrowRepository';
import { PrismaGrowRepository } from 'src/core/repositories/prisma/PrismaGrowRepository';
import { PrismaService } from 'src/infra/database/PrismaService';

@Module({
  controllers: [GrowController],
  providers: [
    {
      provide: GrowRepository,
      useClass: PrismaGrowRepository,
    },
    CreateGrowService,
    DeleteGrowService,
    FilterGrowService,
    GetByIdGrowService,
    UpdateGrowService,
    GrowService,
    PrismaService,
  ],
})
export class GrowModule {}
