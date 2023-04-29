import { LightRepository } from '../LightRepository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/PrismaService';

@Injectable()
export class PrismaRepository implements LightRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: any): Promise<any> {
    return await this.prisma.lights.create({ data });
  }

  async update(light_id: number, data: any): Promise<any> {
    return await this.prisma.lights.update({
      where: {
        id: light_id,
      },
      data,
    });
  }

  async delete(light_id: number): Promise<any> {
    return await this.prisma.lights.delete({
      where: {
        id: light_id,
      },
    });
  }

  async getAll(filter: any): Promise<any[]> {
    return await this.prisma.lights.findMany({
      where: filter,
    });
  }

  async getById(light_id: number): Promise<any> {
    return await this.prisma.lights.findUnique({
      where: {
        id: light_id,
      },
    });
  }
}
