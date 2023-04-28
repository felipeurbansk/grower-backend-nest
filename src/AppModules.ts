import { Module } from '@nestjs/common';
import { GrowController } from './application/controllers/GrowController';

import { GrowRepository } from './core/repositories/GrowRepository';
import { PrismaGrowRepository } from './core/repositories/prisma/PrismaGrowRepository';

import { PrismaService } from './infra/database/PrismaService';
import { CreateGrowService } from './core/domain/grow/CreateGrowService';
import { UpdateGrowService } from './core/domain/grow/UpdateGrowService';
import { FilterGrowService } from './core/domain/grow/FilterGrowService';
import { GetByIdGrowService } from './core/domain/grow/GetByIdGrowService';
import { DeleteGrowService } from './core/domain/grow/DeleteGrowService';

@Module({
  imports: [],
  controllers: [GrowController],
  providers: [
    PrismaService,
    CreateGrowService,
    UpdateGrowService,
    FilterGrowService,
    GetByIdGrowService,
    DeleteGrowService,
    {
      provide: GrowRepository,
      useClass: PrismaGrowRepository,
    },
  ],
})
export class AppModule {}
