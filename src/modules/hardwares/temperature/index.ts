import { Module } from '@nestjs/common';
import { Controllers } from './controllers/Controllers';
import { Service } from './core/services';
import { CreateService } from './core/services/CreateService';
import { DeleteService } from './core/services/DeleteService';
import { FilterService } from './core/services/FilterService';
import { GetByIdService } from './core/services/GetByIdService';
import { UpdateService } from './core/services/UpdateService';
import { Repository } from './core/repositories/Repository';
import { PrismaRepository } from './core/repositories/prisma/PrismaRepository';
import { PrismaService } from '../../../infra/database/PrismaService';

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
export class TemperatureModule {}
