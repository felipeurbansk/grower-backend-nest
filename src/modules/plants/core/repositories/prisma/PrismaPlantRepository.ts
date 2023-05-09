import { PlantRepository } from '../PlantRepository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/PrismaService';

@Injectable()
export class PrismaPlantRepository implements PlantRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: any): Promise<any> {
    return await this.prisma.plants.create({ data });
  }

  async update(plant_id: number, data: any): Promise<any> {
    return await this.prisma.plants.update({
      where: {
        id: plant_id,
      },
      data,
    });
  }

  async delete(plant_id: number): Promise<any> {
    return await this.prisma.plants.delete({
      where: {
        id: plant_id,
      },
    });
  }

  async getAll(filter: any): Promise<any[]> {
    return await this.prisma.plants.findMany({
      where: filter,
    });
  }

  async getById(plant_id: number): Promise<any> {
    return await this.prisma.plants.findUnique({
      where: {
        id: plant_id,
      },
    });
  }
}
