import { FarmingRepository } from '../FarmingRepository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/PrismaService';

@Injectable()
export class PrismaFarmingRepository implements FarmingRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: any): Promise<any> {
    return await this.prisma.farmings.create({ data });
  }

  async update(farming_id: number, data: any): Promise<any> {
    return await this.prisma.farmings.update({
      where: {
        id: farming_id,
      },
      data,
    });
  }

  async delete(farming_id: number): Promise<any> {
    return await this.prisma.farmings.delete({
      where: {
        id: farming_id,
      },
    });
  }

  async getAll(filter: any): Promise<any[]> {
    return await this.prisma.farmings.findMany({
      where: filter,
    });
  }

  async getById(farming_id: number): Promise<any> {
    return await this.prisma.farmings.findUnique({
      where: {
        id: farming_id,
      },
    });
  }
}
