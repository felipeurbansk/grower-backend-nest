import { Module } from '@nestjs/common';
import { GrowController } from './application/controllers/GrowController';
import { Service } from './core/domain/Service';
import { CreateService } from './core/domain/CreateService';
import { DeleteService } from './core/domain/DeleteService';
import { FilterService } from './core/domain/FilterService';
import { GetByIdService } from './core/domain/GetByIdService';
import { UpdateService } from './core/domain/UpdateService';
import { GrowRepository } from './core/repositories/GrowRepository';
import { PrismaRepository } from './core/repositories/prisma/PrismaRepository';
import { PrismaService } from '../../infra/database/PrismaService';

@Module({
  controllers: [GrowController],
  providers: [
    {
      provide: GrowRepository,
      useClass: PrismaRepository,
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
