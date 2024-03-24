import { SeedRepository } from '../SeedRepository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/PrismaService';
import {
  SeedFilterInterface,
  SeedInterface,
} from '../../interfaces/seed.interface';

@Injectable()
export class PrismaSeedRepository implements SeedRepository {
  constructor(private prisma: PrismaService) {}

  async create(seed: SeedInterface): Promise<SeedInterface> {
    return await this.prisma.seeds.create({ data: seed });
  }

  async update(
    seed_id: number,
    data: SeedFilterInterface,
  ): Promise<SeedInterface> {
    return await this.prisma.seeds.update({
      where: {
        id: seed_id,
      },
      data,
    });
  }

  async delete(seed_id: number): Promise<SeedInterface> {
    return await this.prisma.seeds.delete({
      where: {
        id: seed_id,
      },
    });
  }

  async getAll(filter: SeedFilterInterface): Promise<SeedInterface[]> {
    return await this.prisma.seeds.findMany({
      where: filter,
    });
  }

  async getById(seed_id: number): Promise<SeedInterface> {
    console.log({ seed_id });
    return await this.prisma.seeds.findUnique({
      where: {
        id: seed_id,
      },
    });
  }
}
