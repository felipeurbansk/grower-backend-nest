import { Module } from '@nestjs/common';
import { SeedController } from './application/controllers/SeedController';
import { Service } from './core/domain/Service';
import { CreateService } from './core/domain/CreateService';
import { DeleteService } from './core/domain/DeleteService';
import { FilterService } from './core/domain/FilterService';
import { GetByIdService } from './core/domain/GetByIdService';
import { UpdateService } from './core/domain/UpdateService';
import { SeedRepository } from './core/repositories/SeedRepository';
import { PrismaRepository } from './core/repositories/prisma/PrismaRepository';
import { PrismaService } from '../../infra/database/PrismaService';

@Module({
  controllers: [SeedController],
  providers: [
    {
      provide: SeedRepository,
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
export class SeedModule {}
