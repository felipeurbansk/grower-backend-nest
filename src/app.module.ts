import { Module } from '@nestjs/common';
import { GrowController } from './application/controllers/grow.controller';

import { GrowRepository } from './core/repositories/grow-repository';
import { PrismaGrowRepository } from './core/repositories/prisma/prisma-grow-repository';

import { PrismaService } from './infra/database/prisma.service';

@Module({
  imports: [],
  controllers: [GrowController],
  providers: [
    PrismaService,
    {
      provide: GrowRepository,
      useClass: PrismaGrowRepository,
    },
  ],
})
export class AppModule {}
