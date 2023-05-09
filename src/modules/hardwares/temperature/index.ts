import { Module } from '@nestjs/common';
import { TemperatureControllers } from './controllers/TemperatureControllers';
import { TemperatureService } from './core/services';
import { CreateTemperatureService } from './core/services/CreateTemperatureService';
import { DeleteTemperatureService } from './core/services/DeleteTemperatureService';
import { FilterTemperatureService } from './core/services/FilterTemperatureService';
import { GetTemperatureByIdService } from './core/services/GetTemperatureByIdService';
import { UpdateTemperatureService } from './core/services/UpdateTemperatureService';
import { TemperatureRepository } from './core/repositories/TemperatureRepository';
import { PrismaTemperatureRepository } from './core/repositories/prisma/PrismaTemperatureRepository';
import { PrismaService } from '../../../infra/database/PrismaService';

@Module({
  exports: [TemperatureService],
  controllers: [TemperatureControllers],
  providers: [
    {
      provide: TemperatureRepository,
      useClass: PrismaTemperatureRepository,
    },
    CreateTemperatureService,
    DeleteTemperatureService,
    FilterTemperatureService,
    GetTemperatureByIdService,
    UpdateTemperatureService,
    TemperatureService,
    PrismaService,
  ],
})
export class TemperatureModule {}
