import { SeedRepository } from '../SeedRepository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/PrismaService';

@Injectable()
export class PrismaSeedRepository implements SeedRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: any): Promise<any> {
    return await this.prisma.seeds.create({ data });
  }

  async update(seed_id: number, data: any): Promise<any> {
    return await this.prisma.seeds.update({
      where: {
        id: seed_id,
      },
      data,
    });
  }

  async delete(seed_id: number): Promise<any> {
    return await this.prisma.seeds.delete({
      where: {
        id: seed_id,
      },
    });
  }

  async getAll(filter: any): Promise<any[]> {
    return await this.prisma.seeds.findMany({
      where: filter,
    });
  }

  async getById(seed_id: number): Promise<any> {
    return await this.prisma.seeds.findUnique({
      where: {
        id: seed_id,
      },
    });
  }
}
