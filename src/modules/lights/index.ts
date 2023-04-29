import { Module } from '@nestjs/common';
import { LightController } from './application/controllers/LightController';
import { Service } from './core/domain/Service';
import { CreateService } from './core/domain/CreateService';
import { DeleteService } from './core/domain/DeleteService';
import { FilterService } from './core/domain/FilterService';
import { GetByIdService } from './core/domain/GetByIdService';
import { UpdateService } from './core/domain/UpdateService';
import { LightRepository } from './core/repositories/LightRepository';
import { PrismaRepository } from './core/repositories/prisma/PrismaRepository';
import { PrismaService } from '../../infra/database/PrismaService';

@Module({
  controllers: [LightController],
  providers: [
    {
      provide: LightRepository,
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
export class LightModule {}
