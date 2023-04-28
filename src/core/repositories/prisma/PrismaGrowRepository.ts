import { GrowRepository } from '../GrowRepository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/PrismaService';

@Injectable()
export class PrismaGrowRepository implements GrowRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: any): Promise<any> {
    return await this.prisma.grows.create({ data });
  }

  async update(grow_id: number, data: any): Promise<any> {
    return await this.prisma.grows.update({
      where: {
        id: grow_id,
      },
      data,
    });
  }

  async delete(grow_id: number): Promise<any> {
    return await this.prisma.grows.delete({
      where: {
        id: grow_id,
      },
    });
  }

  async getAll(filter: any): Promise<any[]> {
    return await this.prisma.grows.findMany({
      where: filter,
    });
  }

  async getById(grow_id: number): Promise<any> {
    return await this.prisma.grows.findUnique({
      where: {
        id: grow_id,
      },
    });
  }
}
