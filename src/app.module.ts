import { Module } from '@nestjs/common';
import { AppController } from './application/controllers/app.controller';

import { GrowRepository } from './core/repositories/grow-repository';
import { PrismaGrowRepository } from './core/repositories/prisma/prisma-grow-repository';

import { PrismaService } from './infra/database/prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: GrowRepository,
      useClass: PrismaGrowRepository,
    },
  ],
})
export class AppModule {}
