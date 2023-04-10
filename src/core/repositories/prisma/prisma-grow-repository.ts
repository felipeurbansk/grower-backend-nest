import { PrismaService } from '../../infra/database/prisma.service';
import { GrowRepository } from '../grow-repository';
import { randomUUID } from 'crypto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaGrowRepository implements GrowRepository {
  constructor(private prisma: PrismaService) {}

  async create(
    name: string,
    width: number,
    height: number,
    depth: number,
  ): Promise<void> {
    await this.prisma.grow.create({
      data: {
        id: randomUUID(),
        name,
        depth,
        width,
        height,
      },
    });
  }
}
