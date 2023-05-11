import { Module } from '@nestjs/common';
import { SeedControllers } from './controllers/SeedControllers';
import { SeedService } from './core/services';
import { CreateSeedService } from './core/services/CreateSeedService';
import { DeleteSeedService } from './core/services/DeleteSeedService';
import { FilterSeedService } from './core/services/FilterSeedService';
import { GetSeedByIdService } from './core/services/GetSeedByIdService';
import { UpdateSeedService } from './core/services/UpdateSeedService';
import { SeedRepository } from './core/repositories/SeedRepository';
import { PrismaSeedRepository } from './core/repositories/prisma/PrismaSeedRepository';
import { PrismaService } from '../../infra/database/PrismaService';
import { DecodeJWTToken } from 'src/tools/DecodeJWTToken';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { UserIdBodyInterceptor } from 'src/auth/interceptor/UserIdBodyInterceptor';

@Module({
  exports: [SeedService],
  controllers: [SeedControllers],
  providers: [
    {
      provide: SeedRepository,
      useClass: PrismaSeedRepository,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: UserIdBodyInterceptor,
    },
    DecodeJWTToken,
    CreateSeedService,
    DeleteSeedService,
    FilterSeedService,
    GetSeedByIdService,
    UpdateSeedService,
    SeedService,
    PrismaService,
  ],
})
export class SeedModule {}
