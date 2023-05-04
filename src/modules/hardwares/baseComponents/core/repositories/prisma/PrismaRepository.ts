import { Repository } from '../Repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/PrismaService';

@Injectable()
export class PrismaRepository implements Repository {
  constructor(private prisma: PrismaService) {}

  async create(data: any): Promise<any> {
    return await this.prisma.baseComponents.create({ data });
  }

  async update(baseComponent_id: number, data: any): Promise<any> {
    return await this.prisma.baseComponents.update({
      where: {
        id: baseComponent_id,
      },
      data,
    });
  }

  async delete(baseComponent_id: number): Promise<any> {
    return await this.prisma.baseComponents.delete({
      where: {
        id: baseComponent_id,
      },
    });
  }

  async getAll(filter: any): Promise<any[]> {
    return await this.prisma.baseComponents.findMany({
      where: filter,
    });
  }

  async getById(baseComponent_id: number): Promise<any> {
    return await this.prisma.baseComponents.findUnique({
      where: {
        id: baseComponent_id,
      },
    });
  }
}
