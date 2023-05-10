import { BaseComponentRepository } from '../BaseComponentRepository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/PrismaService';

@Injectable()
export class PrismaBaseComponentRepository implements BaseComponentRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: any): Promise<any> {
    return await this.prisma.base_components.create({ data });
  }

  async update(baseComponent_id: number, data: any): Promise<any> {
    return await this.prisma.base_components.update({
      where: {
        id: baseComponent_id,
      },
      data,
    });
  }

  async delete(baseComponent_id: number): Promise<any> {
    return await this.prisma.base_components.delete({
      where: {
        id: baseComponent_id,
      },
    });
  }

  async getAll(filter: any): Promise<any[]> {
    return await this.prisma.base_components.findMany({
      where: filter,
    });
  }

  async getById(baseComponent_id: number): Promise<any> {
    return await this.prisma.base_components.findUnique({
      where: {
        id: baseComponent_id,
      },
    });
  }
}
