import { Repository } from '../Repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/PrismaService';

@Injectable()
export class PrismaRepository implements Repository {
  constructor(private prisma: PrismaService) {}

  async create(data: any): Promise<any> {
    return await this.prisma.humidities.create({ data });
  }

  async update(humidty_id: number, data: any): Promise<any> {
    return await this.prisma.humidities.update({
      where: {
        id: humidty_id,
      },
      data,
    });
  }

  async delete(humidty_id: number): Promise<any> {
    return await this.prisma.humidities.delete({
      where: {
        id: humidty_id,
      },
    });
  }

  async getAll(filter: any): Promise<any[]> {
    return await this.prisma.humidities.findMany({
      where: filter,
    });
  }

  async getById(humidty_id: number): Promise<any> {
    return await this.prisma.humidities.findUnique({
      where: {
        id: humidty_id,
      },
    });
  }
}
