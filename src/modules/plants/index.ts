import { Module } from '@nestjs/common';
import { Controllers } from './controllers/Controllers';
import { Service } from './core/domain/Service';
import { CreateService } from './core/domain/CreateService';
import { DeleteService } from './core/domain/DeleteService';
import { FilterService } from './core/domain/FilterService';
import { GetByIdService } from './core/domain/GetByIdService';
import { UpdateService } from './core/domain/UpdateService';
import { Repository } from './core/repositories/Repository';
import { PrismaRepository } from './core/repositories/prisma/PrismaRepository';
import { PrismaService } from '../../infra/database/PrismaService';

@Module({
  controllers: [Controllers],
  providers: [
    {
      provide: Repository,
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
export class PlantModule {}
